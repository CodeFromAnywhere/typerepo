// import { watch } from "fs";
import { watch } from "chokidar";
import { fs, path } from "fs-util";
import { makeFileType, FileType } from "make-file-type";
import { log } from "log";
import { PendingItem } from "./types";

let pending: PendingItem[] = [];

const noPending = () => pending.length === 0;

/**
 * checks if pending has items every 5 seconds, resolves after it hasnt
 *
 * this is a handy thing to have in util, but it can also probably be much more simple
 */
const isStillPending = async () => {
  if (noPending()) return false;
  //
  console.log("awaiting pending", pending);
  //
  await new Promise<void>((resolve, reject) => {
    // do this every 5 seconds
    setInterval(async () => {
      if (noPending()) {
        resolve();
      } else {
        //console.log(`still pending`, pending);
      }
    }, 5000); //
  }); //

  return;
};
/**
 * watches folder paths and executes a callback when something changes in one of them
 *
 * uses fs.watch
 * */
export const watchFoldersChokidar = async ({
  debug = false,
  folders,
  onChange,
  takeLatest,
}: {
  debug?: boolean;
  folders: string[];
  takeLatest?: boolean;
  onChange: (event: {
    eventType: "rename" | "change";
    filePaths: string[];
    operationBasePath: string;
  }) => Promise<void>;
}) => {
  const startTime = Date.now();
  folders.map((absoluteFolderPath) => {
    watch(`${absoluteFolderPath}/*`).on(
      "all",
      async (eventType, absolutePath) => {
        // NB: in the beginning , all folders/files are firing the "addDir" and "add" events, this hack prevents that this fires rebuilds for all folders.
        if (Date.now() < startTime + 1000) return;

        // NB: addDir should not be firing anything
        if (eventType === "addDir") return;

        const stats = await fs.stat(absolutePath);
        // NB: ensure that the path is not a directory
        if (stats.isDirectory()) return;

        const srcRelativeFilePath = absolutePath.substring(
          absoluteFolderPath.length + 1
        );

        const alreadyPending = pending.filter(
          (x) => x.filename === srcRelativeFilePath
        );

        const lastPending = alreadyPending.pop();

        // if a file was just triggered and within a second triggered again, ignore it
        // same file within a second
        if (lastPending && Date.now() - lastPending.time < 5000) {
          log(`double trigger of ${srcRelativeFilePath}, ignoring`, {
            type: "warning",
          });
          return;
        }

        if (alreadyPending.length > 0) {
          log(`multiple pending of this file, ignoring`, { type: "warning" });
          return;
        }

        //  await isStillPending();

        // NB: time is also the unique id together with filename
        const time = Date.now();
        pending.push({ filename: srcRelativeFilePath, time });

        const basePath = absoluteFolderPath;
        const operationBasePath = path.join(basePath, "..");

        const fullPath = path.join(absoluteFolderPath, srcRelativeFilePath);
        // TODO: Somehow, it would be great if we could batch changes from multiple files together, so it will execute after there are no changes for more than 30 seconds (or if you press the 'e' button). This will make it more efficient.

        await onChange({
          operationBasePath,
          eventType: "change",
          filePaths: [fullPath],
        });

        // after it's done, remove from the array
        pending = pending.filter(
          (p) => p.filename === absolutePath && p.time === time
        );
      }
    );
  });
};
