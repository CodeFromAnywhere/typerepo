import { FunctionForm } from "function-form";
import { P } from "react-with-native";
import DriverLoginFunction from "himalayajeep-functions/db/ts-functions/driver-login.json";
import { Layout } from "../components/Layout";
import { MainPageProps, RWNPage } from "../types";
import { RealApiReturnType } from "api-types";
import { useAlert } from "react-with-native-alert";
import { useStore } from "../store";

/**
 *
 */
export const JeepLogin: RWNPage = (props: MainPageProps) => {
  const alert = useAlert();
  const [loginToken, setLoginToken] = useStore("api.loginToken");
  return (
    <Layout pages={props.pages}>
      <P>Login page</P>

      <FunctionForm
        tsFunction={DriverLoginFunction}
        withApiResult={(result: RealApiReturnType<"driverLogin">) => {
          const title = result.result?.isSuccessful ? "Logged in" : "Error";
          const message =
            result.result?.message ||
            "Something went wrong (no message avaiable)";

          alert?.(title, message);
          console.log({ result });

          if (result.result?.loginToken) {
            setLoginToken(result.result?.loginToken);
          }
        }}
        hideResult
      />
    </Layout>
  );
};

JeepLogin.options = {};
