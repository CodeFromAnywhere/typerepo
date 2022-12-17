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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getContextualPrompt = void 0;
var database_1 = require("database");
var model_types_1 = require("model-types");
var convert_case_1 = require("convert-case");
var getContextualPrompt = function (contextualPromptSlug, customPromptContent, saveNewPromptWithName, contextType) { return __awaiter(void 0, void 0, void 0, function () {
    var contextualPrompts, contextualPrompt, isNew, name, newContextualPrompt;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!contextualPromptSlug) return [3 /*break*/, 2];
                return [4 /*yield*/, database_1.db.get("ContextualPrompt")];
            case 1:
                contextualPrompts = _a.sent();
                contextualPrompt = contextualPrompts.find(function (x) { return x.slug === contextualPromptSlug; });
                if (!contextualPrompt) {
                    return [2 /*return*/, undefined];
                }
                return [2 /*return*/, contextualPrompt];
            case 2:
                if (!customPromptContent || customPromptContent.length === 0) {
                    return [2 /*return*/, undefined];
                }
                isNew = saveNewPromptWithName && saveNewPromptWithName.length > 0;
                name = isNew ? saveNewPromptWithName : (0, model_types_1.generateId)();
                newContextualPrompt = {
                    name: name,
                    slug: (0, convert_case_1.slugify)(name),
                    promptContent: customPromptContent,
                    contextType: [contextType || "text"],
                    model: "chat-gpt",
                    usesContext: customPromptContent === null || customPromptContent === void 0 ? void 0 : customPromptContent.includes("%context"),
                    usesSelection: customPromptContent === null || customPromptContent === void 0 ? void 0 : customPromptContent.includes("%selection"),
                    usesAnyContext: customPromptContent === null || customPromptContent === void 0 ? void 0 : customPromptContent.includes("%any"),
                };
                if (!isNew) return [3 /*break*/, 4];
                return [4 /*yield*/, database_1.db.upsert("ContextualPrompt", newContextualPrompt)];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/, newContextualPrompt];
        }
    });
}); };
exports.getContextualPrompt = getContextualPrompt;
/*
See this quote:

"%selection"

How could you change this quote to target it to developers? Please provide 3 examples.*/
//# sourceMappingURL=getContextualPrompt.js.map