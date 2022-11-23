/// <reference types="react" />
import { PagesObjectShape } from "./types";
export declare type Keys<T> = Extract<keyof T, string>;
export declare const FileTabs: <TPagesObject extends PagesObjectShape>(props: {
    pagesObject: TPagesObject;
}) => JSX.Element | null;
//# sourceMappingURL=FileTabs.d.ts.map