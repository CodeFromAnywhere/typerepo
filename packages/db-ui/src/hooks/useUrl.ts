import { useCustomUrlStore } from "use-url-store";

export const useUrl = <T extends keyof typeof queryStore>(queryKey: T) => {
  /**
   * Here you can define your global storages that can be present in any URL
   *
   * Make sure you use the CustomUrlConfig type
   */
  const queryStore = {
    typeIndexType: useCustomUrlStore<string | undefined>("typeIndexType", {
      type: "string",
    }),

    hasCommentTypes: useCustomUrlStore<string[]>("hasCommentTypes", {
      type: "string",
      isArray: true,
    }),
    interfaceIsDbModel: useCustomUrlStore<boolean>("interfaceIsDbModel", {
      type: "boolean",
    }),
    path: useCustomUrlStore<string | undefined>("path", { type: "string" }),
    name: useCustomUrlStore<string | undefined>("name", { type: "string" }),
    type: useCustomUrlStore<string | undefined>("type", { type: "string" }),

    // for db page
    slug: useCustomUrlStore<string | undefined>("slug", { type: "string" }),
    id: useCustomUrlStore<string | undefined>("id", { type: "string" }),
    model: useCustomUrlStore<string | undefined>("model", { type: "string" }),
  };

  return queryStore[queryKey];
};
