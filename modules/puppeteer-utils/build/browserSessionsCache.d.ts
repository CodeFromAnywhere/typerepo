import LRU from "lru-cache";
import { Browser, Page } from "puppeteer";
export declare const browserSessionsCache: LRU<"browser" | "pages" | "idlePages", {
    [key: string]: any;
}>;
export declare const getBrowserSession: () => Browser | undefined;
export declare const setBrowserSession: (browser: Browser) => void;
export declare const getBrowserPage: (pageId: string) => Page | undefined;
export declare const setBrowserPage: (page: Page) => string;
export declare const setIdlePage: ({ pageId, status, }: {
    pageId: string;
    status: boolean;
}) => void;
//# sourceMappingURL=browserSessionsCache.d.ts.map