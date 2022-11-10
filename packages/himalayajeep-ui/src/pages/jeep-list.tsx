import { queries, api } from "api";
import { Layout } from "../components/Layout";
import { MainPageProps, RWNPage } from "../types";
import { PublicJeep } from "../components/PublicJeep";

const { useGetPublicJeeps } = queries;
export const JeepList: RWNPage = (props: MainPageProps) => {
  const publicJeepsQuery = useGetPublicJeeps();

  return (
    <Layout pages={props.pages}>
      {publicJeepsQuery.data?.result?.publicJeeps.map((item) => {
        return <PublicJeep key={item.id} item={item} />;
      })}
    </Layout>
  );
};

JeepList.options = {};
