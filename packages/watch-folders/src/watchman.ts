/**
 *
 * not using this anymore!
 */

import watchman from "fb-watchman";
import { path } from "fs-util";
import { PackageJson } from "code-types";
import { OnChangeDetected } from "./types";
import { FileType } from "make-file-type";
/**
 * type from watchman
 */
export type SubscriptionResponse = {
  subscription: string;
  root: string;
  files: FileType[];
};

export type WatchSource = {
  packageInfo: PackageJson;
  folderPath: string;
  dependencyName: string;
};

const uniqueAppKey = "watch-folders";

const getSubInfo = (subscriptionKey: string) => {
  const [appKey, rootPath, relativePath] = subscriptionKey.split(":");

  if (appKey !== uniqueAppKey) {
    return;
  }
  if (!rootPath) {
    console.log("No rootpath found", subscriptionKey);
    return;
  }

  const fullPath = relativePath ? path.join(rootPath, relativePath) : rootPath;

  return {
    fullPath,
    relativePath,
    rootPath,
  };
};

const getSubName = (watchBaseFolder: string, watchRelativePath?: string) =>
  `${uniqueAppKey}:${watchBaseFolder}${
    watchRelativePath ? `:${watchRelativePath}` : ""
  }`;

// `watch` is obtained from `resp.watch` in the `watch-project` response.
// `relative_path` is obtained from `resp.relative_path` in the
// `watch-project` response.
export function makeSubscription(
  client: watchman.Client,
  watchBaseFolder: string,
  watchRelativePath: string,
  debug: boolean
) {
  /**
   * this can probably be optimised
   */
  const sub = {
    // Match any `.js` file in the dir_of_interest
    expression: ["allof", ["match", "*.*"]],
    // Which fields we're interested in
    fields: ["name", "size", "mtime_ms", "exists", "type"],
    relative_root: undefined as undefined | string,
    // add our time constraint
  };

  if (watchRelativePath) {
    sub.relative_root = watchRelativePath;
  }

  const subName = getSubName(watchBaseFolder, watchRelativePath);

  client.command(
    ["subscribe", watchBaseFolder, subName, sub],
    function (error, resp) {
      if (error) {
        // Probably an error in the subscription criteria
        console.error("Failed to subscribe: ", error);
        return;
      }
      if (debug) {
        console.log(
          "New subscription:",
          "subscription " + resp.subscribe + " established"
        );
      }
    }
  );

  return subName;
}

export const initiateWatch = ({
  client,
  debug,
  folderPath,
}: {
  client: watchman.Client;
  debug: boolean;
  folderPath: string;
}) => {
  client.command(["watch-project", folderPath], function (error, resp) {
    if (error) {
      console.error("Error initiating watch:", error);
      return;
    }

    // It is considered to be best practice to show any 'warning' or
    // 'error' information to the user, as it may suggest steps
    // for remediation
    if ("warning" in resp) {
      console.log("Warning initiating watch: ", resp.warning);
    }

    // `watch-project` can consolidate the watch for your
    // dir_of_interest with another watch at a higher level in the
    // tree, so it is very important to record the `relative_path`
    // returned in resp

    if (debug) {
      console.log(
        "New watch:",
        "watch established on ",
        resp.relative_path
          ? path.join(resp.watch, resp.relative_path)
          : resp.watch
      );
    }

    makeSubscription(client, resp.watch, resp.relative_path, debug);
  });
};

/**
 * checks if watchman client is ok. ends client if it's not ok
 */
const isClientOk = (client: watchman.Client, debug: boolean) => {
  return new Promise<void>((resolve, reject) => {
    client.capabilityCheck(
      { optional: [], required: ["relative_root"] },
      function (error: any, resp: any) {
        if (error) {
          // error will be an Error object if the watchman service is not
          // installed, or if any of the names listed in the `required`
          // array are not supported by the server
          console.error(error);
          client.end();
          return reject();
        }
        if (debug) {
          console.log("Watchman is ok", resp);
        }

        resolve();
      }
    );
  });
};

/**
 * watches folder paths and executes a callback when something changes in one of them
 *
 * TODO: check fs/promises.watch, that seems like a simple alternative of this! Could it be? Could it remove the need for watchman?
 */
export const watchFolders = async ({
  debug = false,
  folders,
  onChange,
}: {
  debug?: boolean;
  folders: string[];
  onChange: OnChangeDetected;
}) => {
  const client = new watchman.Client();
  await isClientOk(client, debug);
  // Initiate watching each folder
  folders.forEach((folderPath) => initiateWatch({ client, debug, folderPath }));

  // whenever there has been a change detected, this function will be called. Beware, can also be from other watch sources!
  client.on(
    "subscription",
    function ({ subscription, files, root }: SubscriptionResponse) {
      const subInfo = getSubInfo(subscription);
      if (!subInfo) return;
      const { fullPath, relativePath, rootPath } = subInfo;
      const ourWatch = folders.includes(fullPath);
      if (!ourWatch) return;

      onChange({ fullPath, relativePath, rootPath, files });
    }
  );
};
