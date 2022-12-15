"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frontmatterToObject = void 0;
var name_conventions_1 = require("name-conventions");
var marked_util_1 = require("marked-util");
var js_util_1 = require("js-util");
var parseFrontmatterString_1 = require("./parseFrontmatterString");
var markdown_types_1 = require("markdown-types");
var frontmatterToObject = function (frontmatter, schema) {
    if (!schema.properties || !schema.properties.length) {
        return {};
    }
    var valueObjectArray = schema.properties
        .map(function (property) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        var value = frontmatter[property.name]
            ? frontmatter[property.name].trim()
            : undefined;
        if (value === undefined)
            return;
        var assetInputType = (0, name_conventions_1.getAssetInputType)(property.name);
        if ((property.schema.type === "object" ||
            property.schema.type === "array") &&
            (assetInputType === null || assetInputType === void 0 ? void 0 : assetInputType.type)) {
            // it's a backendAsset
            var backendAssets = (0, marked_util_1.findEmbeds)(value).map(function (x) {
                return { alt: x.alt, relativePath: x.src };
            });
            if (backendAssets.length === 0)
                return;
            if (assetInputType.isMultiple) {
                return _a = {}, _a[property.name] = backendAssets, _a;
            }
            return _b = {}, _b[property.name] = backendAssets[0], _b;
        }
        if (property.schema.type === "number" && property.name.endsWith("At")) {
            var unixTimestamp = (0, markdown_types_1.tryParseDate)(value);
            return _c = {}, _c[property.name] = unixTimestamp, _c;
        }
        if (property.schema.type === "boolean") {
            if (value === "true")
                return _d = {}, _d[property.name] = true, _d;
            if (value === "false")
                return _e = {}, _e[property.name] = false, _e;
            return;
        }
        if (property.schema.type === "number") {
            var number = Number(value);
            if (isNaN(number))
                return;
            return _f = {}, _f[property.name] = number, _f;
        }
        if (property.schema.type === "null") {
            if (value !== "null") {
                return;
            }
            return _g = {}, _g[property.name] = null, _g;
        }
        if (property.schema.type === "string") {
            return _h = {}, _h[property.name] = (0, parseFrontmatterString_1.parseFrontmatterString)(value), _h;
        }
        if (property.schema.type === "array") {
            // turn into comma separated
            // Let's only support string[] for now!
            var itemString = value
                .split(",")
                .map(function (x) { return x.trim(); })
                .map(parseFrontmatterString_1.parseFrontmatterString);
            return _j = {}, _j[property.name] = itemString, _j;
        }
        if (property.schema.type === "object") {
            // should not be supported
            return;
        }
        return;
    })
        .filter(js_util_1.notEmpty);
    var parse = (0, js_util_1.mergeObjectsArray)(valueObjectArray);
    return parse;
};
exports.frontmatterToObject = frontmatterToObject;
//# sourceMappingURL=frontmatterToObject.js.map