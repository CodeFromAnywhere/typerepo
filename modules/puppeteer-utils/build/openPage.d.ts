import { Page } from "puppeteer";
export declare type NewPageProps = {
    pageId?: string;
};
/**
 * Handling the new page by checking all browser tabs and if exist then return the existing one for reuse
 * or create new one
 */
export declare const delay: (ms: number) => Promise<unknown>;
export declare const openPage: (pageId?: string) => Promise<Page | undefined>;
//# sourceMappingURL=openPage.d.ts.map