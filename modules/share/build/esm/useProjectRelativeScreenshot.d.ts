/// <reference types="react" />
/**
 * Use https://www.npmjs.com/package/use-react-screenshot to get a blob of any component with the click a button

Upload the blob immediately using `processAsset`, which will result in a file in the file system.
*/
export declare const useProjectRelativeScreenshot: () => {
    getImage: () => void;
    projectRelativeFilePath: string | null;
    ref: import("react").RefObject<HTMLDivElement>;
};
//# sourceMappingURL=useProjectRelativeScreenshot.d.ts.map