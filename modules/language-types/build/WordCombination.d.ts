import { Slug, SlugModelType } from "model-types";
import { WordInfo } from "./WordMatrix";
/**
 * Best way to combine words if you don't want to specify all language specific info for a new word. You can refer to words from the WordMatrix instead!
 */
export interface WordCombination extends SlugModelType, WordInfo {
    /**
     * Should be autofilled based on the combination of the base words
     */
    name: string;
    /**
     * Should be auto filled in based on the combination of the base words
     */
    slug: string;
    /**
     * Which words is this a combination of?
     */
    wordMatrixSlugs?: Slug[];
}
//# sourceMappingURL=WordCombination.d.ts.map