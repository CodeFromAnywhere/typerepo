"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var write_to_assets_1=require("write-to-assets"),getTodoPages_1=require("./getTodoPages");(0,getTodoPages_1.getTodoPages)().then((function(e){(0,write_to_assets_1.writeToAssets)(__filename,e,"result.json")}));
//# sourceMappingURL=getTodoPages.test.js.map