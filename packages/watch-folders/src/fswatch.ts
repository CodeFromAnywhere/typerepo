import { watch } from "fs";
import { path } from "fs-util";
import { makeFileType, FileType } from "make-file-type";
import { log } from "log";

type PendingItem = { time: number; filename: string };
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
export const watchFoldersFs = async ({
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
  folders.map((folder) => {
    watch(
      folder,
      { recursive: true, encoding: "utf8" },
      async (eventType, filename) => {
        const alreadyPending = pending.filter((x) => x.filename === filename);

        const lastPending = alreadyPending.pop();

        // if a file was just triggered and within a second triggered again, ignore it
        // same file within a second
        if (lastPending && Date.now() - lastPending.time < 5000) {
          log(`double trigger of ${filename}, ignoring`, { type: "warning" });
          return;
        }

        if (alreadyPending.length > 0) {
          log(`multiple pending of this file, ignoring`, { type: "warning" });
          return;
        }

        //  await isStillPending();

        // NB: time is also the unique id together with filename
        const time = Date.now();
        pending.push({ filename, time });

        const basePath = folder;
        const operationBasePath = path.join(basePath, "..");

        const fullPath = path.join(folder, filename);
        // TODO: Somehow, it would be great if we could batch changes from multiple files together, so it will execute after there are no changes for more than 30 seconds (or if you press the 'e' button). This will make it more efficient.

        await onChange({
          operationBasePath,
          eventType,
          filePaths: [fullPath],
        });

        // after it's done, remove from the array
        pending = pending.filter(
          (p) => p.filename === filename && p.time === time
        );
      }
    );
  });
};
