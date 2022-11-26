import { notEmpty } from "js-util";
import { CodespanItemInfo } from "./CodespanItemInfo";

export const writeCodespanDetails = (
  codespanItemInfo: CodespanItemInfo
): string => {
  // Ensure this section contains not only the description, but also the code of the referred interface/function/variable, and a link to a website where you find the real-time docs.

  const description = codespanItemInfo.description;
  const githubRepo = codespanItemInfo.gitRepoUrl
    ? `[Find more on GitHub](${codespanItemInfo.gitRepoUrl})`
    : undefined;

  const rawText = codespanItemInfo.rawText
    ? `\`\`\`tsx\n${codespanItemInfo.rawText}\n\`\`\``
    : undefined;

  const sections = [description, githubRepo, rawText]
    .filter(notEmpty)
    .join("\n\n\n\n");

  const hasContent = sections.trim().length > 0;

  return `<details>
  
  <summary>${codespanItemInfo.name}</summary>
  
  ${
    hasContent
      ? sections
      : "I didn't write a good description for this yet. Please let me know if you want to know more"
  }
  
  </details>
  `;
};
