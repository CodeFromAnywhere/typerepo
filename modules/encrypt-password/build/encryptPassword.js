"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = void 0;
var bcrypt_1 = require("bcrypt");
/**
 * Method to encrypt any password. Uses `bcrypt`
 */
var encryptPassword = function (rawPassword) {
    return (0, bcrypt_1.hashSync)(rawPassword, 10);
};
exports.encryptPassword = encryptPassword;
//# sourceMappingURL=encryptPassword.js.map