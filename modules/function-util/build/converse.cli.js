"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var converse_1 = require("./converse");
var wordArray = process.argv.slice(2);
var message = wordArray.join(" ");
(0, converse_1.converse)(message);
//# sourceMappingURL=converse.cli.js.map