/**
TODO: NB: Make sure the same interfaces don't get generated multiple times: when indexing a file, the file should only include interfaces from that file and interfaces from other packages, but not from relative imports. This should be fine because when you're using an operation, those relative imported types are indexed as well. NB: this doesn't really solve it still... there will still be duplication.

When generating a schema, also use ts-morph to get the AST for the interface so we can:

- find the interfaces an interface extends and its doccomment.
- get the raw type/interface text


NB:

unsupported features of ts-json-schema-generator are, among other things, function type interfaces.

More info:

https://github.com/vega/ts-json-schema-generator/issues/98
https://github.com/vega/ts-json-schema-generator/issues/104

Until this is solved, it will be difficult to get types of nested functions (other option would be to try and do it with ts-morph)
*/

import { Config, createGenerator, Schema } from "ts-json-schema-generator";
import { TsInterface, MaybeInteface } from "code-types";
import { log } from "log";
import { path, fs } from "fs-util";
import { findOperationBasePath, makeRelative } from "get-path";
import { writeKeyToOperationIndexJson } from "operation-util";
import { notEmpty } from "js-util";
import { MorphInterfaceInfo } from "./types";
import { schemaToTsInterface } from "./schemaToTsInterface";
import { Creation } from "model-types";

/**
 * Try because sometimes generateSchema fails
 */
export const tryCreateSchema = (
  config: Config
): { schema?: Schema; error?: string } => {
  try {
    const generator = createGenerator(config);
    const schema: Schema = generator.createSchema(config.type);
    return { schema };
  } catch (e) {
    return { error: String(e) };
  }
};

export function hasDefinition(
  maybeInterface: MaybeInteface
): maybeInterface is TsInterface {
  return maybeInterface.type.typeDefinition !== null;
}

/**
 * If existing schema is not stale, just require it.
 * Otherwise, generate it for a file
 * 
 * NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!

 */
export const generateSchema = async (
  filePath: string,
  morphInterfaceInfo: MorphInterfaceInfo[],
  namedAbsoluteImportNames: string[]
): Promise<Creation<TsInterface>[]> => {
  // console.log({ filePath, namedAbsoluteImportNames });
  const problems: string[] = [];

  const operationBasePath = findOperationBasePath(filePath);
  if (!operationBasePath) {
    log("No operation base path");
    return [];
  }
  const operationRelativePath = makeRelative(filePath, operationBasePath);

  if (operationRelativePath === "src/index.ts") {
    // should not index index
    log("This should never happen, operationRelativePath is src/index");
    return [];
  }

  const tsConfigPath = path.join(operationBasePath, "tsconfig.json");
  const tsConfigExists = fs.existsSync(tsConfigPath);

  if (!tsConfigExists) {
    const problem = `no tsconfig found for ${filePath}, not generating schemas`;
    log(problem, {
      type: "error",
    });
    problems.push(problem);

    await writeKeyToOperationIndexJson(
      filePath,
      "indexInteracesErrors",
      problems
    );

    return [];
  }

  // TODO: check the defaults and possibilities in the docs/readme
  const config: Config = {
    // skipTypeCheck: true,
    path: filePath,
    tsconfig: tsConfigPath,
    type: "*", // Or <type-name> if you want to generate schema for that one type only
  };
  const { schema, error } = tryCreateSchema(config);

  if (!schema || !schema.definitions) {
    const problem = `No schema/definitions found for ${filePath}. Error: ${error}`;
    log(problem, { type: "debug" });

    await writeKeyToOperationIndexJson(filePath, "indexInteracesErrors", [
      problem,
    ]);

    return [];
  }

  const interfacePromises = Object.keys(schema.definitions).map((typeName) => {
    const thisMorphInterfaceInfo = morphInterfaceInfo.find(
      (x) => x.name === typeName
    );

    const tsMorphFoundTypeAlso = !!thisMorphInterfaceInfo;
    const isImportedType = namedAbsoluteImportNames.includes(typeName);
    const isNamedParameters = typeName.startsWith("NamedParameters");
    if (tsMorphFoundTypeAlso || isImportedType || isNamedParameters) {
      return schemaToTsInterface(
        filePath,
        typeName,
        schema,
        thisMorphInterfaceInfo
      );
    }

    // console.log({ definitionNames: Object.keys(schema.definitions) });

    log(
      `Skipping type ${typeName}`,
      { type: "debug" },
      { tsMorphFoundTypeAlso, isImportedType, isNamedParameters }
    );

    // NB: only the interfaces declared in this file end up in the database! otherwise you'll get duplicates anyway.

    // NB: we are still allowing absolute imported types to end up in the database. They will not be exported from our index, but we still need them for some frontend-generation tasks.
    return;
  });

  const interfaces = (await Promise.all(interfacePromises)).filter(notEmpty);

  return interfaces;
};
