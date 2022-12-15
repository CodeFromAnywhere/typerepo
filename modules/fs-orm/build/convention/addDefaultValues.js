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
exports.addDefaultValues = void 0;
var model_types_1 = require("model-types");
var convert_case_1 = require("convert-case");
var log_1 = require("log");
/**
 * Adds timestamps, id, and a slug IF these things are not already present
 *
 * NB: slugs will be slugified here!
 * NB: if there is a name present, slug will be added here!
 *
 * NB: for kvmd storage, id will be set to a kebab-case of the name
 *
 * NB: does not add the ModelLocation parameters
 */
var addDefaultValues = function (bareItem, isKvmdStorage) {
    var now = Date.now();
    var defaultValues = {
        createdAt: now,
        updatedAt: now,
        deletedAt: 0,
        createdFirstAt: now,
    };
    var shouldCreateSlugFromName = !!bareItem.name && bareItem.slug === undefined;
    var slugifiedSlug = bareItem.slug ? (0, convert_case_1.slugify)(bareItem.slug) : undefined;
    var isValidSlug = bareItem.slug === undefined || slugifiedSlug === bareItem.slug;
    if (!isValidSlug) {
        (0, log_1.log)("".concat(bareItem.slug, " is not a slugified slug, it has been altered to a valid slug"), { type: "warning" });
    }
    var slug = shouldCreateSlugFromName
        ? (0, convert_case_1.slugify)(bareItem.name)
        : slugifiedSlug;
    var id = bareItem.id === undefined
        ? isKvmdStorage
            ? (0, convert_case_1.kebabCase)(bareItem.name)
            : (0, model_types_1.generateId)()
        : bareItem.id;
    var item = __assign(__assign(__assign({}, defaultValues), bareItem), { slug: slug, id: id });
    return item;
};
exports.addDefaultValues = addDefaultValues;
//# sourceMappingURL=addDefaultValues.js.map