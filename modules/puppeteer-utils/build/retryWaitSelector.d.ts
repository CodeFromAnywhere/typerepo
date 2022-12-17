import { Page } from "puppeteer-core";
/**
 * Utility function that loops waiting a second and checking
 * if selector showed up. Fails if it takes more than 30 seconds.
 *
 * this is good to use instead of page.waitForTimeout + page.waitForSelector
 *
 */
export declare const retryWaitSelector: (props: {
    /** the page element from puppeteer got with browser.pages */
    page: Page;
    /** the css selector to search for */
    selector: string;
    /**  maxium time to retry. defaults to 30 seconds. */
    maxTime: number;
}) => Promise<{
    success: boolean;
    found?: any;
}>;
//# sourceMappingURL=retryWaitSelector.d.ts.map