import {
  OperationConfig,
  OperationIndex,
  PackageJson,
  TsConfig,
} from "code-types";
import {
  KeyValueMarkdownModelType,
  //   CategoryModelType,
  SlugModelType,
  // DefaultModelType,
  CsvModelType,
  MarkdownModelType,
  DefaultModelType,
  generateId,
  Creation,
} from "model-types";
import { createDb, DbConfig } from "fs-orm";

export interface SlugTestModel extends SlugModelType {
  id: string;
  name: string;
  slug: string;
  description: string;
  markdown: string;
  special: boolean;
}

export interface DefaultTestModel extends DefaultModelType {
  id: string;
  name: string;
  description: string;
  markdown: string;
  special: boolean;
}

export interface CsvTestModel extends CsvModelType {
  name: string;
  description: string;
  age: number;
}

export interface MarkdownTestModel extends MarkdownModelType {
  stringA: string;
  stringB: string;
  stringC: string;
  age: number;
  yes: boolean;
  canBeNull: string | null;
  canBeUndefined?: string;
}

export interface KvmdTestModel extends KeyValueMarkdownModelType {}

export type TestModels = {
  CsvTestModel: CsvTestModel;
  KeyValueMarkdownTestModel: KvmdTestModel;
  MarkdownTestModel: MarkdownTestModel;
  JsonMultipleTestModel: SlugTestModel;
  DefaultTestModel: DefaultTestModel;
  // real models
  OperationConfig: OperationConfig;
  TsConfig: TsConfig;
  PackageJson: PackageJson;
  OperationIndex: OperationIndex;
};
/*
export type Person = { name: string; age: number, firstName?:string };

const isSuccesful: boolean = true; //boolean
const text: string = "hello world";
const amount: number = 88;
const numbers: string[] = ["1", "2", "3", "4", "5"];
const person: Person = { age: 29, name: "Wijnand" };

const students: Person[] = [
  { name: "Henrik", age: 1 + 1, firstName:"jlskjfklsjf" },
  { name: "Suyog", age: 1 + 1 },
];
*/

/*

kebab-case : file names, endpoint, paths, urls
camelCase : variable names and functions
PascalCase : types, interfaces, classes and components

*/

const dbConfig: DbConfig<TestModels> = {
  modelQueryConfig: {
    CsvTestModel: { dbStorageMethod: "csv" },

    JsonMultipleTestModel: { dbStorageMethod: "jsonMultiple" },
    DefaultTestModel: { dbStorageMethod: "jsonSingle" },

    MarkdownTestModel: { dbStorageMethod: "markdown" },
    KeyValueMarkdownTestModel: { dbStorageMethod: "keyValueMarkdown" },

    // real models
    OperationIndex: { dbStorageMethod: "jsonSingle" },
    OperationConfig: {
      dbStorageMethod: "markdown",
      operationRelativePath: "OPERATION.md",
    },
    TsConfig: {
      dbStorageMethod: "jsonSingle",
      operationRelativePath: "tsconfig.json",
    },
    PackageJson: {
      dbStorageMethod: "jsonSingle",
      operationRelativePath: "package.json",
    },
  },
};

/**
 * a db is created with models from all different db storage methods
 */
export const testDb = createDb<TestModels>(dbConfig);

const getRanomAge = () => Math.round(Math.random() * 99);

export const generateCsvInstance = (): Creation<CsvTestModel> => {
  return {
    // Needed for deletion later
    id: generateId(),
    age: getRanomAge(),
    name: randomName(),
    description: "hello world",
  };
};

export const generateSlugTestModel = (): Creation<SlugTestModel> => {
  return {
    // Needed for deletion later
    id: generateId(),
    name: randomName(),
    language: "en",
    markdown: "wut?",
    special: true,
    description: "test",
  };
};

export const randomName = () => `name${Math.round(Math.random() * 888888)}`;
export const generateJsonSingleInstance = (): Creation<DefaultTestModel> => {
  return {
    // Needed for deletion later
    id: generateId(),
    description: "ehey",
    special: true,
    markdown:
      " jaja dit is gewoon markdown \n\n mooi he \n\n # header \n\n test",
    name: randomName(),
  };
};

export const generateKvmdInstance = (): Creation<KvmdTestModel> => {
  const id = generateId();
  return {
    slug: id,
    // Needed for deletion later
    id: id,
    isHeaderCalculated: true,
    categoryStackCalculated: [],
    comment: "comment",
    value: "value",
    name: id,
  };
};

export const generateMarkdownInstance = (): Creation<MarkdownTestModel> => {
  return {
    // Needed for deletion later
    id: generateId(),

    age: 19,
    canBeNull: null,
    markdown:
      " jaja dit is gewoon markdown \n\n mooi he \n\n # header \n\n test",
    name: randomName(),
    stringA: "A",
    stringB: "B",
    stringC: "C",
    yes: true,
    canBeUndefined: undefined,
  };
};
