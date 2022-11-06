/**
 * Update one of your peers
 */
export declare const updatePeer: (slug: string, updatedValues: {
    name?: string;
    description?: string;
    authToken?: string;
    isFavorite?: boolean;
    isMe?: boolean;
}) => Promise<{
    isSuccesful: boolean;
    message: string;
}>;
//# sourceMappingURL=updatePeer.d.ts.map