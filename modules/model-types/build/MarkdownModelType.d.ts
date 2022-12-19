import { Frontmatter } from "matter-types";
import { AnyModelType } from "./any-model";
import { Id } from "./id";
import { CategoryStack } from "./keyValueMarkdown";
import { RelationType } from "./RelationType";
import { TimeTypes } from "./time";
/**
 * Handy model type for storing stuff in a Markdown file.
 *
 * 1 markdown file will represent 1 MarkdownModelType extended instance
 *
 * another option could be to parse the markdown file, but to KISS we are going to just return markdown with the full markdown content
 *
 * TODO: see how this relates to MarkdownFile. Make this very clear!
 */
export interface MarkdownModelType extends AnyModelType, Frontmatter, TimeTypes, RelationType {
    id: Id;
    /**
     * filename (slugified)
     */
    name: string;
    /**
     * filename (slugified)
     */
    slug: string;
    /**
     * the content of the markdown
     */
    markdown: string;
    categoryStack: CategoryStack;
    /**
     * This kind of overwrites frontmatter, but it is needed because there need to be models attached to the markdown model sometimes.
     */
    [modelName: string]: any;
}
//# sourceMappingURL=MarkdownModelType.d.ts.map