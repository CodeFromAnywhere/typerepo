"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTsStatements = void 0;
var ts_morph_1 = require("ts-morph");
//monorepo
var js_util_1 = require("js-util");
var convert_case_1 = require("convert-case");
var log_1 = require("log");
var comment_util_1 = require("comment-util");
// relative
var getParametersFromInterface_1 = require("./getParametersFromInterface");
var getAllComments_1 = require("./getAllComments");
var getTypeInfo_1 = require("./getTypeInfo");
var getMaxIndexationDepth_1 = require("./getMaxIndexationDepth");
var getSizeSummary_1 = require("./getSizeSummary");
/**
 Gets functions and variables from a tsmorph sourcefile
 */
var getTsStatements = function (sourceFile, tsInterfaces, operationRelativeTypescriptFilePath, fileContent) { return __awaiter(void 0, void 0, void 0, function () {
    var morphVars, stringLiterals, tsVariables, morphFunctions, arrowFunctionVars, arrowFunctions, regularFunctions, tsFunctions;
    return __generator(this, function (_a) {
        morphVars = sourceFile
            .getStatements()
            .map(function (x) {
            var _a;
            var variableDeclarations = (_a = x
                .asKind(ts_morph_1.SyntaxKind.VariableStatement)) === null || _a === void 0 ? void 0 : _a.getDeclarations();
            if (!variableDeclarations || variableDeclarations.length === 0)
                return;
            return {
                isExported: variableDeclarations[0].isExported(),
                variableDeclarations: variableDeclarations,
                // NB: if this is a VariableStatement
                kindName: x.getKindName(),
                // NB: this is how we can check if it's an arrow function (declaration Initializer Kind Names Includes Arrow Function)
                isArrowFunction: variableDeclarations
                    .map(function (v) { return v.getInitializer(); })
                    .map(function (x) { return x === null || x === void 0 ? void 0 : x.getKindName(); })
                    .includes("ArrowFunction"),
                // NB: if it's a variable, we can get the name like this
                names: variableDeclarations.map(function (x) { return x.getName(); }),
                comments: x
                    .getLeadingCommentRanges()
                    .map(function (x) { return x.getText(); })
                    .map(comment_util_1.stripComment),
            };
        })
            .filter(js_util_1.notEmpty);
        stringLiterals = morphVars.filter(function (v) { return !v.isArrowFunction; });
        tsVariables = stringLiterals
            .map(function (v) {
            var _a, _b;
            var inits = v.variableDeclarations
                .map(function (x) { return x.getInitializer(); })
                .filter(js_util_1.notEmpty);
            var name = v.names[0] || "__NO_NAME__";
            var slug = (0, convert_case_1.kebabCase)(name);
            var value = inits.map(function (x) { return x.getText(); }).filter(js_util_1.notEmpty)[0] || "__NO_VALUE__";
            // TODO: TEST, should return const, var or let
            var classification = (_a = v.variableDeclarations[0]
                .getVariableStatement()) === null || _a === void 0 ? void 0 : _a.getDeclarationKind().toString().toLowerCase();
            var variableDeclaration = (_b = v.variableDeclarations) === null || _b === void 0 ? void 0 : _b[0];
            if (!variableDeclaration) {
                return;
            }
            var variableComments = (0, getAllComments_1.getAllComments)(variableDeclaration, fileContent, operationRelativeTypescriptFilePath);
            var statementComments = variableDeclaration
                .getDescendantStatements()
                .map(function (x) {
                var allComments = (0, getAllComments_1.getAllComments)(x, fileContent, operationRelativeTypescriptFilePath);
                return allComments;
            })
                .flat();
            var comments = variableComments
                ? __spreadArray(__spreadArray([], variableComments, true), statementComments, true) : statementComments;
            var isExported = v.isExported;
            var variable = {
                isExported: isExported,
                operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath,
                comments: comments,
                name: name,
                slug: slug,
                value: value,
                type: (0, getTypeInfo_1.getTypeInfo)(variableDeclaration.getType()),
                classification: classification,
            };
            return variable;
        })
            .filter(js_util_1.notEmpty);
        morphFunctions = sourceFile.getFunctions();
        arrowFunctionVars = morphVars.filter(function (v) { return v.isArrowFunction; });
        arrowFunctions = arrowFunctionVars
            .map(function (v) {
            var _a, _b;
            var isExported = v.isExported;
            var arrowFunction = (_a = v.variableDeclarations) === null || _a === void 0 ? void 0 : _a.map(function (x) { var _a; return (_a = x.getInitializer()) === null || _a === void 0 ? void 0 : _a.asKind(ts_morph_1.SyntaxKind.ArrowFunction); })[0];
            if (!arrowFunction) {
                (0, log_1.log)("Should never get here, arrow function not found", {
                    type: "error",
                });
                return;
            }
            var description = v.comments.join("\n\n");
            var name = ((_b = v.names) === null || _b === void 0 ? void 0 : _b[0]) || "no name";
            var returnType = (0, getTypeInfo_1.getTypeInfo)(arrowFunction.getReturnType());
            var functionText = arrowFunction.getFullText();
            var fullText = functionText.concat(description);
            // TODO: make a convention for this
            var apiAuthenticationStrategy = "admin";
            // TODO: make a convention for this
            var isApiExposed = true;
            var fn = {
                apiAuthenticationStrategy: apiAuthenticationStrategy,
                isApiExposed: isApiExposed,
                isExported: isExported,
                operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath,
                // TODO:
                commentsInside: [],
                rawText: functionText,
                name: name,
                slug: (0, convert_case_1.kebabCase)(name),
                parameters: (0, getParametersFromInterface_1.getParametersFromInterfaces)(name, tsInterfaces),
                description: description,
                returnType: returnType,
                maxIndentationDepth: (0, getMaxIndexationDepth_1.getMaxIndentationDepth)(functionText),
                // TODO: isolate the size calculations...
                // size of function including comments
                size: (0, getSizeSummary_1.getSizeSummary)(fullText),
                // split it up
                //codeSize: {},
                //commentSize:{},
                // cumulativeCodeSize:{},
                // cumulativeCommentSize:{},
                // cumulativeSize:{},
            };
            return fn;
        })
            .filter(js_util_1.notEmpty);
        regularFunctions = morphFunctions.map(function (functionDeclaration) {
            var returnType = (0, getTypeInfo_1.getTypeInfo)(functionDeclaration.getReturnType().getApparentType());
            var functionText = functionDeclaration.getFullText();
            var description = functionDeclaration
                .getJsDocs()
                .map(function (x) { return x.getFullText(); })
                .join("\n\n");
            var fullText = functionText.concat(description);
            var name = functionDeclaration.getName() || "__anonymous__";
            var fn = {
                name: name,
                slug: (0, convert_case_1.kebabCase)(name),
                // TODO: add convention
                apiAuthenticationStrategy: "admin",
                isApiExposed: true,
                //
                isExported: functionDeclaration.isExported(),
                operationRelativeTypescriptFilePath: operationRelativeTypescriptFilePath,
                // TODO:
                commentsInside: [],
                // function metadata
                // function info
                description: description,
                parameters: (0, getParametersFromInterface_1.getParametersFromInterfaces)(name, tsInterfaces),
                returnType: returnType,
                size: (0, getSizeSummary_1.getSizeSummary)(fullText),
                rawText: functionText,
                maxIndentationDepth: (0, getMaxIndexationDepth_1.getMaxIndentationDepth)(functionText),
            };
            return fn;
        });
        tsFunctions = arrowFunctions.concat(regularFunctions);
        return [2 /*return*/, { tsFunctions: tsFunctions, tsVariables: tsVariables }];
    });
}); };
exports.getTsStatements = getTsStatements;
//# sourceMappingURL=getTsStatements.js.map