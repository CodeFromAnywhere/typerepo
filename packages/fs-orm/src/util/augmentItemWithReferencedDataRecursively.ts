import { getReferenceParameterInfo } from "schema-util";
import { AugmentedAnyModelType } from "model-types";
import { makeArray } from "js-util";
//relative
import { Include, IncludeDataObject } from "../types";

export const augmentItemWithReferencedDataRecursively = (
  item: AugmentedAnyModelType,

  includeArray: Include[],
  /**
   * Final includeData object to take items from
   */
  includeData: IncludeDataObject
): AugmentedAnyModelType => {
  // basecase
  if (includeArray.length === 0) {
    return item;
  }

  const newItem = includeArray.reduce((itemNow, include) => {
    if (!include.referenceKey) return itemNow;

    const parameterInfo = getReferenceParameterInfo(include.referenceKey);

    if (!parameterInfo.interfaceName) return itemNow;

    const referencedItems = includeData[parameterInfo.interfaceName];

    if (!referencedItems) return itemNow;
    if (!parameterInfo.dataParameterName) return itemNow;
    if (!parameterInfo.keyInModel) return itemNow;

    const referenceItems = referencedItems.filter((x) => {
      if (!parameterInfo.keyInModel) return false;
      const itemReference: string | string[] | undefined =
        itemNow[parameterInfo.parameterName];
      const referenceItemReference = (x as any)[parameterInfo.keyInModel];

      const isMatchingReference = parameterInfo.isReferenceSingleParameter
        ? itemReference === referenceItemReference
        : parameterInfo.isReferenceMultipleParameter
        ? itemReference?.includes?.(referenceItemReference) || false
        : false;

      return isMatchingReference;
    });

    const augmentedReferenceData:
      | AugmentedAnyModelType
      | AugmentedAnyModelType[]
      | undefined = parameterInfo.isReferenceSingleParameter
      ? augmentItemWithReferencedDataRecursively(
          referenceItems[0],
          makeArray(include.include),
          includeData
        )
      : parameterInfo.isReferenceMultipleParameter
      ? referenceItems.map((i) =>
          augmentItemWithReferencedDataRecursively(
            i,
            makeArray(include.include),
            includeData
          )
        )
      : undefined;

    const newItemNow: AugmentedAnyModelType = {
      ...itemNow,
      [parameterInfo.dataParameterName]: augmentedReferenceData,
    };

    return newItemNow;
  }, item);

  return newItem;
};
