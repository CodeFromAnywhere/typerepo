/// <reference types="react" />
import { ContextualPrompt } from "ai-types";
export declare type SelectionItem = {
    onClick: () => void;
    title: string;
    isEnabled?: boolean;
};
export declare const SelectionPrompts: (props: {
    selectionContextualPrompts?: ContextualPrompt[] | undefined;
    contentString: string;
    projectRelativeFilePath?: string | undefined;
}) => JSX.Element;
//# sourceMappingURL=SelectionPrompts.d.ts.map