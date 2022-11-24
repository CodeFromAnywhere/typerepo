import { SlugModelType } from "model-types";
export interface MarkdownCallToAction extends SlugModelType {
    url: string;
    title: string;
    description: string;
    /**
     * if true, CTA will only be placed in footer
     */
    onlyFooter: boolean;
    banner?: string;
}
//# sourceMappingURL=MarkdownCallToAction.d.ts.map