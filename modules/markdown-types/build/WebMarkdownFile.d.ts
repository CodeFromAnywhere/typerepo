import { MarkdownModelType } from "model-types";
import { CreatorMarkdownProperties } from "./CreatorMarkdownProperties";
import { ExtendedMarkdownProperties } from "./ExtendedMarkdownProperties";
import { PostableProperties } from "./PostableProperties";
import { WebMarkdownProperties } from "./WebMarkdownProperties";
/**
 * Every markdown file meant for the web, should have these optional parameters that can be declared as its frontmatter
 *
 * NB: This is not part of MarkdownModelType, because MarkdownModelType is very barebones general purpose, not only for the web!
 */
export interface WebMarkdownFile extends MarkdownModelType, ExtendedMarkdownProperties, CreatorMarkdownProperties, WebMarkdownProperties, PostableProperties {
}
export interface CreatorMarkdownFile extends MarkdownModelType, CreatorMarkdownProperties {
}
//# sourceMappingURL=WebMarkdownFile.d.ts.map