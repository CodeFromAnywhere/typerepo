import { queries } from "api";
import { humanCase } from "convert-case";
import { Div } from "react-with-native";
import { SelectInput, ToggleInput } from "react-with-native-form-inputs";
import { Item } from "react-with-native-select";
import { TodoPagesConfig, todoPagesConfigRecencys } from "todo-types";
import { useStore } from "./store";

export const TodoMenuHeader = () => {
  const persons =
    queries.useGetPublicPersons().data?.result?.map((x) => {
      return { value: x.id, label: humanCase(x.name) };
    }) || [];

  const [todoPagesConfig, setTodoPagesConfig] = useStore("todoPagesConfig");

  const recencyOptions = [{ label: "⏰", value: "" }].concat(
    todoPagesConfigRecencys.map((x) => {
      return { value: x, label: humanCase(x) };
    })
  );
  const recencyValue: Item<string> =
    recencyOptions.find((x) => x.value === todoPagesConfig.recency) ||
    recencyOptions[0];

  const categoryStackOptions = [{ label: "🧩", value: "" }].concat(
    ["ideas", "backlog", "done", "codestories", "postables"].map((x) => {
      return { value: x, label: humanCase(x) };
    })
  );

  const defaultSelectClass =
    "text-xs border-gray-300 border rounded-md focus:outline-none bg-transparent h-9";

  const categoryStackValue: Item<string> =
    categoryStackOptions.find(
      (x) => x.value === todoPagesConfig.categoryStack?.[0]
    ) || categoryStackOptions[0];

  const personOptions = [{ label: "🙋‍♂️", value: "" }].concat(persons);

  const personValue: Item<string> =
    personOptions.find((x) => x.value === todoPagesConfig.personId) ||
    personOptions[0];

  return (
    <Div className="flex flex-row flex-wrap gap gap-1 mb-2">
      {/* Person filter: assigned to a person of your choice (owner_personSlug) */}
      <SelectInput
        className={`${defaultSelectClass} ${
          todoPagesConfig.personId ? "" : "w-10"
        }`}
        fieldName="personId"
        config={{}}
        uniqueFieldId="personId"
        extra={{ options: personOptions }}
        value={personValue}
        onChange={(v) =>
          setTodoPagesConfig({
            ...todoPagesConfig,
            personId:
              v?.value === "" || v?.value === undefined ? undefined : v?.value,
          })
        }
      />

      {/* are in a certain categoryStack: SelectInput with preset (done, ideas, backlog, codestories, postables, etc*/}
      <SelectInput
        fieldName="categoryStack"
        config={{}}
        className={`${defaultSelectClass} ${
          todoPagesConfig.categoryStack ? "" : "w-10"
        }`}
        uniqueFieldId="categoryStack"
        extra={{ options: categoryStackOptions }}
        value={categoryStackValue}
        onChange={(v) =>
          setTodoPagesConfig({
            ...todoPagesConfig,
            categoryStack:
              v?.value === "" || v?.value === undefined
                ? undefined
                : [v?.value],
          })
        }
      />
      {/* has a certain recency of updated time:SelectInput */}
      <SelectInput
        fieldName="recency"
        config={{}}
        className={`${defaultSelectClass} ${
          todoPagesConfig.recency ? "" : "w-10"
        }`}
        uniqueFieldId="recency"
        extra={{ options: recencyOptions }}
        value={recencyValue}
        onChange={(v) =>
          setTodoPagesConfig({
            ...todoPagesConfig,
            recency:
              v?.value === ""
                ? undefined
                : (v?.value as TodoPagesConfig["recency"]),
          })
        }
      />
      {/* has high priority:ToggleInput */}
      <ToggleInput
        config={{}}
        fieldName="highPrio"
        uniqueFieldId="highPrio"
        extra={{ label: todoPagesConfig.priority ? "High priority" : "❗️" }}
        className={`${defaultSelectClass} px-1 ${
          todoPagesConfig.priority ? "" : ""
        }`}
        onChange={(value) => {
          setTodoPagesConfig({
            ...todoPagesConfig,
            priority: value === true ? "high" : undefined,
          });
        }}
        value={todoPagesConfig.priority === "high" ? true : false}
      />

      {todoPagesConfig.categoryStack ||
      todoPagesConfig.personId ||
      todoPagesConfig.priority ||
      todoPagesConfig.recency ? (
        <Div
          onClick={() => setTodoPagesConfig({})}
          className={`${defaultSelectClass} px-1 flex items-center justify-center py-1 cursor-pointer w-20`}
        >
          🧹 Clear
        </Div>
      ) : null}
    </Div>
  );
};
