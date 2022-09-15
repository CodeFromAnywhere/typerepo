import { SlugModelType } from "common-types";
import { OperationConfig } from "./OperationConfig";
import { OperationIndex } from "./OperationIndex";
/**
 * Puts all operation configs and operation indexes together, in a database.
 *
 * I think that anything about an operation is either configurable or indexable, right? Therefore, this interface holds no properties, it just extends :)
 *
 * It would be very nice if this could be taken from the source directly through a special function, but not sure if the added value for this is big enough to create a new convention for this
 */
export interface TsOperation extends SlugModelType, OperationConfig, OperationIndex {
}
//# sourceMappingURL=TsOperation.d.ts.map