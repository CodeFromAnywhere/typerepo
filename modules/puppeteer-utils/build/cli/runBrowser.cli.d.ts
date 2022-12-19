import { Browser } from "puppeteer";
export declare const browserLunchOptions: {
    headless: boolean;
    devtools: boolean;
    userDataDir: string;
    dumpio: boolean;
    args: string[];
    executablePath: string;
};
export declare const runBrowser: () => Promise<Browser>;
//# sourceMappingURL=runBrowser.cli.d.ts.map