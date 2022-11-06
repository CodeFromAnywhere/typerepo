import { Div, P } from "react-with-native";

export const MenuItem = (props: { onClick: () => void; children: unknown }) => {
  const { children, onClick } = props;

  return (
    <Div
      className="cursor-pointer hover:bg-gray-200 py-4 pl-2"
      textClassName="hover:font-bold"
      onClick={onClick}
    >
      <P>{children}</P>
    </Div>
  );
};
