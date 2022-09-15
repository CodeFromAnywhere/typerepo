import { TypeInfo } from "code-types";
import { log } from "log";
import { simplifySchema } from "schema-util";
import { Schema } from "ts-json-schema-generator";
import { Type } from "ts-morph";
import { typeToSchema } from "./typeToSchema";

/** takes a ts morph type and returns all info about it
 *
 * if available, a schema should be provided about the type because it's hard to infer it (probably buggy)
 */
export const getTypeInfo = (type: Type, schema?: Schema): TypeInfo => {
  const rawType = type.getApparentType().getText();
  const isArray = type.isArray();
  const isEnum = type.isEnum();
  const isEnumLiteral = type.isEnumLiteral();
  const isPrimitive = type.isString() || type.isNumber() || type.isBoolean();
  const isObject = type.isObject();

  let typeDefinition: Schema | undefined = undefined;
  try {
    typeDefinition = schema || typeToSchema(type);
  } catch (e) {
    log(`Type to schema failed with error: ${e}`, { type: "debug" });
  }

  const typeInfo: TypeInfo = {
    rawType,
    typeDefinition,
    // TODO:
    typeCoverage: 0,
    // this is easy to infer
    isArray,
    isEnum,
    isObject,
    isPrimitive,
    isEnumLiteral,
    simplifiedSchema: typeDefinition
      ? simplifySchema("type", typeDefinition, [], [])
      : undefined,
  };

  return typeInfo;
};
