"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.getProjectRoot=void 0;var fs_util_1=require("fs-util"),findFolderWhereMatch_1=require("./findFolderWhereMatch"),isWorkspaceRoot_1=require("./isWorkspaceRoot"),getProjectRoot=function(e){var o,t=(0,findFolderWhereMatch_1.findFolderWhereMatch)(e||__dirname,isWorkspaceRoot_1.isWorkspaceRoot);if(t)return(null===(o=t.matchResult)||void 0===o?void 0:o.isSensibleProject)?t.folderPath:fs_util_1.path.join(t.folderPath,"..");
/**
     * NB: for Sensible porjects, the project root is the same as the workspace root.
     * NB: For OS projects, the project root is one folder up from the workspace root
     */};exports.getProjectRoot=getProjectRoot;
//# sourceMappingURL=getProjectRoot.js.map