import { Page } from "puppeteer-core";
export declare type FacebookLoginPropsType = {
    email: string;
    password: string;
    page: Page;
};
export declare const facebookLogin: (props: FacebookLoginPropsType) => Promise<void>;
//# sourceMappingURL=facebookLogin.d.ts.map