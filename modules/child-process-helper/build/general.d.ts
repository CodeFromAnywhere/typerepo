#!/usr/bin/env node
import { exec, spawn, SpawnOptionsWithoutStdio, execSync, spawnSync } from "node:child_process";
export { spawn, exec, execSync, spawnSync };
/**
 * promises to exec something with response and success as result (Promised)
 */
export declare const execAsync: (command: string) => Promise<{
    success: boolean;
    response: string;
}>;
/**
 * i don't know if this is ever useful...
 */
export declare const spawnAsync: (command: string, options: SpawnOptionsWithoutStdio) => Promise<{
    success: boolean;
    response: string;
    data?: string[];
}>;
//# sourceMappingURL=general.d.ts.map