import { DbStorageMethod } from "code-types";
import { lowerCaseArray } from "convert-case";
import { Frontmatter } from "matter-types";
import { getFrontmatterDbStorageMethod } from "./getFrontmatterDbStorageMethod";
import { getSpecialExtensionDbStorageMethod } from "./getSpecialExtensionDbStorageMethod";

/**
 * Gets db storage method for indexation
 *
 * 1) Frontmatter overrules everything
 * 2) Special extensions are looked at
 * 3)
 */
export const getDbStorageMethod = ({
  typeName,
  frontmatter,
  extensions,
}: {
  typeName: string;
  frontmatter: Frontmatter;
  extensions?: string[];
}): DbStorageMethod | undefined => {
  const frontmatterResult = getFrontmatterDbStorageMethod(frontmatter);

  // NB: can also become null if isDbModel is specifically set to false!
  if (frontmatterResult !== undefined) return frontmatterResult || undefined;

  const specialExtensionStorageMethod =
    getSpecialExtensionDbStorageMethod(extensions);

  if (specialExtensionStorageMethod) {
    return specialExtensionStorageMethod;
  }

  const typeWords = lowerCaseArray(typeName);
  const isModelTypeName =
    typeWords.length >= 2 && ["model", "db"].includes(typeWords.pop()!);

  const dbStorageMethodFromModelTypeName = isModelTypeName
    ? "jsonMultiple"
    : null;

  if (dbStorageMethodFromModelTypeName) {
    return dbStorageMethodFromModelTypeName;
  }

  return;
};
