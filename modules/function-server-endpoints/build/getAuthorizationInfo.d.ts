import { Authorization } from "auth-types";
import { TsFunction } from "code-types";
import { Device, Group } from "peer-types";
export declare type AuthorizationInfo = {
    /**
     * Whether or not the device is authorized to execute this function
     */
    hasAuthorization: boolean;
    /**
     * All authorizations for this device that may apply to this function.
     *
     * It comprises:
     *
     * - the `publicAuthorization` for this function
     * - the custom authorizations for all `Person`s for the `Device`
     * - the authorizations of all groups found for all `Person`s for the `Device`
     */
    authorizations: Authorization[];
    /**
     * Unique `Group`s for all `Person`s for this `Device`
     */
    groups: Group[];
};
/**
 * returns `AuthorizationInfo` for a device + function
 */
export declare const getAuthorizationInfo: (device: Device, tsFunction: TsFunction) => AuthorizationInfo;
//# sourceMappingURL=getAuthorizationInfo.d.ts.map