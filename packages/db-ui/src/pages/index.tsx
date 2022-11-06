import { Div } from "react-with-native";
import { RWNPage } from "../types";
import useStore from "../store";

const Page: RWNPage = () => {
  const [authToken] = useStore("api.authToken");

  return authToken ? (
    <Div className="flex h-full flex-1 justify-center items-center">
      Please select a model on the right
    </Div>
  ) : (
    <Div className="pb-4 px-4 w-full flex h-full flex-col justify-center items-center" />
  );
};

Page.options = {
  hideFromMenu: true,
};

export default Page;
