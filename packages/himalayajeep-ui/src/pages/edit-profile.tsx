import { P } from "react-with-native";
import { Layout } from "../components/Layout";
import { MainPageProps, RWNPage } from "../types";

export const EditProfile: RWNPage = (props: MainPageProps) => {
  return (
    <Layout pages={props.pages}>
      <P>Edit profile</P>
    </Layout>
  );
};

EditProfile.options = {};
