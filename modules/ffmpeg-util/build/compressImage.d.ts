export declare const compressImage: (absoluteSourceImagePath: string, config?: {
    sizeWidthPx?: number;
    aspectRatio?: {
        x: number;
        y: number;
    };
    quality?: number;
    targetFormat?: "webp" | "png";
    keepOriginal?: boolean;
}) => Promise<string | undefined>;
//# sourceMappingURL=compressImage.d.ts.map