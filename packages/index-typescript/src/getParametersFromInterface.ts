import { FunctionParameter, TsInterface } from "code-types";
import { notEmpty } from "js-util";
import { Creation } from "model-types";
import { getSchema, simplifySchema } from "schema-util";
import { getPossibleRefs } from "./getPossibleRefs";

export const getParametersFromInterfaces = (
  functionName: string,
  interfaces: Creation<TsInterface>[]
) => {
  const parametersInterface = interfaces.find(
    (x) => x.name === `NamedParameters<typeof ${functionName}>`
  );

  /*
    NB: this is how a named parameters typeDefinition looks for a function with 2 arguments
    {
      "type": "object",
      "properties": {
        "markdownString": { "type": "string" },
        "level": { "type": "number" }
      },
      "required": ["markdownString", "level"],
      "additionalProperties": false
    }
    */
  const properties = parametersInterface?.type.typeDefinition?.properties;

  const parameters: FunctionParameter[] = properties
    ? Object.keys(properties)
        .map((name) => {
          const propertySchema = getSchema(
            parametersInterface.type.typeDefinition?.properties?.[name]
          );
          const required =
            parametersInterface.type.typeDefinition?.required?.includes(name) ||
            false;

          return propertySchema
            ? {
                name,
                schema: propertySchema,
                simplifiedSchema: simplifySchema(
                  name,
                  propertySchema,
                  getPossibleRefs(interfaces),
                  []
                ),
                required,
              }
            : undefined;
        })
        .filter(notEmpty)
    : [];

  return parameters;
};
