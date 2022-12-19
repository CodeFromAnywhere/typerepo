"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uberduckGetPath = void 0;
var child_process_1 = require("child_process");
var try_parse_json_1 = require("try-parse-json");
var config_1 = require("./config");
var uberduckGetPath = function (uuid) {
    var resultString = (0, child_process_1.execSync)("curl -u ".concat(config_1.uberduckApiKey, ":").concat(config_1.uberduckSecret, "         'https://api.uberduck.ai/speak-status?uuid=").concat(uuid, "'"), { encoding: "utf8" });
    var result = (0, try_parse_json_1.tryParseJson)(resultString);
    if (result === null || result === void 0 ? void 0 : result.path)
        return result.path;
    return undefined;
};
exports.uberduckGetPath = uberduckGetPath;
//# sourceMappingURL=uberduckGetPath.js.map