import LRU from "lru-cache";
import { Browser, Page } from "puppeteer";
export declare const browserSessionsCache: LRU<unknown, unknown>;
export declare const getBrowserSession: () => Browser | undefined;
export declare const setBrowserSession: (browser: Browser) => void;
export declare const getBrowserPage: (pageId: string) => Page | undefined;
export declare const setBrowserPage: (page: Page) => string;
//# sourceMappingURL=browserSessionsCache.d.ts.map