import { Page } from "puppeteer-core";
export type GmailLoginPropsType = {
    email: string;
    password: string;
    page: Page;
};
export declare const gmailLogin: (props: GmailLoginPropsType) => Promise<void>;
//# sourceMappingURL=gmailLogin.d.ts.map