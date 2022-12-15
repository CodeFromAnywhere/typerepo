"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mergeNestedObject_1 = require("./mergeNestedObject");
var mergeNestedObjectTest = function () {
    var testObject = {
        a: "lol",
        b: 8,
        c: { x: "lol", y: 88, z: { a: "wow", b: 888, c: { x: "wow" } } },
    };
    var result = (0, mergeNestedObject_1.mergeNestedObject)(testObject, {
        c: { z: { c: { x: undefined }, b: 999 } },
    });
    console.dir({ testObject: testObject, result: result }, { depth: 999 });
};
mergeNestedObjectTest();
//# sourceMappingURL=mergeNestedObject.test.js.map