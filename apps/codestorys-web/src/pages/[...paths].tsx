import {
  codestoriesGetStaticPaths,
  codestoriesGetStaticProps,
} from "codestorys-node";
import { MarkdownReaderPage } from "reader-ui";
export default MarkdownReaderPage;

export const getStaticPaths = codestoriesGetStaticPaths;
export const getStaticProps = codestoriesGetStaticProps;
