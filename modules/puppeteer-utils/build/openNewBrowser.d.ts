import { Browser } from "puppeteer";
export declare const browserLunchOptions: {
    headless: boolean;
    devtools: boolean;
    userDataDir: string;
    dumpio: boolean;
    args: string[];
    executablePath: string;
};
export declare const openNewBrowser: () => Promise<Browser>;
//# sourceMappingURL=openNewBrowser.d.ts.map