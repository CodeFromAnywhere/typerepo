"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDeviceName = void 0;
var convert_case_1 = require("convert-case");
var model_types_1 = require("model-types");
var calculateDeviceName = function (ipInfo, userAgent) {
    var deviceName = (0, convert_case_1.slugify)("".concat(userAgent.os.name, "-").concat(userAgent.browser.name, "-").concat(ipInfo.country, "-").concat(ipInfo.region, "-").concat(ipInfo.city, "-").concat(ipInfo.ip, "-").concat((0, model_types_1.generateRandomString)(4)));
    return deviceName;
};
exports.calculateDeviceName = calculateDeviceName;
//# sourceMappingURL=calculateDeviceName.js.map