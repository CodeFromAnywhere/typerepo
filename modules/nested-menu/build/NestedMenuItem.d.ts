import { MenuItemType, MouseEventCallbacks } from "./types";
export declare const getRealItemRecursive: (item: MenuItemType) => MenuItemType;
/**
 * General purpose NestedMenuItem
 *
 * TODO: make style customizable
 */
export declare const NestedMenuItem: (props: {
    item: MenuItemType;
    /**
     * If true, items with a single child will be merged into the parent
     */
    mergeSingleChilds?: boolean | undefined;
    headersClickable?: boolean | undefined;
    level?: number | undefined;
} & MouseEventCallbacks) => JSX.Element;
//# sourceMappingURL=NestedMenuItem.d.ts.map