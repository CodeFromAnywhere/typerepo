import { Div, P } from "react-with-native";

export const Layout = (props: { children: React.ReactNode }) => {
  return (
    <Div>
      <Div className="h-32 bg-yellow-700 flex flex-col items-center justify-center">
        <P className="text-white text-3xl">Codestories</P>
        <P className="text-white">The adventures of a brave coder</P>
      </Div>
      {props.children}
    </Div>
  );
};
