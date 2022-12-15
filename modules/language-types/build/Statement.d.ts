import { DefaultModelType, Id, Slug } from "model-types";
import { WordMatrix } from "./WordMatrix";
/**
---
dbStorageMethod: jsonSingle
---

Statement model:

Motivation:

- create a database of the belief system of one or multiple entities (Person, Algorithm, species, etc.)
- use this belief system for fact-checking, differentiative checking, value checking, and more.

 */
export interface Statement extends DefaultModelType {
    /**
     * your statement: definition, fact, question, quote
     */
    description: string;
    /**
     * source of the statement, if the statement was a non-original one found online somewhere
     */
    url?: string;
    author_personId?: Id;
    /**
     * Number [0-1] representing agreement of admin
     *
     * - 1 meaning 100% agreement
     * - 0 means 0% agreement or complete disagreement
     */
    agreement?: number;
    /**
     * Number [0,1] representing agreement of readers
     *
     * 1 reader can vote once
     */
    readersAgreement?: number;
    readersAgreementVotedCount?: number;
    /**
     * defaults to 0.5 meaning average importancy
     * this could be either a calculated or set property.
     * could it be calculated on your value hierarchy?
     * not sure if this is practical (yet) but still a very interesting property to have, or somehow calculate.
     */
    importancy?: number;
    /**
     * by default, importancy is calculated by one or multiple systems. As the admin you can change it
     *
     * TODO: once this is all working, possibly add reader-importancy and readersImportancyVotedCount
     */
    isImportancySet?: boolean;
    /**
     * A statement can connect to one or more words. This can be calculated automatically I guess, by looking at all WordMatrix words and WordCombinations that are inside of the statement. However, we may not want to put all of them in there.
     *
     * For now, let's skip this, since it's probably better to calculate it on the fly, not index it.
     */
    wordMatrixSlugs?: Slug[];
    wordMatrixs?: WordMatrix[];
}
//# sourceMappingURL=Statement.d.ts.map