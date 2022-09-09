export type { ParsedPath } from "node:path";
export declare const path: {
    parse: (path: string) => import("path").ParsedPath;
    basename: (path: string, ext?: string | undefined) => string;
    delimiter: string;
    dirname: (path: string) => string;
    extname: (path: string) => string;
    format: (pathObject: import("path").FormatInputPathObject) => string;
    isAbsolute: (path: string) => boolean;
    join: (...paths: string[]) => string;
    normalize: (path: string) => string;
    resolve: (...paths: string[]) => string;
    sep: string;
};
//# sourceMappingURL=path.d.ts.map