import { MenuItemType } from "./types";
export declare const useExpanded: (queryPath?: string) => [boolean, () => Promise<void>, () => Promise<void>, () => Promise<void>, {
    hydrated: boolean;
}];
/**
 * General purpose NestedMenuItem
 *
 * TODO: make style customizable
 */
export declare const NestedMenuItem: (props: MenuItemType & {
    headersClickable?: boolean | undefined;
    level?: number | undefined;
}) => JSX.Element;
//# sourceMappingURL=NestedMenuItem.d.ts.map