import { FileType } from "make-file-type";
export declare type OnChangeDetected = ({ files, fullPath, relativePath, rootPath, }: {
    fullPath: string;
    relativePath: string;
    rootPath: string;
    files: FileType[];
}) => void;
/**
 * file that is pending
 */
export declare type PendingItem = {
    time: number;
    /**
     * TODO: rename to `srcRelativeFilePath`
     */
    filename: string;
};
//# sourceMappingURL=types.d.ts.map