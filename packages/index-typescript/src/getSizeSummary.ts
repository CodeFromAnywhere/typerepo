import { SizeSummary } from "code-types";
import { byteCount } from "path-util";

/**
 * takes a string and simply returns the amount of characters, the amount of lines and the amount of bytes
 *
 * TODO: this is not the right place for this function
 */
export const getSizeSummary = (string: string): SizeSummary => {
  const characters = string.length;
  const lines = string.split("\n").length;
  const bytes = byteCount(string);
  return {
    characters,
    lines,
    bytes,
    bytesPerCharacter: bytes / characters,
    charactersPerLine: Math.round(characters / lines),
    linesPerFile: lines,
    numberOfFiles: 1,
  };
};
