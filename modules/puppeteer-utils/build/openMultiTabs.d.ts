import { Browser } from "puppeteer";
export type OpenMultiTabProps = {
    noOfTabs: number;
    tabUrl: string;
    browser: Browser;
};
export declare const openMultiTabs: (props: OpenMultiTabProps) => Promise<void>;
//# sourceMappingURL=openMultiTabs.d.ts.map