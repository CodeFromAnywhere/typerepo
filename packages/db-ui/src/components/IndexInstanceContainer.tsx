import { LabeledButton, LabeledButtonType } from "labeled-button";
import { Button, Div, P, Svg } from "react-with-native";

/** container for any index instance that needs to be rendered in the explore page */
export const IndexInstanceContainer = ({
  title,
  children,
  buttons,
}: {
  title: string;
  children: any;
  buttons: LabeledButtonType[];
}) => {
  return (
    <Div className="p-2 m-2 border rounded-xl border-gray-500">
      <Div className="flex flex-row justify-between items-center">
        <P className="text-3xl">{title}</P>

        <Div className="flex flex-row gap-3">{buttons.map(LabeledButton)}</Div>
      </Div>

      {children}
    </Div>
  );
};
