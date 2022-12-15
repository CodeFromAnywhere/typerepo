import * as React from "react";
import { ContextualPrompt, ContextualContent } from "ai-types";
/**
 * Provides the props needed to render a context-menu that allows you to add prompts and other things into your database. All actions require api access.
 */
export declare const useSelectionPromptsMenu: (selectionPrompts: ContextualPrompt[], contextualContent: ContextualContent) => {
    renderContextMenu: () => JSX.Element | null;
    openContextMenuProps: {
        ref: React.RefObject<HTMLDivElement>;
        onContextMenu: (event: React.MouseEvent<Element, MouseEvent>) => void;
        onTouchStart: (event: React.TouchEvent<Element>) => void;
        onTouchEnd: () => void;
        onClick: (mouseEvent: React.MouseEvent<Element, MouseEvent>) => void;
        style: React.CSSProperties;
    };
    onClose: () => void;
    isOpen: boolean;
};
//# sourceMappingURL=useSelectionPromptsMenu.d.ts.map