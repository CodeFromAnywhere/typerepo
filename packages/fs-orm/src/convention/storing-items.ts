import { ModelLocation, Storing } from "model-types";

export const makeStoringItem = <T extends { [key: string]: any }>(
  item: T
): Storing<T> => {
  const { operationName, projectRelativePath, operationRelativePath, ...rest } =
    item;

  return rest;
};

export const getItemModelLocation = <T extends { [key: string]: any }>(
  item: T
): ModelLocation => {
  const { operationName, projectRelativePath, operationRelativePath, ...rest } =
    item;

  return { operationName, projectRelativePath, operationRelativePath };
};
