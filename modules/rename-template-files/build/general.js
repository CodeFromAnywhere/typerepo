#!/usr/bin/env node
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameTemplateFiles = exports.renameTemplateToNormalFile = exports.renameToTemplateFile = exports.isEqualArray = void 0;
const fs_util_1 = require("fs-util");
const k_explore_1 = require("k-explore");
const one_by_one_1 = require("one-by-one");
/*
As long as there are no .template files present in the template folder that DONT need to be changed, it is fine.
If there are, we should warn people.
*/
const isEqualArray = (array1, array2) => array1.length === array2.length &&
    array1.every((value, index) => value === array2[index]);
exports.isEqualArray = isEqualArray;
const templateExtension = ".template";
const findTemplates = (basePath, doNotExploreChildFolders) => __awaiter(void 0, void 0, void 0, function* () {
    return (yield (0, k_explore_1.explore)({
        basePath,
        subExtension: ["template"],
        searchLevel: "fileName",
        doNotExploreChildFolders,
    })).map((textJson) => textJson.path);
});
const renameToTemplateFile = (fileName) => {
    const extensionStartsAt = fileName.lastIndexOf(".");
    const insertPosition = extensionStartsAt === -1 ? fileName.length : extensionStartsAt;
    const beforeExtension = fileName.substring(0, insertPosition);
    const afterExtension = fileName.substring(insertPosition);
    return `${beforeExtension}${templateExtension}${afterExtension}`;
};
exports.renameToTemplateFile = renameToTemplateFile;
const renameTemplateToNormalFile = (fileName) => {
    return fileName.replace(".template", "");
};
exports.renameTemplateToNormalFile = renameTemplateToNormalFile;
const renameTemplateFiles = ({ appDir }) => __awaiter(void 0, void 0, void 0, function* () {
    const templateFiles = yield findTemplates(appDir);
    const renameables = templateFiles.map((path) => ({
        oldPath: path,
        newPath: (0, exports.renameTemplateToNormalFile)(path),
    }));
    yield (0, one_by_one_1.oneByOne)(renameables, (oldNew) => __awaiter(void 0, void 0, void 0, function* () { return fs_util_1.fs.rename(oldNew.oldPath, oldNew.newPath); }));
    return;
});
exports.renameTemplateFiles = renameTemplateFiles;
//# sourceMappingURL=general.js.map