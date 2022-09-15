import { log } from "log";
import { getLastFolder, path } from "fs-util";
import { TsConfig, TsBuildError, PackageJson } from "code-types";
import { Creation, generateId } from "model-types";
import typescript from "typescript";
import {
  findOperationBasePath,
  getOperationPathParse,
  getPathParse,
} from "get-path";
import { notEmpty } from "js-util";

/**
 * uses official typescript compiler to check all given files for compilation errors
 */
export function getTypescriptErrorsFromFiles({
  filePaths,
  debug,
}: {
  basePath: string;
  filePaths: string[];
  compilerOptions: TsConfig["compilerOptions"];
  packageJson: PackageJson;
  debug?: boolean;
}): Creation<TsBuildError>[] {
  try {
    const program = typescript.createProgram(filePaths, {});
    const emitResult = program.emit(undefined, (fileName) => {
      if (debug) console.log(`emitted ${fileName}, not writing.`);
    });

    const allDiagnostics = typescript
      .getPreEmitDiagnostics(program)
      .concat(emitResult.diagnostics);

    const buildErrors = allDiagnostics
      .map((diagnostic) => {
        let buildError: null | Creation<TsBuildError> = null;

        // TODO: Fix this! Obviously this isn't correct
        const filePath = filePaths[0];

        const operationBasePath = findOperationBasePath(filePath);
        if (!operationBasePath) return;

        const operationPathParse = getOperationPathParse(filePath);
        if (!operationPathParse) return;

        const operationName = getLastFolder(operationBasePath);
        const operationRelativeTypescriptFilePath =
          operationPathParse.operationRelativeTypescriptFilePath;

        if (diagnostic.file && diagnostic.start) {
          const { line, character } = typescript.getLineAndCharacterOfPosition(
            diagnostic.file,
            diagnostic.start
          );
          const message = typescript.flattenDiagnosticMessageText(
            diagnostic.messageText,
            "\n"
          );

          buildError = {
            message,
            operationName,
            operationRelativeTypescriptFilePath,
            line: line + 1,
            character: character + 1,
            id: generateId(),
            // TODO: later I can give this the name of the error maybe
            name: "TsBuildError",
            slug: "ts-build-error",
          };
          // console.log(
          //   `${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`
          // );
        } else {
          const message = typescript.flattenDiagnosticMessageText(
            diagnostic.messageText,
            "\n"
          );
          buildError = {
            id: generateId(),
            message,
            // TODO: later I can give this the name of the error maybe
            name: "TsBuildError",
            slug: "ts-build-error",
            operationRelativeTypescriptFilePath:
              operationPathParse.operationRelativeTypescriptFilePath,
          };
        }

        return buildError;
      })
      .filter(notEmpty);

    return buildErrors;
  } catch (e) {
    log(`WTF raar ${e}`, { type: "error" });
    return [];
  }
}
