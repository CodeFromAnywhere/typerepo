import { AppOperation } from "peer-types";
/**
 * Gets all app operations from all packageJsons from the database. Adds `isOnline` to it on the fly by checking if it can connect to the port or not
 */
export declare const getAllAppOperations: () => Promise<AppOperation[]>;
//# sourceMappingURL=getAllAppOperations.d.ts.map