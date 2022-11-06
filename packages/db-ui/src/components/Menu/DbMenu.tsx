import { ModelInfo } from "code-types";
import { Div, Ul } from "react-with-native";
import { UseQueryResult } from "react-query";
import { UseDbMenuQueryResult } from "../../hooks/useDbMenuQuery";
import { MenuItem } from "./MenuItem";
import { RealApiReturnType } from "api-types";

export const DbMenu = (
  menu: UseQueryResult<RealApiReturnType<"getDatabaseMenu">, unknown>
) => {
  const menuItems = menu.data?.result?.menu.map(
    (modelInfo: ModelInfo, index: number) => {
      const key = `menu${index}`;
      const isSelected = false;
      return (
        <MenuItem
          id={key}
          canExpand={false}
          isSelected={isSelected}
          link={`db?model=${modelInfo.slug}`}
          title={`${modelInfo.name}`}
          key={key}
        />
      );
    }
  );
  return (
    <Div>
      {!menu.data?.isSuccessful ? <Div>{menu.data?.message}</Div> : null}

      <Ul className="w-full">{menuItems}</Ul>
    </Div>
  );
};
