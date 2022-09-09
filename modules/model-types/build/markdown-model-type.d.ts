import { Frontmatter } from "matter-types";
import { AnyModelType } from "./any-model";
import { Storing } from "./generics";
import { Id } from "./id";
import { RelationType } from "./RelationType";
import { TimeTypes } from "./time";
/**
 * Handy model type for storing stuff in a Markdown file.
 *
 * 1 markdown file will represent 1 MarkdownModelType extended instance
 *
 * another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content
 */
export interface MarkdownModelType extends AnyModelType, Frontmatter, TimeTypes, RelationType {
    id: Id;
    /**
     * human readable version of filename
     */
    name: string;
    /**
     * slugified filename
     */
    slug: string;
    /**
     * the content of the markdown
     */
    markdown: string;
}
export declare const markdownModelTypeToMarkdownString: (markdownModelType: Storing<MarkdownModelType>) => string;
//# sourceMappingURL=markdown-model-type.d.ts.map