/// <reference types="react" />
import { SimplifiedSchema } from "code-types";
/**
TODO: Provide all the fetched data with `hasMore` and `fetchAll` to the `SimplifiedJsonForm`
*/
export declare const UpsertForm: (props: {
    /**
     * the schema for the model we want to update/create
     */
    simplifiedSchema: SimplifiedSchema;
    /**
     * an instance, if it's an update form
     */
    instance: any;
    /**
     * NB: this thing will make hooks appear, so it must be constant!
     */
    referencableModelNames?: string[] | undefined;
    /**
     * Where is the file stored that this form is for? needed for rendering images and uploading images in writer-input
     */
    projectRelativeStorageFilePath: string;
}) => JSX.Element;
//# sourceMappingURL=UpsertForm.d.ts.map