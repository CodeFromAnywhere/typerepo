import { last, merge, set } from "lodash";
require("reflect-metadata");
import {
  //   ClassDeclaration,
  Decorator,
  // Project,
  Type,
  Symbol as tsSymbol,
  SymbolFlags,
} from "ts-morph";
const ajvMap = {
  number: "imum",
  string: "Length",
  array: "Items",
  object: "Properties",
};

export const symbols = {
  controller: Symbol(),
  route: Symbol(),
  basePath: Symbol(),
  validations: Symbol(),
};

const toSnack = (key: string) =>
  key.replace(/([A-Z])/g, ($1) => "-" + $1.toLowerCase()).replace(/^-/, "");

// type Schema = Definition;
// NB: it would probably be better to make it typesafe and not to create a new type for this, but it's also very hard I guess...
export type SimpleJsonSchema = {
  "x-enumNames"?: string[];
  $ref?: string;
  format?: string;
  oneOf?: SimpleJsonSchema[];
  optional?: boolean;
  type?: any;
  items?: any;
  properties?: any;
  required?: string[];
  allOf?: any[];
  enum?: any[];
  transform?: string[];
};

// const project = new Project({
//   tsConfigFilePath: process.cwd() + "/tsconfig.json",
// });
// const sourceFiles = project.getSourceFiles();
// const allClasses: { [name: string]: ClassDeclaration } = {};
// sourceFiles.forEach((s) => {
//   s.getClasses().forEach((c) => {
//     allClasses[c.getName() as string] = c;
//   });
// });
const definitions: { [key: string]: any } = {};
// export const getDefinitions = () => definitions;

// export const getClass = (name) => allClasses[name];

export const isPrimitive = (type: Type) =>
  type.isBoolean() || type.isNumber() || type.isString();

export const getMinMaxValidation = (
  keyword: "min" | "max",
  type: string,
  value: number
) => {
  const t = type.toLowerCase() as keyof typeof ajvMap;
  return set({}, keyword + ajvMap[t], value);
};

function handleExplicitValidation(
  type: string,
  schema: any,
  decorators: Decorator[] = []
): SimpleJsonSchema {
  decorators.forEach((d) => {
    const dName = d.getName();
    switch (dName) {
      case "min":
      case "max": {
        const firstArgumentTextNumber = +d.getArguments()[0].getText();
        schema = merge(
          schema,
          getMinMaxValidation(dName, type, firstArgumentTextNumber)
        );
        break;
      }
      case "time":
      case "date":
      case "dateTime":
      case "duration":
      case "uri":
      case "uriReference":
      case "uriTemplate":
      case "email":
      case "hostname":
      case "ipv4":
      case "ipv6":
      case "uuid":
      case "jsonPointer":
      case "relativeJsonPointer": {
        schema = merge(schema, { format: toSnack(dName) });
        break;
      }
    }
  });
  return schema;
}

const getObjectSchema = (
  type: Type,
  decorators: Decorator[],
  schemaProps: { [key: string]: any } = {}
) => {
  const schema: SimpleJsonSchema = {};
  // schema = {} handleExplicitValidation("object", schema, decorators);
  schema.type = "object";
  schema.properties = {};
  schema.required = schema.required || [];
  const typeText = type.getText();
  const nonNullableType = type.getNonNullableType();
  const nonNullableTypeText = nonNullableType.getText();
  schema.optional = nonNullableTypeText !== typeText;
  type
    .getNonNullableType()
    .getProperties()
    .forEach((prop) => {
      const key = prop.getName();
      const isGetter = prop.hasFlags(SymbolFlags.GetAccessor);
      if (["request", "reply"].includes(key) || isGetter) return;
      const valueDeclaration = prop.getValueDeclarationOrThrow();
      const decorators = (valueDeclaration as any).getDecorators
        ? (valueDeclaration as any).getDecorators()
        : [];

      schema.properties[key] = {
        ...(getParamSchema(valueDeclaration.getType(), decorators, prop) || {}),
        ...(schemaProps[key] || {}),
      };

      if (!schema.properties[key]) {
        console.warn("missing type for - " + key);
        schema.properties[key] = { type: "object" };
      }
      if (schema.properties[key].optional !== true) {
        schema.required?.push(key);
      }
      delete schema.properties[key].optional;
    });

  if (!schema.required.length) {
    delete schema.required;
  }

  return schema;
};

/**
 * calculates the schema of a type
 *
 * this is great for types inside of parameters of variables that are not declared separately, however, it's probably not as good as vega's json schema generator... therefore, it would be great to always prefer vega's way above this.
 *
 * NB: this method throws sometimes if it can't find some stuff, so make sure to try/catch it.
 *
 * TODO: Test and improve this one
 */
export const typeToSchema = (type: Type) => getParamSchema(type);

