/// <reference types="react" />
import type { DbModels } from "sdk-db";
import { MappedObject } from "js-util";
import { AugmentedWord } from "augmented-word-types";
export declare const FileWriter: (props: {
    markdownModelName?: keyof DbModels | undefined;
    projectRelativeFilePath: string;
    augmentedWordObject?: MappedObject<AugmentedWord> | undefined;
}) => JSX.Element;
