export type O = { [key: string]: any };
export const addModelName = <T extends O>(
  item: T,
  modelName: string
): T & { author?: string } => {
  return { ...item, slug: modelName, modelName: "lol" };
};
