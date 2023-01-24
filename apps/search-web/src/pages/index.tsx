import { FunctionForm } from "function-form";
import { AuthenticationLayout } from "layout";
import { Div, P } from "react-with-native";
import Index from "search-web/db/ts-functions/summarize-meetings.json";
export default () => {
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
              withApiResult={(result) => {
                alert?.("Yo gelukt hoor");
              }}
            />
          </Div>
        );
      }}
      pageProps={{}}
    />
  );
};
