import { Context } from "server/typings/common";
import { Device } from "peer-types";
/**
 * Either finds the device and updates it according to the new request metadata, or creates a new device.
 *
 * Should never return `undefined` if the database functions...
 *
 *
 * TODO: Use cookies (https://serverjs.io/documentation/reply/#cookie-) to login
 *
 * Needed for having `authToken` with GET as well in a safe manner (e.g. for images)

 */
export declare const upsertDevice: (ctx: Context) => Promise<Device | undefined>;
//# sourceMappingURL=upsertDevice.d.ts.map