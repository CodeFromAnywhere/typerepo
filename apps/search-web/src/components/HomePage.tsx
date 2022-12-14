import { AppsMenu } from "apps-menu";
import { pickRandomArrayItem } from "js-util";
import { useState } from "react";
import { Div } from "react-with-native";
import { QueryPageProps } from "../util/types";
import { SearchBar } from "./SearchBar";
import { Timeline } from "timeline";
import { Share } from "share";
import { useContextMenu } from "context-menu";
import { useStore } from "../util/store";
export const mindspaces = [
  "Typerepo",
  "search-ui",
  "p2p internet",
  "reader-ui",
  "function-ui",
  "focus",
  "immersion",
];

const quotes = ["A day without coding is a day unlived"];

export const HomePage = (props: QueryPageProps) => {
  const { imagePaths } = props;

  const hour = new Date(Date.now()).getHours();
  const quote = quotes[hour % quotes.length];
  const imagePath = imagePaths[hour % imagePaths.length];
  const [mindspace, setMindspace] = useState(mindspaces[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseDownTimeout, setMouseDownTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const yourName = "King 🤴";
  const yourLocation = "Napoli 🇮🇹";
  const dayPart = "day";

  return (
    <Div className="">
      <Timeline
        items={[
          {
            imageUrl: `headers/${imagePath}`,
            component: () => {
              return (
                <Div
                  className="flex flex-1 min-h-screen items-center flex-col justify-around"
                  // style={{ background: `url(${imagePath})` }}
                >
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
                    Good{" "}
                    {mouseDown ? `${dayPart} in ${yourLocation}` : mindspace},{" "}
                    {yourName}
                  </Div>

                  <Div className="italic text-white">{quote}</Div>
                  <SearchBar placeholder={mindspace} />
                  <Div className="max-w-xl">
                    <AppsMenu />
                  </Div>
                </Div>
              );
            },
          },
          {
            markdown: `I see dead people`,
          },
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
