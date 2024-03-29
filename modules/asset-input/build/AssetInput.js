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
exports.AssetInput = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_with_native_store_1 = require("react-with-native-store");
var react_1 = require("react");
var react_with_native_1 = require("react-with-native");
var clickable_icon_1 = require("clickable-icon");
var api_1 = require("api");
var server_api_url_1 = require("server-api-url");
var js_util_1 = require("js-util");
var asset_view_1 = require("asset-view");
var react_with_native_alert_1 = require("react-with-native-alert");
var asset_functions_js_1 = require("asset-functions-js");
var MediaRecorder_1 = require("./MediaRecorder");
var Webcam_1 = require("./Webcam");
var SelectMedia_1 = require("./select-media/SelectMedia");
var FileInput_1 = require("./FileInput");
var makeBackendAsset_1 = require("./util/makeBackendAsset");
var model_types_1 = require("model-types");
/**

Usage possible in: form, writer-ui, anywhere else (custom)

Supports

- audio recording
- file upload (multiple possible)
- camera (taking a picture)
- video camera (taking a video)

 */
var AssetInput = function (props) {
    var attachTokenToFilename = props.attachTokenToFilename, defaultAssetName = props.defaultAssetName, onChange = props.onChange, allowMultiple = props.allowMultiple, value = props.value, inputTypes = props.inputTypes, projectRelativeReferencingFilePath = props.projectRelativeReferencingFilePath, modelName = props.modelName;
    /**
     * generate a random token for this component, once, only if it loads...
     */
    var randomToken = (0, react_1.useState)((0, model_types_1.generateRandomString)(32))[0];
    var defaultAssetNameWithToken = (0, asset_functions_js_1.ensureToken)(defaultAssetName, randomToken, attachTokenToFilename);
    var alert = (0, react_with_native_alert_1.useAlert)();
    var defaultNewType = inputTypes && inputTypes.length === 1 ? inputTypes[0] : null;
    var _a = (0, react_1.useState)(defaultNewType), newType = _a[0], setNewType = _a[1];
    // NB: `newBlobs` are assets that haven't been confirmed yet. Will not be uploaded yet
    var _b = (0, react_1.useState)([]), newBlobs = _b[0], setNewBlobs = _b[1];
    /**
     * NB: `selectedBlobs` are assets that have been confirmed, but not sent back to `onChange` yet because upload isn't complete yet.
     *
     * NB: Ensure to also use `onChange` after asset has been uploaded...
     */
    var _c = (0, react_1.useState)(value || []), selectedBlobs = _c[0], setSelectedBlobs = _c[1];
    // NB: we need to ensure the asset names update if the defaultAssetName changes
    var _d = (0, react_1.useState)(defaultAssetNameWithToken), lastDefaultAssetName = _d[0], setLastDefaultAssetName = _d[1];
    (0, react_1.useEffect)(function () {
        var newSelectedBlobs = selectedBlobs.map(function (selectedBlob) {
            if (selectedBlob.name === lastDefaultAssetName) {
                // NB: if the assetname wasn't changed yet, adhere convention
                return __assign(__assign({}, selectedBlob), { name: defaultAssetNameWithToken });
            }
            return selectedBlob;
        });
        setSelectedBlobs(newSelectedBlobs);
        setLastDefaultAssetName(defaultAssetNameWithToken);
    }, [defaultAssetNameWithToken]);
    /**
     * Removes asset from selectedBlobs, external value, and at the server
     */
    var removeAsset = function (asset, index) { return __awaiter(void 0, void 0, void 0, function () {
        var newLocalValue, newStateValue, result, isSuccessful;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    newLocalValue = (0, js_util_1.removeIndexFromArray)(selectedBlobs, index);
                    setSelectedBlobs(newLocalValue);
                    newStateValue = (0, js_util_1.removeIndexFromArray)(value || [], index);
                    onChange(newStateValue);
                    if (!asset.relativePath) return [3 /*break*/, 2];
                    return [4 /*yield*/, api_1.api.deleteReferencedAsset(projectRelativeReferencingFilePath, asset.relativePath)];
                case 1:
                    result = (_a.sent()).result;
                    isSuccessful = result === null || result === void 0 ? void 0 : result.isSuccessful;
                    alert === null || alert === void 0 ? void 0 : alert(isSuccessful ? "Deleted" : "Something went wrong", result === null || result === void 0 ? void 0 : result.message);
                    _a.label = 2;
                case 2: return [2 /*return*/];
            }
        });
    }); };
    /**
     * Local update!
     */
    var updateAssetBlob = function (blobPath, newAssetBlob) {
        setSelectedBlobs(function (oldValue) {
            var newSelectedBlobs = oldValue.map(function (assetBlob) {
                return assetBlob.blobPath === blobPath ? newAssetBlob : assetBlob;
            });
            return newSelectedBlobs;
        });
    };
    /**
     Sends a blob to the api
    */
    var sendBlob = function (asset, config) { return __awaiter(void 0, void 0, void 0, function () {
        var storageAuthToken, authToken, realApiUrl, url, xhr, xhrResult;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!asset.blob || !asset.blobPath) {
                        console.log("Please provide a blob and blobPath to send the blob");
                        return [2 /*return*/];
                    }
                    return [4 /*yield*/, (0, react_with_native_store_1.getItem)(api_1.AUTH_TOKEN_STORAGE_KEY)];
                case 1:
                    storageAuthToken = _a.sent();
                    authToken = (config === null || config === void 0 ? void 0 : config.authToken) || storageAuthToken;
                    realApiUrl = (config === null || config === void 0 ? void 0 : config.apiUrl) || server_api_url_1.apiUrl;
                    url = "".concat(realApiUrl, "/function/uploadAssetWithContext");
                    xhr = new XMLHttpRequest();
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            xhr.upload.addEventListener("abort", function () {
                                console.log("XHR Upload Abort");
                                reject({ isSuccessful: false });
                            });
                            xhr.upload.addEventListener("error", function () {
                                console.log("XHR Upload Error");
                                reject({ isSuccessful: false });
                            });
                            xhr.upload.addEventListener("timeout", function () {
                                console.log("XHR Upload Timeout");
                                reject({ isSuccessful: false });
                            });
                            xhr.upload.addEventListener("progress", function (event) {
                                if (event.lengthComputable) {
                                    var uploadProgress = event.loaded / event.total;
                                    // console.log("upload progress:", uploadProgress);
                                    updateAssetBlob(asset.blobPath, __assign(__assign({}, asset), { uploadProgress: uploadProgress }));
                                }
                            });
                            xhr.addEventListener("progress", function (event) {
                                if (event.lengthComputable) {
                                    var downloadProgress = event.loaded / event.total;
                                    // console.log("download progress:", downloadProgress);
                                    // TODO: set this to a state
                                }
                            });
                            xhr.addEventListener("loadend", function (e) {
                                var isSuccessful = xhr.readyState === 4 && xhr.status === 200;
                                var response = xhr.response ? JSON.parse(xhr.response) : undefined;
                                resolve({ isSuccessful: isSuccessful, response: response });
                            });
                            xhr.addEventListener("timeout", function (ev) {
                                console.log("XHR Timeout");
                                reject({ isSuccessful: false });
                            });
                            xhr.addEventListener("error", function (ev) {
                                console.log("XHR Error");
                                reject({ isSuccessful: false });
                            });
                            xhr.addEventListener("abort", function (ev) {
                                console.log("XHR Aborted");
                                reject({ isSuccessful: false });
                            });
                            xhr.open("POST", url, true);
                            var formData = new FormData();
                            formData.append("file", asset.blob);
                            if (authToken) {
                                // NB: we need to adhere the `api` convention!
                                formData.append("authToken", authToken);
                            }
                            xhr.send(formData);
                        })];
                case 2:
                    xhrResult = _a.sent();
                    // NB: now, call onchange
                    // console.log("success:", xhrResult);
                    return [2 /*return*/, xhrResult.response];
            }
        });
    }); };
    /**
     Happens when clicking "✅"
     
     Adds the blob inside of `newBlob` to the blobs. Also sends the blob to the backend
     */
    var addBlobs = function () { return __awaiter(void 0, void 0, void 0, function () {
        var newStuff, newBackendAssets, newSelectedBlobs;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (newBlobs.length === 0)
                        return [2 /*return*/];
                    setSelectedBlobs(__spreadArray(__spreadArray([], selectedBlobs, true), newBlobs, true));
                    setNewBlobs([]);
                    return [4 /*yield*/, Promise.all(newBlobs.map(function (newBlob) { return __awaiter(void 0, void 0, void 0, function () {
                            var sendBlobResult, newSelectedBlob, newBackendAsset;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, sendBlob(newBlob)];
                                    case 1:
                                        sendBlobResult = _b.sent();
                                        if (!sendBlobResult)
                                            return [2 /*return*/];
                                        newSelectedBlob = __assign(__assign({}, newBlob), { temporaryDestination: (_a = sendBlobResult.result) === null || _a === void 0 ? void 0 : _a.temporaryDestination });
                                        newBackendAsset = (0, makeBackendAsset_1.makeBackendAsset)(newSelectedBlob, projectRelativeReferencingFilePath, modelName);
                                        return [2 /*return*/, { newSelectedBlob: newSelectedBlob, newBackendAsset: newBackendAsset }];
                                }
                            });
                        }); }))];
                case 1:
                    newStuff = (_a.sent()).filter(js_util_1.notEmpty);
                    newBackendAssets = newStuff.map(function (x) { return x.newBackendAsset; });
                    newSelectedBlobs = newStuff.map(function (x) { return x.newSelectedBlob; });
                    setSelectedBlobs(newSelectedBlobs);
                    onChange(value ? __spreadArray(__spreadArray([], value, true), newBackendAssets, true) : newBackendAssets);
                    return [2 /*return*/];
            }
        });
    }); };
    var renderChooseType = function () {
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row" }, { children: [!inputTypes || inputTypes.includes("recordAudio") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83D\uDD08", onClick: function () { return setNewType("recordAudio"); } })) : null, !inputTypes || inputTypes.includes("recordVideo") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83C\uDFA5", onClick: function () { return setNewType("recordVideo"); } })) : null, !inputTypes || inputTypes.includes("recordScreen") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83D\uDCBB", onClick: function () { return setNewType("recordScreen"); } })) : null, !inputTypes || inputTypes.includes("camera") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83D\uDCF8", onClick: function () { return setNewType("camera"); } })) : null, !inputTypes || inputTypes.includes("files") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83D\uDCC2", onClick: function () { return setNewType("files"); } })) : null, !inputTypes || inputTypes.includes("project-media") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83D\uDC51", onClick: function () { return setNewType("project-media"); } })) : null, !inputTypes || inputTypes.includes("p2p-media") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83D\uDC65", onClick: function () { return setNewType("p2p-media"); } })) : null, !inputTypes || inputTypes.includes("youtube") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u23EF", onClick: function () { return setNewType("youtube"); } })) : null, !inputTypes || inputTypes.includes("google-images") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83D\uDD0E", onClick: function () { return setNewType("google-images"); } })) : null, !inputTypes || inputTypes.includes("giphy") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83E\uDD84", onClick: function () { return setNewType("giphy"); } })) : null, !inputTypes || inputTypes.includes("unsplashed") ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\uD83C\uDF05", onClick: function () { return setNewType("unsplashed"); } })) : null] })));
    };
    var renderNavigation = function () {
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "flex flex-row justify-between" }, { children: [!defaultNewType ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u274C", onClick: function () {
                        setNewBlobs([]);
                        if (!defaultNewType) {
                            setNewType(null);
                        }
                        // TODO: also safely remove the MediaHandler
                    } })) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, {})), newBlobs.length > 0 ? ((0, jsx_runtime_1.jsx)(clickable_icon_1.ClickableIcon, { emoji: "\u2705", onClick: function () {
                        addBlobs();
                        setNewBlobs([]);
                        if (!defaultNewType) {
                            setNewType(null);
                        }
                    } })) : ((0, jsx_runtime_1.jsx)(react_with_native_1.Div, {}))] })));
    };
    var renderAssets = function () {
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [newType === null ? renderChooseType() : null, selectedBlobs === null || selectedBlobs === void 0 ? void 0 : selectedBlobs.map(function (asset, index) { return ((0, jsx_runtime_1.jsx)(asset_view_1.InteractiveAsset, { attachTokenToFilename: attachTokenToFilename, projectRelativeReferencingFilePath: projectRelativeReferencingFilePath, asset: asset, remove: function () { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {
                        return [2 /*return*/, removeAsset(asset, index)];
                    }); }); }, onChange: function (newAsset) {
                        var newSelectedBlobs = selectedBlobs.map(function (selectedBlob, i) {
                            return i === index ? newAsset : asset;
                        });
                        setSelectedBlobs(newSelectedBlobs);
                        var newBackendAssets = value
                            ? value.map(function (valueItem) {
                                var id = valueItem.relativePath || valueItem.temporaryDestination;
                                var newAssetId = newAsset.relativePath || newAsset.temporaryDestination;
                                if (id !== undefined &&
                                    newAssetId !== undefined &&
                                    id === newAssetId) {
                                    return (0, makeBackendAsset_1.makeBackendAsset)(newAsset, projectRelativeReferencingFilePath, modelName);
                                }
                                return valueItem;
                            })
                            : undefined;
                        if (newBackendAssets) {
                            onChange(newBackendAssets);
                        }
                    } }, "asset".concat(index))); })] }));
    };
    var renderSpecificAssetInput = function () {
        return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, { children: [newType === "files" ? ((0, jsx_runtime_1.jsx)(FileInput_1.FileInput, { setBlobs: function (blobs) {
                        setNewBlobs(blobs);
                    } })) : null, newType === "camera" ? ((0, jsx_runtime_1.jsx)(Webcam_1.WebcamCapture, { withBlob: function (blobPath, blob) {
                        return setNewBlobs([
                            {
                                blobPath: blobPath,
                                type: "image",
                                blob: blob,
                                name: defaultAssetNameWithToken,
                                sizeBytes: blob.size,
                                uploadProgress: 0,
                            },
                        ]);
                    } })) : null, newType === "recordAudio" ? ((0, jsx_runtime_1.jsx)(MediaRecorder_1.MediaRecorder, { type: "audio", withBlob: function (blobPath, blob) {
                        return setNewBlobs([
                            {
                                blobPath: blobPath,
                                type: "audio",
                                blob: blob,
                                name: defaultAssetNameWithToken,
                                uploadProgress: 0,
                                sizeBytes: blob.size,
                            },
                        ]);
                    } })) : null, newType === "recordVideo" ? ((0, jsx_runtime_1.jsx)(MediaRecorder_1.MediaRecorder, { type: "video", withBlob: function (blobPath, blob) {
                        return setNewBlobs([
                            {
                                blobPath: blobPath,
                                type: "video",
                                blob: blob,
                                name: defaultAssetNameWithToken,
                                sizeBytes: blob.size,
                                uploadProgress: 0,
                            },
                        ]);
                    } })) : null, newType === "recordScreen" ? ((0, jsx_runtime_1.jsx)(MediaRecorder_1.MediaRecorder, { type: "screen", withBlob: function (blobPath, blob) {
                        return setNewBlobs([
                            {
                                blobPath: blobPath,
                                type: "video",
                                blob: blob,
                                name: defaultAssetNameWithToken,
                                sizeBytes: blob.size,
                                uploadProgress: 0,
                            },
                        ]);
                    } })) : null, newType === "project-media" ? (0, jsx_runtime_1.jsx)(SelectMedia_1.SelectMedia, { source: "project" }) : null, newType === "p2p-media" ? (0, jsx_runtime_1.jsx)(SelectMedia_1.SelectMedia, { source: "p2p" }) : null, newType === "google-images" ? (0, jsx_runtime_1.jsx)(SelectMedia_1.SelectMedia, { source: "google" }) : null, newType === "giphy" ? (0, jsx_runtime_1.jsx)(SelectMedia_1.SelectMedia, { source: "giphy" }) : null, newType === "unsplashed" ? (0, jsx_runtime_1.jsx)(SelectMedia_1.SelectMedia, { source: "unsplashed" }) : null, newType === "youtube" ? (0, jsx_runtime_1.jsx)(SelectMedia_1.SelectMedia, { source: "youtube" }) : null] }));
    };
    return ((0, jsx_runtime_1.jsxs)(react_with_native_1.Div, __assign({ className: "w-96" }, { children: [newType === null || !!defaultNewType ? renderAssets() : null, newType !== null || !!defaultNewType ? renderNavigation() : null, renderSpecificAssetInput()] })));
};
exports.AssetInput = AssetInput;
//# sourceMappingURL=AssetInput.js.map