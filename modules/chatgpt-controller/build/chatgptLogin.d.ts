import { Page } from "puppeteer";
export type LoginResponse = {
    isSuccessfull: boolean;
    message?: string;
};
export declare const chatgptLogin: (page: Page) => Promise<LoginResponse>;
//# sourceMappingURL=chatgptLogin.d.ts.map