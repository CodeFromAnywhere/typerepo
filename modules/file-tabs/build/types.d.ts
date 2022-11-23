import { MouseEventHandler } from "react";
export declare type PagesObjectShape = {
    [key: string]: any;
};
export declare type ClickIcon = {
    emoji?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    visible?: boolean;
};
export declare type OpenPage<TPagesEnum> = {
    /**
     * unique id
     */
    id: string;
    /**
     * the page
     */
    page: TPagesEnum;
    /**
     * the query needed for loading this page
     *
     * coming from router.query
     */
    query: {
        [key: string]: string | string[] | undefined;
    };
    /**
     * if true, this page is harder to close.
     */
    pinned?: boolean;
    /**
     * if true, it's just open because you are on that link. It's not in the store
     */
    temporary?: boolean;
    /**
     * if true, the page has unsaved changes
     */
    isUnsaved?: boolean;
    /**
     * if page is content, there should be cursor information
     */
    cursorPosition?: number;
    cursorWord?: string;
    cursorSentence?: string;
    startPosition?: number;
    endPosition?: number;
    exactSelection?: string;
    /**
     * last time you had the pages open
     */
    lastOpenedAt: number;
};
//# sourceMappingURL=types.d.ts.map