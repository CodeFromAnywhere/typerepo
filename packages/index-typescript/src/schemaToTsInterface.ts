/**
TODO:

Make sure the same interfaces don't get generated multiple times: when indexing a file, the file should only include interfaces from that file and interfaces from other packages, but not from relative imports. This should be fine because when you're using an operation, those relative imported types are indexed as well.

When generating a schema, also use ts-morph to get the AST for the interface so we can:

- find the interfaces an interface extends and its doccomment.
- get the raw type/interface text
*/

import { getSchema, simplifySchema } from "schema-util";
import { Schema } from "ts-json-schema-generator";
import { TsInterface } from "code-types";
import { kebabCase } from "convert-case";
import { parseFrontmatterMarkdownString } from "markdown-parse-js";
import { notEmpty } from "js-util";
import { MorphInterfaceInfo } from "./types";
import { stripComment } from "comment-util";
import { getDbStorageMethod } from "./getDbStorageMethod";
import { Creation } from "model-types";
import { findOperationBasePath, getOperationRelativePath } from "get-path";

/**
 make a tsInterface from a schema generated from the file
  */
export const schemaToTsInterface = async (
  filePath: string,
  typeName: string,
  schema: Schema,
  morphInterfaceInfo: MorphInterfaceInfo | undefined
): Promise<Creation<TsInterface> | undefined> => {
  const definitionOrBoolean = schema.definitions?.[typeName];

  const operationBasePath = findOperationBasePath(filePath);
  if (!operationBasePath) return;

  const possibleRefs = schema.definitions
    ? Object.keys(schema.definitions)
        .map((typeName) => {
          const theSchema = getSchema(schema.definitions?.[typeName]);
          return theSchema ? { name: typeName, schema: theSchema } : null;
        })
        .filter(notEmpty)
    : [];
  const definition: Schema | undefined =
    typeof definitionOrBoolean === "object" ? definitionOrBoolean : undefined;

  if (!definition) return undefined;

  const parsedDescription = parseFrontmatterMarkdownString(
    stripComment(
      morphInterfaceInfo?.description || definition.description || ""
    )
  );

  const frontmatter = parsedDescription.parameters;

  const { operationRelativePath } = frontmatter;

  const isOperationIndex: boolean =
    frontmatter.isOperationIndex === undefined
      ? morphInterfaceInfo?.extensions.includes("TsIndexModelType") || false
      : Boolean(frontmatter.isOperationIndex);

  const dbStorageMethod = getDbStorageMethod({
    typeName,
    frontmatter,
    extensions: morphInterfaceInfo?.extensions,
  });

  const isDbModel = !!dbStorageMethod;

  const slug = kebabCase(typeName);

  const operationRelativeTypescriptFilePath = getOperationRelativePath(
    filePath,
    operationBasePath
  );

  const hasGeneric = !!morphInterfaceInfo?.hasGeneric;
  const isExported = !!morphInterfaceInfo?.isExported;
  const interfaceObject: Creation<TsInterface> = {
    // identifiers
    id: slug,
    name: typeName,
    slug,

    operationRelativeTypescriptFilePath,

    hasGeneric,
    isExported,

    rawText: morphInterfaceInfo?.raw,
    extensions: morphInterfaceInfo?.extensions,
    isOperationIndex,
    operationStorageLocationRelativeFilePath: operationRelativePath
      ? String(operationRelativePath)
      : undefined,
    // interface info
    description: parsedDescription?.raw,
    dbStorageMethod,
    isDbModel,
    // TODO:
    commentsInside: [],
    type: {
      // TODO: test
      typeDefinition: definition,
      simplifiedSchema: simplifySchema(typeName, definition, possibleRefs, []),
      // TODO:
      typeCoverage: 0,
      rawType: typeName,
      // TODO:
      isArray: false,
      isEnum: false,
      isEnumLiteral: false,
      isObject: false,
      isPrimitive: false,
    },
  };

  return interfaceObject;
};
