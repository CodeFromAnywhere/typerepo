"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePassword = void 0;
var bcrypt_1 = require("bcrypt");
/**
 * Method to check if a raw password should be the same as the encrypted variant. Uses `bcrypt`
 */
var comparePassword = function (rawPassword, encryptedPassword) {
    return (0, bcrypt_1.compareSync)(rawPassword, encryptedPassword);
};
exports.comparePassword = comparePassword;
//# sourceMappingURL=comparePassword.js.map