"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./alter/alter-functions"), exports);
__exportStar(require("./alter/removeKeyValueMarkdown"), exports);
__exportStar(require("./alter/upsert"), exports);
__exportStar(require("./alter/upsertKeyValueMarkdown"), exports);
__exportStar(require("./convention/addDefaultValues"), exports);
__exportStar(require("./convention/calculateOperationsObject"), exports);
__exportStar(require("./convention/getDatabaseFiles"), exports);
__exportStar(require("./convention/getDatabaseRootFolder"), exports);
__exportStar(require("./convention/getDbFileLocation"), exports);
__exportStar(require("./convention/getDbStorageMethodExtension"), exports);
__exportStar(require("./convention/getLocationPattern"), exports);
__exportStar(require("./convention/getMergedOperationPath"), exports);
__exportStar(require("./convention/getParentSlug"), exports);
__exportStar(require("./convention/getRootFolders"), exports);
__exportStar(require("./convention/getWildcardDbFileLocations"), exports);
__exportStar(require("./convention/mergeConfigs"), exports);
__exportStar(require("./convention/storing-items"), exports);
__exportStar(require("./createDb"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./util/augmentItemWithReferencedDataRecursively"), exports);
__exportStar(require("./util/getAugmentedData"), exports);
__exportStar(require("./util/groupByFile"), exports);
__exportStar(require("./waitForLockfile"), exports);
//# sourceMappingURL=index.js.map