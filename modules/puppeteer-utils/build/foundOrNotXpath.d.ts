import { Page } from "puppeteer-core";
/**
 * Utility function that always returns a boolean instead of throwing an error.
 * XPath version.
 */
export declare const foundOrNotXpath: (props: {
    /** the page element from puppeteer got with browser.pages */
    page: Page;
    /** the xpath selector to search for */
    selector: string;
}) => Promise<{
    /** was the element found or not */
    found: boolean;
    /** if the element was found, it is returned */
    element?: any;
}>;
//# sourceMappingURL=foundOrNotXpath.d.ts.map