import { fs, path } from "fs-util";

export type CopyPair = {
  absoluteSourcePath: string;
  absoluteDestinationPath: string;
};

export const copyCopyPairs = (copyPairs: CopyPair[]) => {
  const copyPromises = copyPairs.map(async (copyPair) => {
    const absoluteDestinationFolderPath = path.parse(
      copyPair.absoluteDestinationPath
    ).dir;

    // first make the folder if not already there
    if (!fs.existsSync(absoluteDestinationFolderPath)) {
      await fs.mkdir(absoluteDestinationFolderPath, { recursive: true });
    }

    await fs.cpAsync(
      copyPair.absoluteSourcePath,
      copyPair.absoluteDestinationPath,
      {
        preserveTimestamps: true,
      }
    );
  });

  return Promise.all(copyPromises);
};
