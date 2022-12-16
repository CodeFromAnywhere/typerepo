import { Page } from "puppeteer";
export declare type LoginResponse = {
    isSuccessfull: boolean;
    message?: string;
};
export declare const chatGPTAuth: (page: Page) => Promise<LoginResponse>;
//# sourceMappingURL=chatGPTAuth.d.ts.map