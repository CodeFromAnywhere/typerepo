import { Peer } from "peer-types";
/**
 * Get peers with person relation and calculated values, sorted (first favorite, then online, then offline)
 */
export declare const getPeers: () => Promise<{
    success: boolean;
    /**
     * Peers including the person attached to it (if available)
     */
    peers: Peer[];
}>;
//# sourceMappingURL=getPeers.d.ts.map