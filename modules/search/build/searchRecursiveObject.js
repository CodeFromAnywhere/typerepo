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
exports.test = exports.searchRecursiveObjectArray = void 0;
var make_test_1 = require("make-test");
var example = [
    {
        name: "no match",
    },
    {
        name: "top level",
        children: [
            {
                name: "second level 1",
                children: [
                    {
                        name: "downlevel a",
                    },
                ],
            },
            {
                name: "second level 2",
                children: [
                    {
                        name: "downlevel b",
                    },
                ],
            },
        ],
    },
    {
        name: "top level",
        children: [
            {
                name: "second level 1",
                children: [
                    {
                        name: "downlevel a",
                    },
                ],
            },
            {
                name: "second level 2",
                children: [
                    {
                        name: "downlevel b",
                    },
                    {
                        name: "something else",
                    },
                ],
            },
            {
                name: "something else",
                children: [
                    {
                        name: "levels here!!!!",
                    },
                    {
                        name: "something else",
                    },
                ],
            },
        ],
    },
];
/**
 * Reduces an object with children of its own type according to a baseMatcher.
 *
 * The object only gets returned if the children have a match (or their children, etc) or if the object itself is a match. If the object itself is a match, its children will also be edited to filter out non-matching things
 *
 * NB: Not finished yet (see todo).
 *
 * Also not sure if the final UX is really as great and performant as I wish, so it may be easier to simply have a separate search for files and global (just like vscode has)
 **/
var magicalRecursiveReducer = function (previous, current, baseMatcher) {
    var _a;
    // NB: copy!
    var newCurrent = __assign({}, current);
    newCurrent.children = newCurrent.children
        ? newCurrent.children.reduce(function (p, c) { return magicalRecursiveReducer(p, c, baseMatcher); }, [])
        : undefined;
    if (baseMatcher(newCurrent) || ((_a = newCurrent.children) === null || _a === void 0 ? void 0 : _a.length)) {
        previous.push(newCurrent);
    }
    return previous;
};
var searchRecursiveObjectArray = function (array, baseMatcher, 
/**
 * optionally, item can be mapped to add some info after match is found or not
 */
afterMapper) {
    return array.reduce(function (previous, current) {
        return magicalRecursiveReducer(previous, current, baseMatcher);
    }, []);
};
exports.searchRecursiveObjectArray = searchRecursiveObjectArray;
exports.test = (0, make_test_1.makeTest)(function () {
    return (0, exports.searchRecursiveObjectArray)(example, function (item) { return item.name.includes("level"); });
}, function (result) { return result.length === 2; });
//# sourceMappingURL=searchRecursiveObject.js.map