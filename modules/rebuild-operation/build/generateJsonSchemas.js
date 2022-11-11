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
exports.generateJsonSchemas = void 0;
var convert_case_1 = require("convert-case");
var pluralize_1 = require("pluralize");
var read_json_file_1 = require("read-json-file");
var database_1 = require("database");
var fs_orm_1 = require("fs-orm");
var js_util_1 = require("js-util");
var fs_util_1 = require("fs-util");
var get_path_1 = require("get-path");
var getAllDbModels_1 = require("./getAllDbModels");
/**
 * generates schemas for db models
 *
 * Is done every time you run `rebuildOperation` and `generateSdkOperations`
 *
 * TODO: there are some problems with references that cannot be found with references to generic types... This can probably be solved, but it's not going to be easy!
 *
 * IDEA:
 *
 * 1) find all referencing definitions in the main schema
 * 2) find those in all other interfaces
 * 3) recursively find references in those as well
 * 4) if you can't find the reference, remove the reference and replace type to "any" (add WARNING to description "reference not found")
 *
 * This will result in a valid schema that has no unresolved references
 *
 * TODO: apply Storage<X> to db-models
 *
 * TODO: apply Array<X> to db-models with json-multiple
 *
 * TODO: apply special config conventions (MergedDbConfig) like tsconfig.json and package.json
 *
 * TODO: Make a validator that validates the whole database to this schema.
 */
var generateJsonSchemas = function (manualProjectRoot, 
/**
 * If given, does it just for a single operation
 */
operationName) { return __awaiter(void 0, void 0, void 0, function () {
    var projectRoot, dbModels, jsonDbModels, allSchemas, jsonSchemas, workspacePath, workspace, oldSchemas, newWorkspace, isNewWorkspaceWritten;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                projectRoot = manualProjectRoot || (0, get_path_1.getProjectRoot)();
                if (!projectRoot)
                    return [2 /*return*/];
                return [4 /*yield*/, (0, getAllDbModels_1.getAllDbModels)(manualProjectRoot, operationName)];
            case 1:
                dbModels = _b.sent();
                jsonDbModels = dbModels.filter(function (x) {
                    return x.dbStorageMethod &&
                        ["jsonMultiple", "jsonSingle"].includes(x.dbStorageMethod);
                });
                return [4 /*yield*/, Promise.all(jsonDbModels.map(function (dbModel) { return __awaiter(void 0, void 0, void 0, function () {
                        var locationPattern, allInterfaces, mainSchema, definitions, schema;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!dbModel.dbStorageMethod)
                                        return [2 /*return*/];
                                    locationPattern = (0, fs_orm_1.getDefaultLocationPattern)(dbModel.dbStorageMethod, dbModel.name);
                                    if (!locationPattern)
                                        return [2 /*return*/];
                                    return [4 /*yield*/, database_1.db.get("TsInterface", {
                                        // operationName: dbModel.operationName,
                                        })];
                                case 1:
                                    allInterfaces = _a.sent();
                                    mainSchema = dbModel.type.typeDefinition;
                                    definitions = (0, js_util_1.mergeObjectsArray)(allInterfaces
                                        .filter(function (x) { return x.name !== dbModel.name; })
                                        .map(function (x) {
                                        var _a;
                                        if (!x.type.typeDefinition)
                                            return;
                                        var goodName = x.name.replace(">", "%3E").replace("<", "%3C");
                                        return _a = {}, _a[goodName] = x.type.typeDefinition, _a;
                                    })
                                        .filter(js_util_1.notEmpty));
                                    schema = __assign(__assign({}, mainSchema), { $schema: "http://json-schema.org/draft-07/schema#", title: dbModel.name, additionalProperties: false, description: dbModel.description, definitions: definitions });
                                    return [2 /*return*/, {
                                            schema: schema,
                                            fileMatch: ["/".concat(locationPattern)],
                                            url: "./schemas/".concat((0, pluralize_1.pluralize)((0, convert_case_1.kebabCase)(dbModel.name)), ".schema.json"),
                                        }];
                            }
                        });
                    }); }))];
            case 2:
                allSchemas = (_b.sent()).filter(js_util_1.notEmpty);
                return [4 /*yield*/, Promise.all(allSchemas.map(function (schemaObject) { return __awaiter(void 0, void 0, void 0, function () {
                        var isWriteSuccessful, fileMatch, url, setting;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, (0, fs_util_1.writeJsonToFile)(fs_util_1.path.join(projectRoot, schemaObject.url), schemaObject.schema)];
                                case 1:
                                    isWriteSuccessful = _a.sent();
                                    if (!isWriteSuccessful) {
                                        console.log("WRITE WERNT WRONG");
                                        return [2 /*return*/];
                                    }
                                    fileMatch = schemaObject.fileMatch, url = schemaObject.url;
                                    setting = { fileMatch: fileMatch, url: url };
                                    return [2 /*return*/, setting];
                            }
                        });
                    }); }))];
            case 3:
                jsonSchemas = (_b.sent()).filter(js_util_1.notEmpty);
                workspacePath = fs_util_1.path.join(projectRoot, "project-root.code-workspace");
                return [4 /*yield*/, (0, read_json_file_1.readJsonFile)(workspacePath)];
            case 4:
                workspace = (_b.sent()) || {};
                oldSchemas = ((_a = workspace.settings) === null || _a === void 0 ? void 0 : _a["json.schemas"]) || [];
                newWorkspace = __assign(__assign({}, workspace), { settings: __assign(__assign({}, workspace.settings), { "json.schemas": jsonSchemas
                            .concat(oldSchemas)
                            .filter((0, js_util_1.onlyUnique2)(function (a, b) { return a.url === b.url; })) }) });
                return [4 /*yield*/, (0, fs_util_1.writeJsonToFile)(workspacePath, newWorkspace)];
            case 5:
                isNewWorkspaceWritten = _b.sent();
                console.log({ isNewWorkspaceWritten: isNewWorkspaceWritten, workspacePath: workspacePath });
                return [2 /*return*/];
        }
    });
}); };
exports.generateJsonSchemas = generateJsonSchemas;
//# sourceMappingURL=generateJsonSchemas.js.map