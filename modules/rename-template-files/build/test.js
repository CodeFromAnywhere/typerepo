"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = void 0;
const general_1 = require("./general");
const make_test_1 = require("make-test");
exports.test = (0, make_test_1.makeTest)(() => {
    const fileNames = [".gitignore", "package.json", "Podfile"];
    const changedFileNames = fileNames
        .map(general_1.renameToTemplateFile)
        .map(general_1.renameTemplateToNormalFile);
    return (0, general_1.isEqualArray)(fileNames, changedFileNames);
});
//# sourceMappingURL=test.js.map