import { AppsMenu } from "apps-menu";
import { pickRandomArrayItem } from "js-util";
import { useState } from "react";
import { A, Div } from "react-with-native";
import { QueryPageProps } from "../util/types";
import { SearchBar } from "./SearchBar";
import { Timeline } from "timeline";
import { ALink } from "next-a-link";
import { queries } from "api";
import { Header } from "layout";
export const mindspaces = [
  "Make a presentation",
  "Summarize my report",
  "Write an article",
  "Make socialmedia post",
  "Make a business plan",
  "Transcribe my meeting",
  "Annotate my podcast",
];

const quotes = [
  // "A day without coding is a day unlived",
  "Clarity AI is creating a search experience with focus on benefiting humanity, not to sell you stuff",
  "If you want to immerse yourself with AI tools as soon as possible, use Clarity AI",
  "The industrial revolution of AI is at your fingertips",
  "Automate your job and go have fun",
];

export const HomePage = (props: QueryPageProps) => {
  const { imagePaths } = props;

  const publicBundleConfig = queries.useGetPublicBundleConfig().data?.result;
  const hour = new Date(Date.now()).getHours();
  const quote = quotes[hour % quotes.length];
  const imagePath = imagePaths[hour % imagePaths.length];
  const [mindspace, setMindspace] = useState(mindspaces[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseDownTimeout, setMouseDownTimeout] =
    useState<NodeJS.Timeout | null>(null);

  return (
    <Div className="">
      <Timeline
        items={[
          {
            imageUrl: `headers/${imagePath}`,
            component: () => {
              return (
                <Div className="flex flex-1 min-h-screen items-center flex-col justify-around">
                  <Div
                    className="text-3xl text-white drop-shadow cursor-grab"
                    onMouseDown={(e) => {
                      const timeout = setTimeout(() => {
                        setMouseDown(true);
                      }, 200);
                      setMouseDownTimeout(timeout);
                    }}
                    onMouseUp={(e) => {
                      if (mouseDownTimeout) {
                        clearTimeout(mouseDownTimeout);
                      }
                      setMouseDown(false);
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      setMindspace(pickRandomArrayItem(mindspaces));
                    }}
                  >
                    Clarity AI
                  </Div>

                  <Div className="italic text-white">{quote}</Div>
                  <SearchBar
                    changePlaceholder={() =>
                      setMindspace(pickRandomArrayItem(mindspaces))
                    }
                    placeholder={mindspace}
                  />
                  <Div className="max-w-xl">
                    <AppsMenu />
                  </Div>
                </Div>
              );
            },
          },
          // {
          //   markdown: `I see dead people`,
          // },
          ...props.timelineItems?.map((x) => {
            return {
              markdown: x.comment,
              projectRelativeFilePath: x.filePath,
              line: x.line,
            };
          }),
        ]}
      />
    </Div>
  );
};
