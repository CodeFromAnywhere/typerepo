/// <reference types="react" />
import type { DbModels } from "sdk-db";
import { WriterViewEnum } from "writer-types";
export declare const FileWriter: (props: {
    markdownModelName?: keyof DbModels | undefined;
    projectRelativeFilePath: string;
    initialWriterView?: WriterViewEnum | undefined;
    disabledMenuItems?: string[] | undefined;
}) => JSX.Element;
//# sourceMappingURL=FileWriter.d.ts.map