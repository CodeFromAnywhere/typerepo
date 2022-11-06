import { NestedPathObject } from "nested-menu";
/**
 * This is a simple overwrite of the `NestedPathObject` with a more specific key naming.
 *
 * I can use this directly to render a menu with many layers!
 *
 * SUPER COOL
 */
export interface NestedDatabaseMenu extends NestedPathObject {
    [bundleName: string]: {
        [operationName: string]: {
            [folderName: string]: {
                [dbModelName: string]: null;
            };
        };
    };
}
//# sourceMappingURL=types.d.ts.map