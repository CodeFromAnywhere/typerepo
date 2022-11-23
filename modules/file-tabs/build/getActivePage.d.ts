import { Keys } from "./FileTabs";
import { PagesObjectShape } from "./types";
export declare const getActivePage: <TPagesObject extends PagesObjectShape>(pathname: string, pagesObject: TPagesObject) => Extract<keyof TPagesObject, string>;
//# sourceMappingURL=getActivePage.d.ts.map