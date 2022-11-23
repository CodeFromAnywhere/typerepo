import { CategoryStack, Id, MarkdownModelType, Price, Slug } from "model-types";
import { TodoOffer } from "./TodoOffer";
import { TodoPriority } from "./TodoPriority";
/**
 * Any markdown file in the todo folder should become this model
 */
export interface TodoFile extends MarkdownModelType {
    priority?: TodoPriority;
    /**
     * overwrites visibility for freelancer
     *
     * by default a todo is visible, unless specifically hiding it
     *
     * by default a todo with `isDraft: true` is hidden, unless specifically making it visible
     */
    isHiddenForFreelancer?: boolean;
    /**
     * make todo claimable by a freelancer
     */
    isClaimable?: boolean;
    /**
     * Price to be paid, that, if offered by a freelancer, will be accepted.
     */
    doNowPrice?: Price;
    /**
     * admin can specify when this needs to be finished
     */
    deadlineAt?: number;
    /**
     * Source needed from these operations, can be made accessible after accepting the offer
     */
    codeRequired_operationSlugs: Id[];
    todoOffersCalculated?: TodoOffer[];
    owner_personId?: Slug;
    /**
     * special categories that augment todo-ui functionality:
     *
     * - `ideas` can have altered visibility, according to config
     * - `done` can have altered visibility, according to config
     * - `backlog` can have altered visibility, according to config
     *
     * Not sure if this should really be fixed, but a convention is always good.
     */
    categoryStackCalculated: CategoryStack;
}
//# sourceMappingURL=TodoFile.d.ts.map