"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getSubExtensions_1 = require("./getSubExtensions");
var test = function () {
    //   getSubExtensions(absolutePath).includes(temporaryConvertedSubextension)   ,
    var result = (0, getSubExtensions_1.getSubExtensions)("/Users/king/King/assets/recordings/1673244762157.converted.mp3");
    console.log({ result: result });
};
test();
//# sourceMappingURL=getSubExtensions.test.js.map