import { TsInterface } from "code-types";
import { notEmpty } from "js-util";
import { JSONSchema7 } from "json-schema";
import { Creation } from "model-types";

export const getPossibleRefs = (
  interfaces: Creation<TsInterface>[]
): { name: string; schema: JSONSchema7 }[] => {
  const possibleRefs = interfaces
    .map((tsInterface) => {
      return tsInterface.type.typeDefinition
        ? {
            name: tsInterface.name,
            schema: tsInterface.type.typeDefinition,
          }
        : null;
    })
    .filter(notEmpty);

  return possibleRefs;
};
