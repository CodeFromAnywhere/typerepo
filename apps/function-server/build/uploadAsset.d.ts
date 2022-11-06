import { Context } from "server/typings/common";
/**
 * This is the format that I receive for a file with server.js, even though they say it's a formidable.file, which it's not...
 */
export declare type ReceivedFile = {
    size: number;
    path: string;
    name: string;
    type: string;
    hash: any;
    lastModifiedDate: Date;
};
export declare const uploadAsset: (ctx: Context) => {
    isSuccessful: boolean;
    message: string;
};
//# sourceMappingURL=uploadAsset.d.ts.map