import { Div } from "react-with-native";
import { DbMenu } from "../components/Menu/DbMenu";
import { RWNPage } from "../types";
import useStore from "../store";
import { useRouter } from "react-with-native-router";
import { FancyLoader } from "fancy-loader";
import { LabeledButton } from "labeled-button";
import { logoutFrontend } from "login-form";
import { queries } from "api";

const { useGetDatabaseMenu } = queries;

const Page: RWNPage = () => {
  const [authToken, setAuthToken] = useStore("api.authToken");
  const router = useRouter();
  const menu = useGetDatabaseMenu();

  const button =
    authToken.length === 0
      ? {
          title: "Login",
          emoji: "🔒",
          onClick: () => router.push("/"),
        }
      : {
          title: "Logout",
          emoji: "🚫",
          onClick: async () => {
            await logoutFrontend();
            router.reload();
          },
        };
  return (
    <Div className="pb-4 w-full" scroll>
      <Div className="flex flex-row justify-between">
        {menu.isLoading || menu.isRefetching || menu.isFetching ? (
          <FancyLoader medium />
        ) : (
          <Div />
        )}

        <LabeledButton {...button} />
      </Div>
      <DbMenu {...menu} />
    </Div>
  );
};

Page.options = {
  hideFromMenu: true,
};

export default Page;
