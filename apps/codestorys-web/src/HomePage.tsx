import { MarkdownReaderPageProps } from "markdown-reader-types";
import { SwipeHomepage, SwipeItem } from "swipe-homepage";
import { getSrc } from "asset-view";
import { isDev } from "server-api-url";

export const HomePage = (props: MarkdownReaderPageProps) => {
  const items: SwipeItem[] = props.menu.flat.map((item) => {
    // TODO: use useAsset and extrahere a function from there to get the actual URL from the imagePath... pit it on image.
    const swipeItem: SwipeItem = {
      description: item.pageData.shortDescription || undefined,

      title: item.menuTitle || "No title",
      imagePath: item.pageData.imagePath
        ? getSrc(
            { relativePath: item.pageData.imagePath },
            item.pageData.projectRelativeFilePath,
            !isDev
          ).src
        : undefined,
      href: item.queryPath,
      markdown: item.pageData.imagePath
        ? undefined
        : item.pageData.introDescription || undefined,
      markdownSourcePath: item.pageData.projectRelativeFilePath,
    };

    return swipeItem;
  });

  const allItems = items.concat({
    title: "What's a codestory?",
    markdownSourcePath: __dirname,
    isMarkdownNoLimit: true,
    markdown:
      "A **Code Story** is a story about a coding session, where the developer mentions their observations, ideas, thought processes, choices, implementation details, and results. The reason for a codestory is multifold: It can be a good way for the developer to practice English, but it can also improve team communication a lot. Besides that, it is a great marketing tool if you're building a product that should attract developers. \n\nAll of these mentioned reasons was my motivation to build a platform for it. If you want to create your own codestories blog, check out [typerepo](https://typerepo.com). It is included in there!",
    href: "info",
  });

  return <SwipeHomepage items={allItems} ctas={[]} />;
};