export const getParamSchema = (
  type: Type,
  decorators: Decorator[] = [],
  prop: tsSymbol | undefined = undefined
) => {
  const typeText = type.getText();
  const nonNullableType = type.getNonNullableType();
  const nonNullableTypeText = nonNullableType.getText();
  let schema: SimpleJsonSchema = {};

  schema.optional = nonNullableTypeText !== typeText;

  if (nonNullableType.isArray()) {
    schema = handleExplicitValidation("array", schema, decorators);
    schema.type = "array";
    schema.items =
      getParamSchema(nonNullableType.getArrayElementTypeOrThrow(), []) || {};
    Object.keys(schema.items).forEach(
      (key) => delete schema.items[key].optional
    );
    delete schema.items.optional;
    return schema;
  }
  if (nonNullableType.getText() === "Date") {
    schema.type = "string";
    schema.format = "date-time";
    return schema;
  }

  if (isPrimitive(nonNullableType)) {
    schema.type = typeText.replace(" | undefined", "");
    if (schema.type === "string") {
      schema["allOf"] = [{ transform: ["trim"] }, { minLength: 1 }];
    }
    schema = handleExplicitValidation(
      nonNullableType.getText(),
      schema,
      decorators
    );
    return schema;
  }

  if (nonNullableType.isClass() || nonNullableType.isInterface()) {
    const name =
      nonNullableType.getText().split(").")[1] || nonNullableType.getText();
    const importPath = typeText.split('").')[0].split('import("')[1];
    if (importPath && importPath.includes("/node_modules/")) return schema;
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const c =
      importPath && !importPath?.includes("/node_modules/")
        ? require(importPath)[name]
        : undefined;
    if (importPath && !c) {
      console.log(name + " not found type");
    }
    // NB: we seem not to have it, see https://medium.com/jspoint/introduction-to-reflect-metadata-package-and-its-ecmascript-proposal-8798405d7d88
    // I installed reflect-metdata and added as require on top. Hope that works!
    const classSchema = c
      ? // @ts-ignore
        Reflect.getMetaData(symbols.validations, c.prototype) || {}
      : {};

    schema["$ref"] = "#/definitions/" + name;
    if (!definitions[name]) {
      definitions[name] = getObjectSchema(type, decorators, classSchema);
    }
    return schema;
  }

  if (nonNullableType.isObject()) {
    schema = getObjectSchema(type, decorators);
    return schema;
  }
  // enum --------------------------------------
  if (nonNullableType.isEnumLiteral() && prop) {
    const name = prop.getName();
    const enumMembers = prop
      ?.getValueDeclarationOrThrow()
      ?.getSourceFile()
      .getEnum((e) => e.getName() === nonNullableType.getText())
      ?.getMembers();

    const enumSchema: {
      enum?: string[];
      "x-enumNames"?: (string | number | undefined)[];
      type?:
        | "string"
        | "number"
        | "bigint"
        | "boolean"
        | "symbol"
        | "undefined"
        | "object"
        | "function";
    } = {};
    enumSchema.enum = enumMembers?.map((m) => m.getName());
    enumSchema["x-enumNames"] = enumMembers?.map((m) => m.getValue());

    enumSchema.type = enumSchema.enum?.[0]
      ? typeof enumSchema.enum?.[0]
      : undefined;

    definitions[name] = enumSchema;
    schema["$ref"] = "#/definitions/" + name;
    return schema;
  }

  if (nonNullableType.isEnum()) {
    const name = last(nonNullableType.getText().split("."))!;
    const enumSchema: any = {};
    enumSchema.enum = nonNullableType
      .getUnionTypes()
      .map((t) => t.getLiteralValueOrThrow());
    enumSchema["x-enumNames"] = nonNullableType
      .getUnionTypes()
      .map((t) => last(t.getText().split(".")) as string);
    enumSchema.type = typeof enumSchema.enum[0];
    definitions[name] = enumSchema;
    schema["$ref"] = "#/definitions/" + name;
    return schema;
  }

  const unionTypes = type.getUnionTypes().filter((t) => !t.isUndefined());
  if (unionTypes.length > 1) {
    schema.oneOf = unionTypes.map((t) =>
      getParamSchema(t, decorators)
    ) as SimpleJsonSchema[];
    if (!schema.oneOf[0]) {
      delete schema.oneOf;
      schema.enum = unionTypes.map((t) => t.getText().slice(1, -1));
      schema["x-enumNames"] = unionTypes.map((t) => t.getText().slice(1, -1));
      schema.type = typeof schema.enum[0];
    }
    return schema;
  }
};

// export const getMethodSchema = (c, m) => {
//   const method = allClasses[c.name]?.getMethodOrThrow(m);
//   const description = method?.getJsDocs()[0]?.getDescription();
//   let responseType = method?.getReturnType();
//   if (responseType?.getTypeArguments()[0])
//     responseType = responseType?.getTypeArguments()[0];
//   const responseSchema = responseType ? getParamSchema(responseType) : {};
//   delete responseSchema?.optional;
//   return {
//     description,
//     responses: responseSchema ? { 201: { schema: responseSchema } } : undefined,
//   };
// };
