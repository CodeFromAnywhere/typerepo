export type QueryPageProps = {
  query: string | null;
  searchResults: SearchResult[] | null;
  imagePaths: string[];
  timelineItems: {
    comment: string;
    filePath?: string;
    line: number;
  }[];
};

export type SearchResult = {};
