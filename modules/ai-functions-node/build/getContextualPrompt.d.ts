import { ContextualPrompt } from "ai-types";
import { Creation } from "model-types";
import { FileType } from "filename-conventions";
export declare const getContextualPrompt: (contextualPromptSlug: string | undefined, customPromptContent: string | undefined, saveNewPromptWithName: string | null, contextType: FileType | undefined) => Promise<(Creation<ContextualPrompt> & {
    slug: string;
}) | undefined>;
//# sourceMappingURL=getContextualPrompt.d.ts.map