import { Div, Form, Input } from "react-with-native";
import { useState } from "react";
import { useRouter } from "react-with-native-router";
import { Tooltip } from "tooltip";

export const SearchBar = (props: {
  initialValue?: string;
  placeholder?: string;
  changePlaceholder?: () => void;
}) => {
  const { initialValue, placeholder, changePlaceholder } = props;
  const [search, setSearch] = useState(initialValue || "");
  const router = useRouter();

  const go = () => {
    if (search.length === 0) return;
    router.push(`/${search}`);
  };

  const goBrave = () => {
    if (search.length === 0) return;
    router.push(`/${search}`);
  };

  return (
    <Div className="rounded-full border border-zinc-700 dark:border-zinc-300 p-2 px-4 text-3xl hover:bg-zinc-200 dark:hover:bg-zinc-800 bg-zinc-100 bg-opacity-75 dark:bg-zinc-600 dark flex flex-row max-w-xl">
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          go();
        }}
      >
        <Input
          placeholder={placeholder || "Go crazy"}
          className="flex px-3 flex-1 bg-transparent focus:outline-none"
          value={search}
          onClick={changePlaceholder}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      <Tooltip
        tooltip={<div className="dark:text-white">Search with Yougle</div>}
      >
        <Div onClick={go} className="cursor-pointer">
          🔎
        </Div>
      </Tooltip>
      <Tooltip
        tooltip={<div className="dark:text-white">Search on brave instead</div>}
      >
        <a
          href={`https://search.brave.com/search?q=${search}`}
          onClick={goBrave}
        >
          🦁
        </a>
      </Tooltip>
    </Div>
  );
};
