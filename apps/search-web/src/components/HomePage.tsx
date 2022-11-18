import { AppsMenu } from "apps-menu";
import { pickRandomArrayItem } from "js-util";
import { useEffect, useState } from "react";
import { Div } from "react-with-native";
import { QueryPageProps } from "../util/types";
import { SearchBar } from "./SearchBar";
import { Timeline } from "timeline";
import { useStore } from "../util/store";

export const mindspaces = [
  "King OS",
  "search-ui",
  "p2p internet",
  "reader-ui",
  "writer-ui",
  "function-ui",
  "focus",
  "immersion",
];

const quotes = ["A day without coding is a day unlived"];

export const HomePage = (props: QueryPageProps) => {
  const { imagePaths } = props;

  const [authToken, setAuthToken] = useStore("api.authToken");

  useEffect(() => {
    setAuthToken("supersecretpasswordthatnobodycanneverguess");
  }, []);
  console.log({ authToken });
  const hour = new Date(Date.now()).getHours();
  const quote = quotes[hour % quotes.length];
  const imagePath = imagePaths[hour % imagePaths.length];
  const [mindspace, setMindspace] = useState(mindspaces[0]);
  const [mouseDown, setMouseDown] = useState(false);
  const [mouseDownTimeout, setMouseDownTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const yourName = "Wijnand 🤴";
  const yourLocation = "Napoli 🇮🇹";
  const dayPart = "day";

  return (
    <Div className="">
      <Timeline
        items={[
          {
            component: () => {
              return (
                <Div
                  className="flex flex-1 min-h-screen items-center flex-col justify-around"
                  // style={{ background: `url(${imagePath})` }}
                >
                  <img
                    src={imagePath}
                    className="rounded-sm"
                    width={300}
                    height={300}
                  />

                  <Div
                    className="text-3xl cursor-grab"
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
                  <Div className="italic">{quote}</Div>
                  <SearchBar placeholder={mindspace} />
                  <AppsMenu />
                </Div>
              );
            },
          },
          {
            markdown: `import * as React from "react";\n\nexport const test = () => true;`,
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
