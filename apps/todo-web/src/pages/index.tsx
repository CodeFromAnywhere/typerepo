import { LoginForm } from "authentication";
import { queries } from "api";
import { FancyLoader } from "fancy-loader";
import { Div } from "react-with-native";
// You can put anything here
export default () => {
  const meQuery = queries.useGetMeWithContext();
  const me = meQuery.data?.result?.device?.currentPersonCalculated;
  return meQuery.isLoading ? (
    <FancyLoader />
  ) : me ? (
    <Div>Hey there, {me.name}! Sup.</Div>
  ) : (
    <LoginForm />
  );
};
