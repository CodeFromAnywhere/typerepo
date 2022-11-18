import { NestedPathObject } from "nested-menu";
/**
 * This is a simple overwrite of the `NestedPathObject` with a more specific key naming.
 *
 * I can use this directly to render a menu with many layers!
 *
 * SUPER COOL
 *
 * UPDATE: depreacated
 *
 * DEPRECATED:
 */
export interface NestedDatabaseMenu extends NestedPathObject {
    [projectRelativeOperationPath: string]: {
        [folderName: string]: {
            [dbModelName: string]: null;
        };
    };
}
//# sourceMappingURL=types.d.ts.map