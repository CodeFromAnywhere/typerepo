#!/usr/bin/env node
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var newTemplate_1=require("../newTemplate"),newTemplateCli=function(){var e=process.argv.slice(2),t=e[0],n=e[1];(0,newTemplate_1.newTemplate)(t,n).then((function(e){e?console.log("Generated template",{type:t}):console.log("Something went wrong")}))};
/**
 * newTemplate can be used as CLI:
 *
 * Arguments:
 * - type (required): a folder from `new-template/assets/templates`
 * - destinationPath (optional): path where the template should be copied to (uses `cwd` by default)
 */newTemplateCli();
//# sourceMappingURL=newTemplate.cli.js.map