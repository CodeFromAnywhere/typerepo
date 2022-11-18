/// <reference types="react" />
import { AugmentedAnyModelType } from "model-types";
import { Person } from "peer-types";
import { MediaPost, Postable } from "social-media-types";
import { OpenableFile } from "vscode-open";
/**
 * Any data that could map to the presentational type
 */
export declare type TimelineData = {
    postable?: Postable;
    mediaPost?: MediaPost;
    openableFile?: OpenableFile;
    person?: Person;
    anyModel?: AugmentedAnyModelType;
};
/**
 * Presentational type
 */
export declare type TimelineItemType = {
    audioUrl?: string;
    videoUrl?: string;
    imageUrl?: string;
    markdown?: string;
    component?: () => JSX.Element;
    linkUrl?: string;
};
