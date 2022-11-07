"use strict";
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
exports.generateSchema = exports.hasDefinition = exports.tryCreateSchema = void 0;
var ts_json_schema_generator_1 = require("ts-json-schema-generator");
var log_1 = require("log");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var operation_util_1 = require("operation-util");
var js_util_1 = require("js-util");
var schemaToTsInterface_1 = require("./schemaToTsInterface");
/**
 * Try because sometimes generateSchema fails
 */
var tryCreateSchema = function (config) {
    try {
        var generator = (0, ts_json_schema_generator_1.createGenerator)(config);
        var schema = generator.createSchema(config.type);
        return { schema: schema };
    }
    catch (e) {
        return { error: String(e) };
    }
};
exports.tryCreateSchema = tryCreateSchema;
function hasDefinition(maybeInterface) {
    return maybeInterface.type.typeDefinition !== null;
}
exports.hasDefinition = hasDefinition;
/**
 * If existing schema is not stale, just require it.
 * Otherwise, generate it for a file
 *
 * NB: The `createGenerator` function finds also imported TsInterfaces, which leads to duplicate TsInterfaces. With pushing the interfaces to the slug filename, this is no problem though, there should not be any duplication!

 */
var generateSchema = function (filePath, morphInterfaceInfo, namedAbsoluteImportNames) { return __awaiter(void 0, void 0, void 0, function () {
    var problems, operationBasePath, operationRelativePath, tsConfigPath, tsConfigExists, problem, config, _a, schema, error, problem, interfacePromises, interfaces;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                problems = [];
                operationBasePath = (0, get_path_1.findOperationBasePath)(filePath);
                if (!operationBasePath) {
                    (0, log_1.log)("No operation base path");
                    return [2 /*return*/, []];
                }
                operationRelativePath = (0, get_path_1.makeRelative)(filePath, operationBasePath);
                if (operationRelativePath === "src/index.ts") {
                    // should not index index
                    (0, log_1.log)("This should never happen, operationRelativePath is src/index");
                    return [2 /*return*/, []];
                }
                tsConfigPath = fs_util_1.path.join(operationBasePath, "tsconfig.json");
                tsConfigExists = fs_util_1.fs.existsSync(tsConfigPath);
                if (!!tsConfigExists) return [3 /*break*/, 2];
                problem = "no tsconfig found for ".concat(filePath, ", not generating schemas");
                (0, log_1.log)(problem, {
                    type: "error",
                });
                problems.push(problem);
                return [4 /*yield*/, (0, operation_util_1.writeKeyToOperationIndexJson)(filePath, "indexInteracesErrors", problems)];
            case 1:
                _b.sent();
                return [2 /*return*/, []];
            case 2:
                config = {
                    // skipTypeCheck: true,
                    path: filePath,
                    tsconfig: tsConfigPath,
                    type: "*", // Or <type-name> if you want to generate schema for that one type only
                };
                _a = (0, exports.tryCreateSchema)(config), schema = _a.schema, error = _a.error;
                if (!(!schema || !schema.definitions)) return [3 /*break*/, 4];
                problem = "No schema/definitions found for ".concat(filePath, ". Error: ").concat(error);
                (0, log_1.log)(problem, { type: "warning" });
                return [4 /*yield*/, (0, operation_util_1.writeKeyToOperationIndexJson)(filePath, "indexInteracesErrors", [
                        problem,
                    ])];
            case 3:
                _b.sent();
                return [2 /*return*/, []];
            case 4:
                interfacePromises = Object.keys(schema.definitions).map(function (typeName) {
                    var thisMorphInterfaceInfo = morphInterfaceInfo.find(function (x) { return x.name === typeName; });
                    var tsMorphFoundTypeAlso = !!thisMorphInterfaceInfo;
                    var isImportedType = namedAbsoluteImportNames.includes(typeName);
                    var isNamedParameters = typeName.startsWith("NamedParameters");
                    if (tsMorphFoundTypeAlso || isImportedType || isNamedParameters) {
                        return (0, schemaToTsInterface_1.schemaToTsInterface)(filePath, typeName, schema, thisMorphInterfaceInfo);
                    }
                    // console.log({ definitionNames: Object.keys(schema.definitions) });
                    (0, log_1.log)("Skipping type ".concat(typeName), { type: "debug" }, { tsMorphFoundTypeAlso: tsMorphFoundTypeAlso, isImportedType: isImportedType, isNamedParameters: isNamedParameters });
                    // NB: only the interfaces declared in this file end up in the database! otherwise you'll get duplicates anyway.
                    // NB: we are still allowing absolute imported types to end up in the database. They will not be exported from our index, but we still need them for some frontend-generation tasks.
                    return;
                });
                return [4 /*yield*/, Promise.all(interfacePromises)];
            case 5:
                interfaces = (_b.sent()).filter(js_util_1.notEmpty);
                return [2 /*return*/, interfaces];
        }
    });
}); };
exports.generateSchema = generateSchema;
//# sourceMappingURL=generateSchema.js.map