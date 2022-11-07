"use strict";
/**
TODO:

Make sure the same interfaces don't get generated multiple times: when indexing a file, the file should only include interfaces from that file and interfaces from other packages, but not from relative imports. This should be fine because when you're using an operation, those relative imported types are indexed as well.

When generating a schema, also use ts-morph to get the AST for the interface so we can:

- find the interfaces an interface extends and its doccomment.
- get the raw type/interface text
*/
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaToTsInterface = void 0;
var schema_util_1 = require("schema-util");
var convert_case_1 = require("convert-case");
var markdown_parse_js_1 = require("markdown-parse-js");
var js_util_1 = require("js-util");
var comment_util_1 = require("comment-util");
var getDbStorageMethod_1 = require("./getDbStorageMethod");
var get_path_1 = require("get-path");
/**
 make a tsInterface from a schema generated from the file
  */
var schemaToTsInterface = function (filePath, typeName, schema, morphInterfaceInfo) { return __awaiter(void 0, void 0, void 0, function () {
    var definitionOrBoolean, operationBasePath, possibleRefs, definition, parsedDescription, frontmatter, operationRelativePath, isOperationIndex, dbStorageMethod, isDbModel, slug, operationRelativeTypescriptFilePath, hasGeneric, isExported, simplifiedSchema, interfaceObject;
    var _a;
    return __generator(this, function (_b) {
        definitionOrBoolean = (_a = schema.definitions) === null || _a === void 0 ? void 0 : _a[typeName];
        operationBasePath = (0, get_path_1.findOperationBasePath)(filePath);
        if (!operationBasePath)
            return [2 /*return*/];
        possibleRefs = schema.definitions
            ? Object.keys(schema.definitions)
                .map(function (typeName) {
                var _a;
                var theSchema = (0, schema_util_1.getSchema)((_a = schema.definitions) === null || _a === void 0 ? void 0 : _a[typeName]);
                return theSchema ? { name: typeName, schema: theSchema } : null;
            })
                .filter(js_util_1.notEmpty)
            : [];
        definition = typeof definitionOrBoolean === "object" ? definitionOrBoolean : undefined;
        if (!definition)
            return [2 /*return*/, undefined];
        parsedDescription = (0, markdown_parse_js_1.parseFrontmatterMarkdownString)((0, comment_util_1.stripComment)((morphInterfaceInfo === null || morphInterfaceInfo === void 0 ? void 0 : morphInterfaceInfo.description) || definition.description || ""));
        frontmatter = parsedDescription.parameters;
        operationRelativePath = frontmatter.operationRelativePath;
        isOperationIndex = frontmatter.isOperationIndex === undefined
            ? (morphInterfaceInfo === null || morphInterfaceInfo === void 0 ? void 0 : morphInterfaceInfo.extensions.includes("TsIndexModelType")) || false
            : Boolean(frontmatter.isOperationIndex);
        dbStorageMethod = (0, getDbStorageMethod_1.getDbStorageMethod)({
            typeName: typeName,
            frontmatter: frontmatter,
            extensions: morphInterfaceInfo === null || morphInterfaceInfo === void 0 ? void 0 : morphInterfaceInfo.extensions,
        });
        isDbModel = !!dbStorageMethod;
        slug = (0, convert_case_1.slugify)(typeName);
        operationRelativeTypescriptFilePath = (0, get_path_1.getOperationRelativePath)(filePath, operationBasePath);
        hasGeneric = !!(morphInterfaceInfo === null || morphInterfaceInfo === void 0 ? void 0 : morphInterfaceInfo.hasGeneric);
        isExported = !!(morphInterfaceInfo === null || morphInterfaceInfo === void 0 ? void 0 : morphInterfaceInfo.isExported);
        simplifiedSchema = (0, schema_util_1.simplifySchema)(typeName, definition, possibleRefs, []);
        interfaceObject = {
            // identifiers
            id: slug,
            name: typeName,
            slug: slug,
            operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath,
            hasGeneric: hasGeneric,
            isExported: isExported,
            rawText: morphInterfaceInfo === null || morphInterfaceInfo === void 0 ? void 0 : morphInterfaceInfo.raw,
            extensions: morphInterfaceInfo === null || morphInterfaceInfo === void 0 ? void 0 : morphInterfaceInfo.extensions,
            isOperationIndex: isOperationIndex,
            operationStorageLocationRelativeFilePath: operationRelativePath
                ? String(operationRelativePath)
                : undefined,
            // interface info
            description: parsedDescription === null || parsedDescription === void 0 ? void 0 : parsedDescription.raw,
            dbStorageMethod: dbStorageMethod,
            isDbModel: isDbModel,
            // TODO:
            commentsInside: [],
            type: {
                // TODO: test
                typeDefinition: definition,
                simplifiedSchema: simplifiedSchema,
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
        return [2 /*return*/, interfaceObject];
    });
}); };
exports.schemaToTsInterface = schemaToTsInterface;
//# sourceMappingURL=schemaToTsInterface.js.map