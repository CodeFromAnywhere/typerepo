"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateUniqueId = void 0;
var model_types_1 = require("model-types");
/**
 * Bit annoying that we need to use all model-types here xD.
 *
 * TODO: Let's extrahere this
 */
var generateUniqueId = function () { return (0, model_types_1.generateId)(); };
exports.generateUniqueId = generateUniqueId;
//# sourceMappingURL=generateUniqueId.js.map