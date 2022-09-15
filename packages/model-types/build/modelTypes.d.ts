import { AnyModelType } from "./any-model";
import { Slug } from "./common";
import { Language } from "./language";
import { RelationType } from "./RelationType";
import { TimeTypes } from "./time";
/**
 * Use this model by default
 */
export interface DefaultModelType extends AnyModelType, TimeTypes, RelationType {
}
/**
 * Use this model for things you want to store in CSV format
 *
 * TODO: add support for numbers, booleans, null, undefined
 */
export interface CsvModelType extends DefaultModelType {
    [key: string]: string | number | boolean | null | undefined;
}
/**
 * use this model for things with a name that have an unique slug that can be used to identify the model
 */
export interface SlugModelType extends DefaultModelType, SlugModelProperties {
}
export declare type SlugModelProperties = {
    /**
     * kebab-case of the name, should be unique
     */
    slug: Slug;
    name: string;
    /**
     * @default en
     */
    language: Language;
};
//# sourceMappingURL=modelTypes.d.ts.map