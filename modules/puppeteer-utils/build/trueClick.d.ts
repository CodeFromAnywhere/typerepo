import { Page } from "puppeteer-core";
/**
 * Utility function to call the element onclick event directly.
 * Success when clicking is improved over puppeteer page.click('selector')
 *
 */
export declare const trueClick: (props: {
    /** the page element from puppeteer got with browser.pages */
    page: Page;
    /** the css selector to click */
    selector: string;
}) => Promise<{
    success: boolean;
}>;
//# sourceMappingURL=trueClick.d.ts.map