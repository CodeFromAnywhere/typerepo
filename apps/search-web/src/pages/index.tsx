import { FunctionForm } from "function-form";
import { AuthenticationLayout } from "layout";
import { Div, P } from "react-with-native";
import Index from "ai-functions-node/db/ts-functions/summarize-meetings.json";
import { useAlert } from "react-with-native-alert";
import { RealApiReturnType } from "api-types";
export default () => {
  const alert = useAlert();
  return (
    <AuthenticationLayout
      nextPage={() => {
        return (
          <Div className="flex flex-1 min-h-[90vh] items-center flex-col justify-around">
            <Div className="text-4xl text-blue-500 drop-shadow cursor-grab">
              Share meeting insights for free
            </Div>
            <FunctionForm
              tsFunction={Index}
              withApiResult={(
                result: RealApiReturnType<"summarizeMeetings">
              ) => {
                alert?.("Yo gelukt hoor", result.result?.message);
              }}
              projectRelativeStorageFilePath="assets"
            />
            <p>
              Clarity AI generates an automated summary to share with everyone
              and to help you remember everything.
            </p>
            <p className="text-center">
              You don't need to upload anything right now, if you just provide
              your contact details, we'll let you know about updates, and you
              might be welcome in our private beta.
            </p>
          </Div>
        );
      }}
      pageProps={{}}
    />
  );
};
