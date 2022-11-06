#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getImportedDependencies=exports.getPackage=exports.isAbsoluteImport=void 0;const ts_morph_util_1=require("ts-morph-util"),isAbsoluteImport=e=>!e.startsWith(".");
/**
 * if it doesn't start with a dot it must be an absolute import so most likely a package that needs to be installed
 */exports.isAbsoluteImport=isAbsoluteImport;
/**
 * only the first part
 */
const getPackage=e=>e.split("/")[0];exports.getPackage=getPackage;
/**
 * DEPRECATED: should use generated index files with imports instead!
 *
 * gets all imported packages (dependencies) in a project
 * doesn't take into account the fact that someone can set up a rule for absolute imports within the package.
 * this assumes that any absolute package comes from node_modules.
 */
const getImportedDependencies=({operationFolderPath:e})=>{const t=(0,ts_morph_util_1.getTsMorphProject)(e);if(!t)return;return t.getSourceFiles("src/*").reduce(((e,t)=>{const r=t.getImportDeclarations().map((e=>e.getModuleSpecifier().getLiteralText()));return e.concat(r)}),[]).filter(exports.isAbsoluteImport).map(exports.getPackage)};exports.getImportedDependencies=getImportedDependencies;
//# sourceMappingURL=general.js.map