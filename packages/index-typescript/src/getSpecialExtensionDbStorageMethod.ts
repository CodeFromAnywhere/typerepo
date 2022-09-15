import { DbStorageMethod } from "code-types";

/** returns undefined if there is not a special extension. if there is, it returns the dbStorageMethod */
export const getSpecialExtensionDbStorageMethod = (extensions?: string[]) => {
  if (!extensions) return;

  /**
   * put any models here that should, if they are used as extension, have a db model generated
   */
  const specialExtensions = {
    TsIndexModelType: "jsonMultiple",
    OperationIndexModelType: "jsonMultiple",
    DefaultModelType: "jsonMultiple",
    SlugModelType: "jsonMultiple",
    CsvModelType: "csv",
    KeyValueMarkdownModelType: "keyValueMarkdown",
    CategoryModelType: "jsonMultiple",
    MarkdownModelType: "markdown",
  };

  const specialExtensionKeys = Object.keys(specialExtensions);

  const specialExtension = extensions.find((x) =>
    specialExtensionKeys.includes(x)
  ) as undefined | keyof typeof specialExtensions;

  if (!specialExtension) return;

  const dbStorageMethod = specialExtensions[
    specialExtension
  ] as DbStorageMethod;
  return dbStorageMethod;
};
