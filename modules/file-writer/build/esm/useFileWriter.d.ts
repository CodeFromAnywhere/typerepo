/// <reference types="react" />
import type { DbModels } from "sdk-db";
import { WriterViewEnum } from "writer-types";
/**
 * Returns a filewriter for a project relative filePath with a function to save it
 */
export declare const useFileWriter: (props: {
    markdownModelName?: keyof DbModels | undefined;
    projectRelativeFilePath?: string | undefined;
    initialWriterView?: WriterViewEnum | undefined;
    disabledMenuItems?: string[] | undefined;
    hideButtons?: boolean | undefined;
}) => {
    renderFileWriter: () => JSX.Element;
    save: () => Promise<void>;
    isSaved: boolean;
};
//# sourceMappingURL=useFileWriter.d.ts.map