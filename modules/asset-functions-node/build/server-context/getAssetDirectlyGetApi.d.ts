import { Context } from "server/typings/common";
/**
Useful for getting assets directly, for example for the `SelectMedia` component for `project`-media

Requires more access rights

Run server without too much queue execution

1) Launch telebit on server startup

2) Expose GET ASSET DIRECTLY, publicly, temporarily (but require a passcode in that case). Passcode should match one of the values in [filepath].public

3) convert the absolute path into a HTTPS URL that can be used as imageUrl (this should be a function where you can specify to use a general purpose passcode, or a OTP, or a unique passcode)

4) have a function to remove the passcode.
*/
export declare const getAssetDirectlyGetApi: (serverContext: Context) => {
    isSuccessful: boolean;
    message: string;
} | void;
//# sourceMappingURL=getAssetDirectlyGetApi.d.ts.map