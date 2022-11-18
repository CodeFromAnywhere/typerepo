/// <reference types="react" />
import { SchemaProperty } from "schema-util";
export declare const getDataParameterNames: (properties: SchemaProperty[]) => string[];
/**
 
In the table headings, all xxxSlug, xxxId etc should be called xxx.

In the table values, all slugs and ids should show the name of the instance of the refered model.

It has to be possible to navigate to an id or slug using `#[id] or #[slug]` in the URL, just add div ids to all rows

 */
export declare const ModelComponent: ({ modelName, highlight, }: {
    modelName?: string | undefined;
    highlight: {
        slug?: string;
        id?: string;
    };
}) => JSX.Element;
//# sourceMappingURL=ModelComponent.d.ts.map