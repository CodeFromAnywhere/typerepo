"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.db=exports.getMergedQueryConfig=exports.dbConfig=void 0;
/**
 * TODO: maybe splitting this up + importing DbModels as type, will reduce the risk of circular dependencies
 */
var sdk_db_1=require("sdk-db"),fs_orm_1=require("fs-orm");exports.dbConfig={modelQueryConfig:sdk_db_1.modelQueryConfig,defaultQueryConfig:void 0};var getMergedQueryConfig=function(e,r){return(0,fs_orm_1.mergeConfigs)(e,exports.dbConfig,r)};exports.getMergedQueryConfig=getMergedQueryConfig,exports.db=(0,fs_orm_1.createDb)(exports.dbConfig);
//# sourceMappingURL=db.js.map