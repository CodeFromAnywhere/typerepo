/// <reference types="react" />
import { UseStoreResult } from "react-with-native-store";
import { OpenPage, PagesObjectShape } from "./types";
export declare const OpenPages: <TPagesObject extends PagesObjectShape>(props: {
    openPagesStore: UseStoreResult<OpenPage<Extract<keyof TPagesObject, string>>[]>;
    pagesObject: TPagesObject;
}) => JSX.Element | null;
//# sourceMappingURL=OpenPages.d.ts.map