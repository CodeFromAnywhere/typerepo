import { TsImport } from "code-types";
import { db } from "database";
import { onlyUnique } from "js-util";
import { log } from "log";

/**
 * exits the process if our own dependencies change
 */
export const exitIfProcessDependenciesChanged = async (
  operationName: string,
  manualProjectRoot?: string
) => {
  const imports = (
    await Promise.all(
      ["watch-operations", "rebuild-operation"].map(
        async (operationName) =>
          // @ts-ignore
          db.get("TsImport", { operationName, manualProjectRoot }) as Promise<
            TsImport[]
          >
      )
    )
  )
    .flat()
    .map((i: TsImport) => i.module)
    // apparently this isn't a dependency of the above 3
    .concat(["watch-operations"])
    .filter(onlyUnique);

  if (operationName && imports.includes(operationName)) {
    log(`One of our dependencies (${operationName}) changed. Let's restart.`, {
      type: "important",
    });
    process.exit(1);
  }
};
