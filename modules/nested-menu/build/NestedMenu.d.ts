import { MenuItemType, MouseEventCallbacks } from "./types";
/**
 * General purpose nested menu component
 *
 * Please make sure that you also wrap your app with `MenuStoreProvider`, or this will crash...!
 */
export declare const NestedMenu: (props: {
    items?: MenuItemType[] | undefined;
    headersClickable?: boolean | undefined;
} & MouseEventCallbacks) => JSX.Element;
//# sourceMappingURL=NestedMenu.d.ts.map