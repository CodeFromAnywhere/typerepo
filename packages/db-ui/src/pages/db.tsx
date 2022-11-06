import { Div } from "react-with-native";
import { RWNPage } from "../types";
import { ModelComponent } from "../components/ModelComponent";
import { useUrl } from "../hooks/useUrl";

const Page: RWNPage = () => {
  const [modelQuery] = useUrl("model");
  const [slug] = useUrl("slug");
  const [id] = useUrl("id");

  return (
    <Div scroll>
      <ModelComponent modelName={modelQuery} highlight={{ slug, id }} />
    </Div>
  );
};

Page.options = {};

export default Page;
