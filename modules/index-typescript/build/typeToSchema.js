"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getParamSchema = exports.typeToSchema = exports.getMinMaxValidation = exports.isPrimitive = exports.symbols = void 0;
var lodash_1 = require("lodash");
require("reflect-metadata");
var ts_morph_1 = require("ts-morph");
var ajvMap = {
    number: "imum",
    string: "Length",
    array: "Items",
    object: "Properties",
};
exports.symbols = {
    controller: Symbol(),
    route: Symbol(),
    basePath: Symbol(),
    validations: Symbol(),
};
var toSnack = function (key) {
    return key.replace(/([A-Z])/g, function ($1) { return "-" + $1.toLowerCase(); }).replace(/^-/, "");
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
var definitions = {};
// export const getDefinitions = () => definitions;
// export const getClass = (name) => allClasses[name];
var isPrimitive = function (type) {
    return type.isBoolean() || type.isNumber() || type.isString();
};
exports.isPrimitive = isPrimitive;
var getMinMaxValidation = function (keyword, type, value) {
    var t = type.toLowerCase();
    return (0, lodash_1.set)({}, keyword + ajvMap[t], value);
};
exports.getMinMaxValidation = getMinMaxValidation;
function handleExplicitValidation(type, schema, decorators) {
    if (decorators === void 0) { decorators = []; }
    decorators.forEach(function (d) {
        var dName = d.getName();
        switch (dName) {
            case "min":
            case "max": {
                var firstArgumentTextNumber = +d.getArguments()[0].getText();
                schema = (0, lodash_1.merge)(schema, (0, exports.getMinMaxValidation)(dName, type, firstArgumentTextNumber));
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
                schema = (0, lodash_1.merge)(schema, { format: toSnack(dName) });
                break;
            }
        }
    });
    return schema;
}
var getObjectSchema = function (type, decorators, schemaProps) {
    if (schemaProps === void 0) { schemaProps = {}; }
    var schema = {};
    // schema = {} handleExplicitValidation("object", schema, decorators);
    schema.type = "object";
    schema.properties = {};
    schema.required = schema.required || [];
    var typeText = type.getText();
    var nonNullableType = type.getNonNullableType();
    var nonNullableTypeText = nonNullableType.getText();
    schema.optional = nonNullableTypeText !== typeText;
    type
        .getNonNullableType()
        .getProperties()
        .forEach(function (prop) {
        var _a;
        var key = prop.getName();
        var isGetter = prop.hasFlags(ts_morph_1.SymbolFlags.GetAccessor);
        if (["request", "reply"].includes(key) || isGetter)
            return;
        var valueDeclaration = prop.getValueDeclarationOrThrow();
        var decorators = valueDeclaration.getDecorators
            ? valueDeclaration.getDecorators()
            : [];
        schema.properties[key] = __assign(__assign({}, ((0, exports.getParamSchema)(valueDeclaration.getType(), decorators, prop) || {})), (schemaProps[key] || {}));
        if (!schema.properties[key]) {
            console.warn("missing type for - " + key);
            schema.properties[key] = { type: "object" };
        }
        if (schema.properties[key].optional !== true) {
            (_a = schema.required) === null || _a === void 0 ? void 0 : _a.push(key);
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
var typeToSchema = function (type) { return (0, exports.getParamSchema)(type); };
exports.typeToSchema = typeToSchema;
var getParamSchema = function (type, decorators, prop) {
    var _a, _b, _c, _d;
    if (decorators === void 0) { decorators = []; }
    if (prop === void 0) { prop = undefined; }
    var typeText = type.getText();
    var nonNullableType = type.getNonNullableType();
    var nonNullableTypeText = nonNullableType.getText();
    var schema = {};
    schema.optional = nonNullableTypeText !== typeText;
    if (nonNullableType.isArray()) {
        schema = handleExplicitValidation("array", schema, decorators);
        schema.type = "array";
        // NB: recursion!
        schema.items =
            (0, exports.getParamSchema)(nonNullableType.getArrayElementTypeOrThrow(), []) || {};
        Object.keys(schema.items).forEach(function (key) { return delete schema.items[key].optional; });
        delete schema.items.optional;
        return schema;
    }
    if (nonNullableType.getText() === "Date") {
        schema.type = "string";
        schema.format = "date-time";
        return schema;
    }
    if ((0, exports.isPrimitive)(nonNullableType)) {
        schema.type = typeText.replace(" | undefined", "");
        if (schema.type === "string") {
            schema["allOf"] = [{ transform: ["trim"] }, { minLength: 1 }];
        }
        schema = handleExplicitValidation(nonNullableType.getText(), schema, decorators);
        return schema;
    }
    if (nonNullableType.isClass() || nonNullableType.isInterface()) {
        var name = nonNullableType.getText().split(").")[1] || nonNullableType.getText();
        var importPath = typeText.split('").')[0].split('import("')[1];
        if (importPath && importPath.includes("/node_modules/"))
            return schema;
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        var c = importPath && !(importPath === null || importPath === void 0 ? void 0 : importPath.includes("/node_modules/"))
            ? require(importPath)[name]
            : undefined;
        if (importPath && !c) {
            console.log("not found type: ".concat(name));
            return schema;
        }
        // NB: we seem not to have it, see https://medium.com/jspoint/introduction-to-reflect-metadata-package-and-its-ecmascript-proposal-8798405d7d88
        // I installed reflect-metdata and added as require on top. Hope that works!
        var classSchema = c
            ? // @ts-ignore
                Reflect.getMetaData(exports.symbols.validations, c.prototype) || {}
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
        var name = prop.getName();
        var enumMembers = (_b = (_a = prop === null || prop === void 0 ? void 0 : prop.getValueDeclarationOrThrow()) === null || _a === void 0 ? void 0 : _a.getSourceFile().getEnum(function (e) { return e.getName() === nonNullableType.getText(); })) === null || _b === void 0 ? void 0 : _b.getMembers();
        var enumSchema = {};
        enumSchema.enum = enumMembers === null || enumMembers === void 0 ? void 0 : enumMembers.map(function (m) { return m.getName(); });
        enumSchema["x-enumNames"] = enumMembers === null || enumMembers === void 0 ? void 0 : enumMembers.map(function (m) { return m.getValue(); });
        enumSchema.type = ((_c = enumSchema.enum) === null || _c === void 0 ? void 0 : _c[0])
            ? typeof ((_d = enumSchema.enum) === null || _d === void 0 ? void 0 : _d[0])
            : undefined;
        definitions[name] = enumSchema;
        schema["$ref"] = "#/definitions/" + name;
        return schema;
    }
    if (nonNullableType.isEnum()) {
        var name = (0, lodash_1.last)(nonNullableType.getText().split("."));
        var enumSchema = {};
        enumSchema.enum = nonNullableType
            .getUnionTypes()
            .map(function (t) { return t.getLiteralValueOrThrow(); });
        enumSchema["x-enumNames"] = nonNullableType
            .getUnionTypes()
            .map(function (t) { return (0, lodash_1.last)(t.getText().split(".")); });
        enumSchema.type = typeof enumSchema.enum[0];
        definitions[name] = enumSchema;
        schema["$ref"] = "#/definitions/" + name;
        return schema;
    }
    var unionTypes = type.getUnionTypes().filter(function (t) { return !t.isUndefined(); });
    if (unionTypes.length > 1) {
        schema.oneOf = unionTypes.map(function (t) {
            return (0, exports.getParamSchema)(t, decorators);
        });
        if (!schema.oneOf[0]) {
            delete schema.oneOf;
            schema.enum = unionTypes.map(function (t) { return t.getText().slice(1, -1); });
            schema["x-enumNames"] = unionTypes.map(function (t) { return t.getText().slice(1, -1); });
            schema.type = typeof schema.enum[0];
        }
        return schema;
    }
};
exports.getParamSchema = getParamSchema;
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
//# sourceMappingURL=typeToSchema.js.map