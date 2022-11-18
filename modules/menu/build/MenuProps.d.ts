import { AugmentedWord } from "augmented-word-types";
import { Dispatch, SetStateAction } from "react";
export declare type MenuProps = {
    /**defaults to right*/
    menuPosition?: "left" | "right";
    menuType?: string;
    setMenuType?: Dispatch<SetStateAction<string>>;
    menuTypes?: readonly {
        type: string;
        emoji: string;
    }[];
    queryPaths?: string[];
    augmentedWords?: AugmentedWord[];
    isLoading?: boolean;
};
//# sourceMappingURL=MenuProps.d.ts.map