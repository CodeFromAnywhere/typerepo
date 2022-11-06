import { api } from "api";
const { getDbModel } = api;
import { useInfiniteQuery } from "react-query";
import { DbModelEnum } from "sdk-db";

type PageParam = {
  start: number;
  limit: number;
};
const defaultLimit = 30;
export const useGetDbModelQuery = <KDbModel extends DbModelEnum>(
  modelName: KDbModel | undefined
) => {
  const dependencies = ["getDbModel", modelName];

  const hook = useInfiniteQuery(
    dependencies,
    (context) => {
      const params = context.pageParam as PageParam | undefined;

      // @ts-ignore
      const result = getDbModel(modelName!, {
        start: params?.start || 0,
        limit: params?.limit || defaultLimit,
      });
      return result;
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        const limit = lastPage.result?.limit || defaultLimit;
        const oldStart = lastPage.result?.start || 0;
        const pageParam: PageParam = {
          start: oldStart + limit,
          limit,
        };

        return pageParam;
      },
    }
  );

  return hook;
};
