import { Div, Form, Input } from "react-with-native";
import { useState } from "react";
import { useRouter } from "react-with-native-router";

export const SearchBar = (props: {
  initialValue?: string;
  placeholder?: string;
}) => {
  const { initialValue, placeholder } = props;
  const [search, setSearch] = useState(initialValue || "");
  const router = useRouter();

  const go = () => {
    if (search.length === 0) return;
    router.push(`/${search}`);
  };
  return (
    <Div className="rounded-full border border-zinc-700 dark:border-zinc-300 p-2 px-4 text-3xl hover:bg-zinc-200 dark:hover:bg-zinc-800 bg-zinc-100 dark:bg-zinc-600 dark flex flex-row max-w-xl mx-4">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          go();
        }}
      >
        <Input
          placeholder={placeholder || "Go crazy"}
          className="flex flex-1 bg-transparent focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <Div
        className={search.length === 0 ? "cursor-default" : "cursor-progress"}
        onMouseEnter={go}
      >
        🔎
      </Div>
    </Div>
  );
};
