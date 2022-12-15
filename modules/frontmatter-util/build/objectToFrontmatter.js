"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToFrontmatter = void 0;
var name_conventions_1 = require("name-conventions");
var js_util_1 = require("js-util");
var general_1 = require("./general");
var objectToFrontmatter = function (parse, schema) {
    if (!schema.properties || !schema.properties.length) {
        return {};
    }
    var propertyStringValueArray = schema.properties
        .map(function (property) {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        var value = parse[property.name];
        var assetInputType = (0, name_conventions_1.getAssetInputType)(property.name);
        if ((property.schema.type === "object" ||
            property.schema.type === "array") &&
            (assetInputType === null || assetInputType === void 0 ? void 0 : assetInputType.type)) {
            // it's a backendAsset
            var realValue = value;
            if (!realValue || typeof realValue !== "object") {
                // must be an array or object, otherwise it's set to nothing
                return;
            }
            var backendAssets = (0, js_util_1.makeArray)(realValue);
            return _a = {},
                _a[property.name] = backendAssets
                    .map(function (backendAsset) {
                    return "![".concat(backendAsset.alt || "", "](").concat(backendAsset.relativePath || "", ")");
                })
                    .join(", "),
                _a;
        }
        if (property.schema.type === "number" && property.name.endsWith("At")) {
            if (typeof value !== "number" || (!value && value !== 0)) {
                // we can only process numbers
                return;
            }
            // it's a date, convert to date
            var humanReadableDate = new Date(value).toDateString();
            return _b = {}, _b[property.name] = humanReadableDate, _b;
        }
        if (property.schema.type === "boolean") {
            if (value === true)
                return _c = {}, _c[property.name] = "true", _c;
            if (value === false)
                return _d = {}, _d[property.name] = "false", _d;
            return;
        }
        if (property.schema.type === "number") {
            if (typeof value !== "number" || (!value && value !== 0)) {
                // we can only process numbers
                return;
            }
            return _e = {}, _e[property.name] = String(value), _e;
        }
        if (property.schema.type === "null") {
            if (value !== null) {
                return;
            }
            return _f = {}, _f[property.name] = "null", _f;
        }
        if (property.schema.type === "string") {
            if (typeof value !== "string") {
                return;
            }
            return _g = {}, _g[property.name] = (0, general_1.quotedOrNot)((0, general_1.stringifyNewlines)(value)), _g;
        }
        if (property.schema.type === "array") {
            // turn into comma separated
            if (!Array.isArray(value)) {
                return;
            }
            // Let's only support string[] for now!
            //   const type = property.schema.items?.map(x=>x.schema)?.[0]
            var itemString = value
                .map(function (item) {
                if (typeof item !== "string")
                    return;
                return (0, general_1.quotedOrNot)((0, general_1.stringifyNewlines)(item));
            })
                .filter(js_util_1.notEmpty)
                .join(", ");
            return _h = {}, _h[property.name] = itemString, _h;
        }
        if (property.schema.type === "object") {
            // should not be supported
            return;
        }
        return;
    })
        .filter(js_util_1.notEmpty);
    var frontmatter = (0, js_util_1.mergeObjectsArray)(propertyStringValueArray);
    return frontmatter;
};
exports.objectToFrontmatter = objectToFrontmatter;
//# sourceMappingURL=objectToFrontmatter.js.map