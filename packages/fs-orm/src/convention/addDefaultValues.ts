import { Creation, generateId, AugmentedAnyModelType } from "model-types";
import { kebabCase } from "convert-case";

/**
 * Adds timestamps, id, and a slug IF these things are not already present
 *
 * NB: for kvmd storage, id will be set to a kebab-case of the name
 *
 * NB: does not add the ModelLocation parameters
 */
export const addDefaultValues = (
  bareItem: Creation<AugmentedAnyModelType>,
  isKvmdStorage?: boolean
): AugmentedAnyModelType => {
  const now = Date.now();

  const defaultValues = {
    createdAt: now,
    updatedAt: now,
    deletedAt: 0,
    createdFirstAt: now,
  };

  const slug: string | undefined =
    bareItem.name && bareItem.slug === undefined
      ? kebabCase(bareItem.name)
      : bareItem.slug;

  const id =
    bareItem.id === undefined
      ? isKvmdStorage
        ? kebabCase(bareItem.name)
        : generateId()
      : bareItem.id;

  const item = {
    ...defaultValues,
    ...bareItem,
    slug,
    id,
  } as AugmentedAnyModelType;

  return item;
};
