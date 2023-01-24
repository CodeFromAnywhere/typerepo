/**
 * Super useful wrapper around ffmpeg to do just all the stuff I want to do with it
 *
 * TODO: fix fps, not implemented yet
 */
export declare const compressConvert: (absoluteSourceFilePath: string, config?: {
    isStatusLogged?: boolean;
    /**
     * If given, outputted file will be put in this folder
     */
    outputFolderPath?: string;
    /**
     * If given, name will change into this
     */
    name?: string;
    /**
     * frames per second (only for targetformat mp4)
     */
    fps?: number;
    /**
     * width pixels, will preserve same size if not given
     */
    sizeWidthPx?: number;
    /**
     * if not given, will preserve ratio
     */
    aspectRatio?: {
        x: number;
        y: number;
    };
    /**
     * quality number in range: 0-100
     */
    quality?: number;
    targetFormat?: "webp" | "png" | "mp4" | "mp3" | "wav";
    /**
     * If true, and targetformat is wav, will convert to 16bit wav (uses `-ar 16000 -ac 1 -codec:a pcm_s16le` as extra options)
     *
     * Useful for whisper.cpp
     */
    is16bitWav?: boolean;
    /**
     * if true, original won't be thrown away afterwards
     */
    keepOriginal?: boolean;
    isDebug?: boolean;
}) => Promise<string | undefined>;
//# sourceMappingURL=compressConvert.d.ts.map