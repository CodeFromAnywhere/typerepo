import { readMarkdownFile } from "read-markdown-file";
import { addCodestoryToSection } from "./addCodeStoryToSection";
import { mapMarkdownParseSections } from "./mapMarkdownParseSections";
import {
  markdownParseToMarkdownString,
  markdownParseToMarkdownStringFromContent,
} from "markdown-parse-js";
import { fs, path } from "fs-util";
import { CodespanItemInfo } from "./CodespanItemInfo";

/**
 * no real reason to do this from text to text, let's do path to path here
 */
export const makeCodestory = async (
  absolutePath: string,
  mappedObject: { [key: string]: CodespanItemInfo },
  isDebug?: boolean
): Promise<undefined | string> => {
  //   Use MarkdownParse to split up the markdown into different headers with their content
  const markdownParse = await readMarkdownFile(absolutePath);
  if (!markdownParse) return;

  const newMarkdownParse = mapMarkdownParseSections(markdownParse, (content) =>
    addCodestoryToSection(content, mappedObject, isDebug)
  );

  const newString = markdownParseToMarkdownStringFromContent(newMarkdownParse);

  const parse = path.parse(absolutePath);

  const newPath = path.join(parse.dir, `${parse.name}.codestory${parse.ext}`);

  await fs.writeFile(newPath, newString || "", "utf8");
  return newPath;
};
