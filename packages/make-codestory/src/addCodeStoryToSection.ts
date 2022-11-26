import { findCodespans } from "marked-util";
import { CodespanItemInfo } from "./CodespanItemInfo";
import { notEmpty } from "js-util";
import { writeCodespanDetails } from "./writeCodespanDetails";

export const addCodestoryToSection = (
  sectionContent: string | undefined,
  mappedObject: { [key: string]: CodespanItemInfo },
  isDebug?: boolean
): string | undefined => {
  if (!sectionContent) return;
  // For every piece of content find the codespans
  const codespans = findCodespans(sectionContent);

  const info = codespans
    .map((word) => {
      const details = (
        mappedObject as unknown as {
          [key: string]: CodespanItemInfo;
        }
      )[word];

      if (!details) return;

      // Augment every section with one <details> section for every referred piece of code.
      return writeCodespanDetails(details);
    })
    .filter(notEmpty);
  if (isDebug) {
    console.log({ codespans: codespans.length, infos: info.length });
  }

  return `${sectionContent}${
    info.length > 0 ? `\n\n${info.join("\n\n")}\n` : ""
  }`;
};
