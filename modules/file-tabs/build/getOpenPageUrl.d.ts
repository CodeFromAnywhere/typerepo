import { OpenPage, PagesObjectShape } from "./types";
/**
 gets the url of the open page

 - paths is a special query key that is expanded as path, not as query
 - index page should be on /
 */
export declare const getOpenPageUrl: <TPagesObject extends PagesObjectShape>(openPage: OpenPage<keyof TPagesObject>, pagesObject: TPagesObject) => string;
//# sourceMappingURL=getOpenPageUrl.d.ts.map