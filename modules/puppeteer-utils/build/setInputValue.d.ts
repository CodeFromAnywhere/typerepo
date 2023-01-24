import { Page } from "puppeteer-core";
declare type SetInputValueType = {
    page: Page;
    selector: string;
    inputValue: string;
};
export interface ElementType extends Element {
    value?: string;
    click?: any;
    focus?: any;
}
export declare const setInputValue: (params: SetInputValueType) => Promise<void>;
export {};
//# sourceMappingURL=setInputValue.d.ts.map