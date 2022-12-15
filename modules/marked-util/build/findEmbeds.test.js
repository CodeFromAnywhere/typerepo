"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var findEmbeds_1 = require("./findEmbeds");
var findEmbedsTest = function () {
    var string = "---\nisCodestory: true\nheaderImage: ![](./ksks2.png)\n---\n\n# YO YO YO ![](./ksks.nl)\n\nyo yo yo\n\n![](./ksks.png)\n\n**![](./wow.png)**\n";
    var result = (0, findEmbeds_1.findEmbeds)(string);
    console.log({ result: result });
};
findEmbedsTest();
//# sourceMappingURL=findEmbeds.test.js.map