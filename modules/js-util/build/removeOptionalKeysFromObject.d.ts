import { O } from "./NestedPartial";
import { OptionalKeys } from "./types";
export declare const removeOptionalKeysFromObject: <TObject extends O>(object: TObject, keys: Exclude<keyof TObject, Exclude<import("./types").KeysOfType<TObject, Exclude<TObject[keyof TObject], undefined>>, undefined>>[]) => TObject;
//# sourceMappingURL=removeOptionalKeysFromObject.d.ts.map