import { MarkdownParse } from "./MarkdownParse";
import {
  ModelLocation,
  generateId,
  MarkdownModelType,
  Storing,
} from "model-types";
import { kebabCase } from "convert-case";
import { Frontmatter } from "matter-types";

/**
 * Tries to parse a date from a string
 * - implements default behavior of `new Date` with a try catch
 * - returns a unix timestamp (ms since 1970 AD)
 *
 * TODO: put in a better location... date-util?
 */
export const tryParseDate = (dateString: string): number | undefined => {
  try {
    return new Date(dateString).valueOf();
  } catch {}
};
/**
 * First tries to look at the frontmatter value, this is leading because it is what the user sees and the file system of the os could be inconsistent
 *
 * If this frontmatter doesn't exist, the markdownParse is checked for a date. This should be information collected from the file system
 *
 * If that doesn't succeed, sometimes we'll set it to  the current timestamp
 */
export const parseMarkdownModelTimestamp = (
  parameters: Frontmatter,
  markdownParse: MarkdownParse,
  parameterName:
    | "createdAt"
    | "createdFirstAt"
    | "updatedAt"
    | "deletedAt"
    | "openedAt"
): number => {
  const parameterValue = parameters[parameterName];
  const markdownParseValue = markdownParse[parameterName];

  const parsedParameterValue =
    typeof parameterValue === "number" && !isNaN(parameterValue)
      ? parameterValue
      : typeof parameterValue === "string"
      ? tryParseDate(parameterValue)
      : undefined;

  const generatedValue =
    parameterName === "deletedAt" || parameterName === "openedAt"
      ? 0
      : Date.now();

  const parsedTimestamp =
    parsedParameterValue !== undefined
      ? parsedParameterValue
      : markdownParseValue !== undefined
      ? markdownParseValue
      : generatedValue;

  return parsedTimestamp;
};
/**
 * makes a markdownModelType from a markdownParse.
 */
export const markdownParseToMarkdownModelType = (
  markdownParse: MarkdownParse | null
): Storing<MarkdownModelType> | null => {
  if (!markdownParse) return null;

  const { parameters, raw, fileName } = markdownParse;

  const name = parameters.name ? String(parameters.name) : fileName!;
  const slug = kebabCase(name);
  const id = parameters.id ? String(parameters.id) : generateId();
  const createdAt = parseMarkdownModelTimestamp(
    parameters,
    markdownParse,
    "createdAt"
  );
  const createdFirstAt = parseMarkdownModelTimestamp(
    parameters,
    markdownParse,
    "createdFirstAt"
  );
  const updatedAt = parseMarkdownModelTimestamp(
    parameters,
    markdownParse,
    "updatedAt"
  );
  const deletedAt = parseMarkdownModelTimestamp(
    parameters,
    markdownParse,
    "deletedAt"
  );

  const openedAt = parseMarkdownModelTimestamp(
    parameters,
    markdownParse,
    "openedAt"
  );

  const markdownModelType: Storing<MarkdownModelType> = {
    ...parameters,
    id,
    createdAt,
    createdFirstAt,
    deletedAt,
    updatedAt,
    openedAt,
    markdown: raw,
    name,
    slug,
  };

  return markdownModelType;
};
