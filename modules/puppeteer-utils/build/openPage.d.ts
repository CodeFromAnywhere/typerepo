import { Page } from "puppeteer";
export type NewPageProps = {
    pageId?: string;
};
/**
 * Handling the new page by checking all browser tabs and if exist then return the existing one for reuse
 * or create new one
 */
export declare const openPage: (pageId?: string) => Promise<{
    page?: Page | undefined;
    pageId: string;
}>;
//# sourceMappingURL=openPage.d.ts.map