#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var newOperation_1=require("../newOperation"),newOperationCli=function(){var e=process.argv.slice(2),n=e[0],t=e[1],i=e[2],o=e[3];(0,newOperation_1.newOperation)(n,{type:t,description:i,destinationPath:o}),console.log("Generated operation",{name:n,type:t,description:i,destinationPath:o})};
/**
 * newOperation also works as CLI
 *
 * example: `newOperation [operation-name] [type]` in the folder where you want to create it. Optionally you can specify the type of operation (js, node, ui-es5, ui-es6, web) as the second argument of the CLI
 *
 * Arguments (all optional):
 * - name: string
 * - type: `OperationClassification`
 * - description: string
 * - destinationPath: string
 */newOperationCli();
//# sourceMappingURL=newOperation.cli.js.map