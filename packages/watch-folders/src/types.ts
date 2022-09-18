import { FileType } from "make-file-type";

export type OnChangeDetected = ({
  files,
  fullPath,
  relativePath,
  rootPath,
}: {
  fullPath: string;
  relativePath: string;
  rootPath: string;
  files: FileType[];
}) => void;
