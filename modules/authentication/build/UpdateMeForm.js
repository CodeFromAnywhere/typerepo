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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonProfileDetailsForm = exports.UpdateMeForm = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var personprofiledetails_json_1 = __importDefault(require("peer-types/db/ts-interfaces/personprofiledetails.json"));
var react_with_native_1 = require("react-with-native");
var api_1 = require("api");
var cool_toast_1 = require("cool-toast");
var simplified_schema_form_1 = require("simplified-schema-form");
var UpdateMeForm = function () {
    var _a, _b, _c;
    var meQuery = api_1.queries.useGetMeWithContext();
    var person = (_c = (_b = (_a = meQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.device) === null || _c === void 0 ? void 0 : _c.currentPersonCalculated;
    var personProfileDetails = person
        ? {
            name: person.name,
            amountAuthenticationMethodsRequired: person.amountAuthenticationMethodsRequired,
            interestSlugs: person.interestSlugs,
            media: person.media,
            pictureImage: person.pictureImage,
            preferred_mediaChannelId: person.preferred_mediaChannelId,
            requiredAuthenticationMethods: person.requiredAuthenticationMethods,
        }
        : undefined;
    return ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, __assign({ className: "flex flex-1 flex-row justify-center items-center" }, { children: (0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-96" }, { children: [(0, jsx_runtime_1.jsx)(react_with_native_1.P, __assign({ className: "text-4xl" }, { children: "Update your profile" })), personProfileDetails ? ((0, jsx_runtime_1.jsx)(exports.PersonProfileDetailsForm, { personProfileDetails: personProfileDetails })) : null] })) })));
};
exports.UpdateMeForm = UpdateMeForm;
var PersonProfileDetailsForm = function (props) {
    var _a, _b, _c, _d;
    var meQuery = api_1.queries.useGetMeWithContext();
    var projectRelativeStorageFilePath = (_d = (_c = (_b = (_a = meQuery.data) === null || _a === void 0 ? void 0 : _a.result) === null || _b === void 0 ? void 0 : _b.device) === null || _c === void 0 ? void 0 : _c.currentPersonCalculated) === null || _d === void 0 ? void 0 : _d.projectRelativePath;
    var _e = (0, simplified_schema_form_1.useTsInterfaceForm)(personprofiledetails_json_1.default, "test", props.personProfileDetails, projectRelativeStorageFilePath, "Person"), form = _e[0], details = _e[1], onChange = _e[2];
    return form ? ((0, jsx_runtime_1.jsx)(simplified_schema_form_1.FormContainer, __assign({ onSubmit: function () { return __awaiter(void 0, void 0, void 0, function () {
            var apiResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!details || !projectRelativeStorageFilePath)
                            return [2 /*return*/];
                        return [4 /*yield*/, api_1.api.updateMeWithContext(details)];
                    case 1:
                        apiResult = _a.sent();
                        (0, cool_toast_1.showStandardResponse)(apiResult);
                        return [4 /*yield*/, meQuery.refetch()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); } }, { children: form }))) : null;
};
exports.PersonProfileDetailsForm = PersonProfileDetailsForm;
//# sourceMappingURL=UpdateMeForm.js.map