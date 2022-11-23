import { WebMarkdownFile } from "code-types";
import { PublicBundleConfig } from "bundle-types";
import { MappedObject } from "js-util";
import { AugmentedWord } from "augmented-word-types";
import { NestedWebPage, ReaderWebPage } from "webpage-types";
export declare type MarkdownReaderPageProps = {
    publicBundleConfig?: PublicBundleConfig | null;
    projectRelativeMarkdownPath?: string | null;
    augmentedWordObject?: MappedObject<AugmentedWord>;
    menu: {
        flat: ReaderWebPage[];
        nested: NestedWebPage[];
    };
    markdownFile?: WebMarkdownFile | null;
    /**
     * Title of the page
     */
    title?: string | null;
    /**
     * If path is not a markdownfile, will return all children here
     */
    children?: {
        title: string;
        firstParagraph: string | null;
        folderName: string;
        projectRelativeMarkdownPath: string | null;
    }[];
    previousQueryPath?: string | null;
    nextQueryPath?: string | null;
    description?: string | null;
};
//# sourceMappingURL=MarkdownReaderPageProps.d.ts.map