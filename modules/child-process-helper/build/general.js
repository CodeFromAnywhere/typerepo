#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawnAsync = exports.execAsync = exports.spawnSync = exports.execSync = exports.exec = exports.spawn = void 0;
var node_child_process_1 = require("node:child_process");
Object.defineProperty(exports, "exec", { enumerable: true, get: function () { return node_child_process_1.exec; } });
Object.defineProperty(exports, "spawn", { enumerable: true, get: function () { return node_child_process_1.spawn; } });
Object.defineProperty(exports, "execSync", { enumerable: true, get: function () { return node_child_process_1.execSync; } });
Object.defineProperty(exports, "spawnSync", { enumerable: true, get: function () { return node_child_process_1.spawnSync; } });
/**
 * promises to exec something with response and success as result (Promised)
 */
var execAsync = function (command) {
    return new Promise(function (resolve) {
        (0, node_child_process_1.exec)(command, function (error, stdout, stderr) {
            if (error) {
                console.log(error);
                resolve({ success: false, response: stderr });
            }
            else {
                resolve({ success: true, response: stdout });
            }
        });
    });
};
exports.execAsync = execAsync;
/**
 * i don't know if this is ever useful...
 */
var spawnAsync = function (command, options) {
    return new Promise(function (resolve) {
        var spawned = (0, node_child_process_1.spawn)(command, options);
        var data = [];
        spawned
            .on("exit", function (code) {
            resolve({ response: String(code), success: false, data: data });
        })
            .on("message", function (message) {
            //not sure if this does anything
        })
            .on("data", function (message) {
            //not sure if this does anything
            data.push(message);
        })
            .on("error", function (err) {
            resolve({ response: String(err), success: false, data: data });
        });
    });
};
exports.spawnAsync = spawnAsync;
//# sourceMappingURL=general.js.map