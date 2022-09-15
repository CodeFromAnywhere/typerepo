import { OperationPathParse } from "code-types";
import { fs, path } from "fs-util";
import { getOperationPathParse } from "get-path";
import { log } from "log";

export type CompleteOperationPathParse = OperationPathParse & {
  filePath: string;
};

export const getValidatedOperationPathParse = (
  filePath: string
): undefined | CompleteOperationPathParse => {
  const fileParse = path.parse(filePath);

  if (![".ts", ".tsx"].includes(fileParse.ext)) {
    log(`Incorrect extension ${fileParse.ext}`, { type: "warning" });
    return;
  }

  // NB: filename is not only a name here but a relative path
  if (!fs.existsSync(filePath)) {
    log(`couldn't retreive filepath ${filePath}`, { type: "error" });
    return;
  }

  const operationPathParse = getOperationPathParse(filePath);
  if (!operationPathParse) {
    log("Operation must have a pathparse to be indexed", { type: "error" });
    return;
  }

  return { ...operationPathParse, filePath };
};
