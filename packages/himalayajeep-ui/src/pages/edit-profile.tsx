import { FunctionForm } from "function-form";
import { P } from "react-with-native";
import { Layout } from "../components/Layout";
import { MainPageProps, RWNPage } from "../types";
import TsFunction from "himalayajeep-functions/db/ts-functions/update-my-profile.json";
import { RealApiReturnType } from "api-types";
import { useAlert } from "react-with-native-alert";
import { FunctionParameter } from "code-types";
import { useStore } from "../store";
import { queries } from "api";

export const EditProfile: RWNPage = (props: MainPageProps) => {
  const alert = useAlert();
  const [loginToken] = useStore("api.loginToken");

  const myJeep = queries.useGetMyJeep(loginToken).data?.result?.myJeep;

  console.log({ myJeep });
  return (
    <Layout pages={props.pages}>
      <P>Edit profile</P>

      {myJeep ? (
        <FunctionForm
          // filterParameters={(parameter: FunctionParameter) =>
          //   parameter.name !== "loginToken"
          // }
          initialValues={[loginToken, myJeep]}
          tsFunction={TsFunction}
          withApiResult={(result: RealApiReturnType<"updateMyProfile">) => {
            const title = result.result?.isSuccesful ? "Successful" : "Error";
            const message =
              result.result?.message ||
              "Something went wrong (no message avaiable)";
            alert?.(title, message);
          }}
          hideResult
        />
      ) : null}
    </Layout>
  );
};

EditProfile.options = {};
