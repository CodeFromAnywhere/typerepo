import { P } from "react-with-native";
import { Layout } from "../components/Layout";
import { MainPageProps, RWNPage } from "../types";

export const JeepView: RWNPage = (props: MainPageProps) => {
  return (
    <Layout pages={props.pages}>
      <P>Jeep view (viewing a single jeep with driver contact info, etc)</P>
    </Layout>
  );
};

JeepView.options = {};
