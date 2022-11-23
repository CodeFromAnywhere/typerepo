import {
  markdownReaderGetStaticPaths,
  markdownReaderGetStaticProps,
} from "markdown-reader-functions";
import { MarkdownReaderPage } from "reader-ui";
export default MarkdownReaderPage;

export const getStaticPaths = markdownReaderGetStaticPaths;
export const getStaticProps = markdownReaderGetStaticProps;
