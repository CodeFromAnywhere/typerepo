import { PublicJeepType } from "himalayajeep-types";
import { Div, P } from "react-with-native";

export const PublicJeep = (props: { item: PublicJeepType }) => {
  const { item } = props;

  return (
    <Div className="p-2 border border-black m-2">
      <P>{item.name}</P>
      <P>{item.amountSeatsLeft} seats left</P>
      <P>{item.amountLuggageUnitsLeft} luggage spots left</P>

      <P>{item.note}</P>
    </Div>
  );
};
