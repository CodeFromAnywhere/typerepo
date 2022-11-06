import { P } from "react-with-native";
import { queries, api } from "api";
import { Layout } from "../components/Layout";
import { MainPageProps, RWNPage } from "../types";

const { useGetPublicJeeps } = queries;
export const JeepList: RWNPage = (props: MainPageProps) => {
  const publicJeepsQuery = useGetPublicJeeps();

  return (
    <Layout pages={props.pages}>
      <P>
        list all the jeeps nearby within a certain radius (5km - 25km) sort on
        proximity {JSON.stringify(publicJeepsQuery.data?.result?.publicJeeps)}
      </P>
    </Layout>
  );
};

JeepList.options = {};
