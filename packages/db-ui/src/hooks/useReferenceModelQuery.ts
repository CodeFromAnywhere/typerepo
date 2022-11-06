import { api } from "api";
import { useQuery } from "react-query";
import { DbModels } from "sdk-db";

export const useReferencableModelDataQuery = (dbModelName: keyof DbModels) => {
  return useQuery(["getReferencableModelData", dbModelName], async () => {
    const { result } = await api.getReferencableModelData(dbModelName);
    return result;
  });
};
