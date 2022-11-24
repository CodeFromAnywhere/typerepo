"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var write_to_assets_1 = require("write-to-assets");
var getTodoPages_1 = require("./getTodoPages");
(0, getTodoPages_1.getTodoPages)().then(function (result) {
    (0, write_to_assets_1.writeToAssets)(__filename, result, "result.json");
});
//# sourceMappingURL=getTodoPages.test.js.map