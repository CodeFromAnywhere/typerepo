import { pagesObject, UpsertProps } from "db-ui";
import { GetStaticProps } from "next";
import { getDbModelNames } from "db-recipes";

export default pagesObject.upsert;

export const getStaticProps: GetStaticProps = async () => {
  const dbModelNames = await getDbModelNames();
  const upsertProps: UpsertProps = { dbModelNames: dbModelNames || null };
  return { props: upsertProps };
};
