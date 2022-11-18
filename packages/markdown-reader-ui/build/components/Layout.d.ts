import { MenuType } from "nested-menu";
import { AugmentedWord, MarkdownReaderPage, MarkdownReaderPageProps } from "markdown-reader-types";
import { MappedObject } from "js-util";
/**
 * This is shit....
 */
export declare const Search: (props: {
    results: AugmentedWord[];
}) => JSX.Element;
export declare const Header: (props: {
    publicBundleConfig?: MarkdownReaderPageProps["publicBundleConfig"];
}) => JSX.Element;
export declare const Layout: (props: {
    publicBundleConfig: MarkdownReaderPageProps["publicBundleConfig"];
    pages: MarkdownReaderPage[];
    children: any;
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
}) => JSX.Element;
/**

TODO: This is a good start, but it can be generalised more.

 */
export declare const MenuWrapper: (props: {
    menu: MenuType | undefined;
    children: React.ReactNode;
    augmentedWordObject: MappedObject<AugmentedWord> | undefined;
}) => JSX.Element;
//# sourceMappingURL=Layout.d.ts.map