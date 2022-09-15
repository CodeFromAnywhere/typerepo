#!/usr/bin/env node
/**
 * finds matches of a searchMessage in an array, looking at the individual words.
 *
 * if your search matches some words in a sentence, it's a match, as long as all your words you entered are also a word in the sentence
 *
 * NB: this could be augmented with things like synonyms and translation
 */
export declare const findSentenceMatches: <T>(searchMessage: string, array: T[], getSentence?: ((x: T) => string) | undefined) => T[];
//# sourceMappingURL=general.d.ts.map