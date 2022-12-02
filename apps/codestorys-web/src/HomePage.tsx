import { MarkdownReaderPageProps } from "markdown-reader-types";
import { SwipeHomepage, SwipeItem } from "swipe-homepage";
export const HomePage = (props: MarkdownReaderPageProps) => {
  const items: SwipeItem[] = props.menu.flat
    .map((item) => {
      // TODO: use useAsset and extrahere a function from there to get the actual URL from the imagePath... pit it on image.
      const swipeItem: SwipeItem = {
        description: item.pageData.shortDescription || "No description",
        title: item.menuTitle || "No title",
        image: item.pageData.imagePath || "",
        href: item.queryPath,
      };

      return swipeItem;
    })
    .concat({
      title: "What's a codestory?",
      image: "",
      description:
        "It's a story about my coding session, where I mention my observations, my ideas, thought processes, choices, implementation details, and results.",
      href: "info",
    });

  console.log({ items });
  return <SwipeHomepage items={items} ctas={[]} />;
};
