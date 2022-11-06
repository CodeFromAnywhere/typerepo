import { RealApiReturnType } from "api-types";
import { NestedPathObject } from "nested-menu";
/**

Peer = {
    name: "22.2.2.2.2.2",
    slug: "22-22-22-22"
}
 */
export declare const getPublicFolderNestedPathObjectFromPeer: (peerSlug: string) => Promise<{
    peerApiResult: RealApiReturnType<"getPublicFolderNestedPathObject">;
} | undefined>;
export declare const getPublicFolderNestedPathObject: () => Promise<NestedPathObject | undefined>;
//# sourceMappingURL=getPublicFolderNestedPathObject.d.ts.map