import {
  codestoriesGetStaticPaths,
  codestoriesGetStaticProps,
} from "codestorys-node";
import { MarkdownReaderPageProps } from "markdown-reader-types";
import { ReaderPageContent } from "reader-ui";
import { Layout } from "../Layout";
export default (props: MarkdownReaderPageProps) => {
  return (
    <Layout>
      <ReaderPageContent {...props.content} />
    </Layout>
  );
};

export const getStaticPaths = codestoriesGetStaticPaths;
export const getStaticProps = codestoriesGetStaticProps;
