import { Page } from "puppeteer";
import { CaptchaInfo } from "puppeteer-extra-plugin-recaptcha/dist/types";
export declare const isCaptchaExist: (page: Page) => Promise<{
    captchas: CaptchaInfo[];
}>;
//# sourceMappingURL=isCaptchaExist.d.ts.map