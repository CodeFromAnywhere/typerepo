import { Page } from "puppeteer-core";
/**
 * Utility function that always returns a boolean instead of throwing an error.
 */
export declare const foundOrNot: (props: {
    /** the page element from puppeteer got with browser.pages */
    page: Page;
    /** the css selector to search for */
    selector: string;
    /** (optional) change default timeout to wait for selector */
    timeoutMilliseconds?: number | undefined;
}) => Promise<boolean>;
//# sourceMappingURL=foundOrNot.d.ts.map