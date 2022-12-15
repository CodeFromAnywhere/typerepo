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
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeNestedObject = void 0;
var getObjectKeysArray_1 = require("./getObjectKeysArray");
var mergeObjectsArray_1 = require("./mergeObjectsArray");
// type X = IsOptional<string|undefined>;
/**

Merges an object into an object, ensuring typesafety. The second object needs to be a recursive subset of the first.

LIMITATION: When you set a value to undefined, ensure that it is allowed by the original object, we are not checking for this!

TODO: is it possible to remove this type unsafety? It would be nice to only be able to set it to undefined if that is allowed by T. Not sure if it's possible to check the difference bewteen a key not being present and a key being present and the value being undefined... Look it up!

Example:


```ts

  const testObject: {
    a: string;
    b: number;
    c: { x: string; y: number; z: { a: string; b: number; c: { x: "wow" } } };
  } = {
    a: "lol",
    b: 8,
    c: { x: "lol", y: 88, z: { a: "wow", b: 888, c: { x: "wow" } } },
  };

  const result = mergeNestedObject(testObject, {
    c: { z: { c: { x: undefined }, b: 999 } },
  });

  console.dir({ testObject, result }, { depth: 10 });

  // result will be: { a: 'lol', b: 8, c: { x: 'lol', y: 88, z: { a: 'wow', b: 999, c: { x: undefined } } }
  }

  ```

  It's great, because you can't make any type mistakes, and your code becomes much shorter for altering an object

 */
var mergeNestedObject = function (object, otherObject) {
    if (object === undefined && otherObject !== undefined) {
        // basecase that is used if the original object has some optional value undefined. in that case, the otherObject is used to set that key
        return otherObject;
    }
    if (otherObject === undefined)
        return object;
    // put `otherObject` on object, make sure
    // const withoutUndefinedOtherObject = omitUndefinedValues(otherObject);
    var partialNewObject = (0, mergeObjectsArray_1.mergeObjectsArray)(
    // go over all keys in otherObject...
    (0, getObjectKeysArray_1.getObjectKeysArray)(otherObject).map(function (key) {
        var _a, _b;
        // get the value for it
        var otherObjectValue = otherObject[key];
        //   if it's defined, but not an object.. the value is definite.
        // NB: arrays are also objects, but in this case they should also return
        if (typeof otherObjectValue !== "object" ||
            Array.isArray(otherObjectValue)) {
            return _a = {}, _a[key] = otherObject[key], _a;
        }
        //   if it's defined and its type is an object, that object needs to be merged with the full object
        var newValue = (0, exports.mergeNestedObject)(object[key], otherObject[key]);
        return _b = {}, _b[key] = newValue, _b;
    }));
    //   ensure to merge the result with the original object to also do the first level
    return __assign(__assign({}, object), partialNewObject);
};
exports.mergeNestedObject = mergeNestedObject;
//# sourceMappingURL=mergeNestedObject.js.map