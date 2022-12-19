"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uberduckSpeak = void 0;
var child_process_1 = require("child_process");
var try_parse_json_1 = require("try-parse-json");
var config_1 = require("./config");
var uberduckSpeak = function (uberduckVoice, text) {
    var resultString = (0, child_process_1.execSync)("curl -u ".concat(config_1.uberduckApiKey, ":").concat(config_1.uberduckSecret, "     'https://api.uberduck.ai/speak'     --data-raw '{\"speech\":\"").concat(text.replaceAll("'", ""), "\",\"voice\":\"").concat(uberduckVoice, "\"}'"), { encoding: "utf8" });
    console.log({ resultString: resultString });
    var result = (0, try_parse_json_1.tryParseJson)(resultString);
    var uuid = result === null || result === void 0 ? void 0 : result.uuid;
    return uuid;
};
exports.uberduckSpeak = uberduckSpeak;
//# sourceMappingURL=uberduckSpeak.js.map