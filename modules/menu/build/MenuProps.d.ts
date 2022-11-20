/// <reference types="react" />
import { AugmentedWord } from "augmented-word-types";
import { NestedWebPage, WebPage } from "webpage-types";
export declare type MenuProps = {
    /**defaults to right*/
    menuPosition?: "left" | "right";
    /**
     * the old way, let's support it until everything is replaced
     */
    queryPaths?: string[];
    /**
     * All your pages of the whole app should be given here, nested ones!
     *
     * NB: for rendering performance, it's best to provide this directly from the backend
     *
     * Replaces `.queryPaths`
     */
    webPagesNested?: NestedWebPage[];
    webPagesFlat?: WebPage<unknown>[];
    augmentedWords?: AugmentedWord[];
    isLoading?: boolean;
    menuHeader?: () => JSX.Element;
};
//# sourceMappingURL=MenuProps.d.ts.map