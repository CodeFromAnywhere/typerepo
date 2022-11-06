import { Div, P } from "react-with-native";
import { Layout } from "../components/Layout";
import { RWNPage } from "../types";
import { useAlert } from "react-with-native-alert";
import { FunctionForm } from "function-form";
import DriverSignupFunction from "himalayajeep-functions/db/ts-functions/driver-signup.json";
import { RealApiReturnType } from "api-types";

// jeep driver needs to sign up
export const JeepSignupPage: RWNPage = (props) => {
  const alert = useAlert();

  return (
    <Layout pages={props.pages}>
      <Div>
        <P>Hello, please sign up here (drivers only)</P>

        <FunctionForm
          tsFunction={DriverSignupFunction}
          withApiResult={(result: RealApiReturnType<"driverSignup">) => {
            const title = result.result?.isSuccesful ? "Signed up" : "Error";
            const message = result.result?.message || "Something went wrong";

            alert?.(title, message);
            result.result?.message;

            console.log({ result });
          }}
          hideResult
        />
      </Div>
    </Layout>
  );
};

JeepSignupPage.options = { title: "Driver Signup" };
