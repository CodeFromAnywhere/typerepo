`db-recipes` is a library of useful recipes and examples of usage of the database created with `fs-orm`.

If you want to create your own interfaces for general pursose model interaction, this serves as a headless API to build this with your own frontend(s).

The main important functions to build a head with this headless API are:

- `getDbModel` get items in any db-model with the capability to filter, limit, search, and more
- `deleteDbModel`: delete an item in any db model
- `getReferencableModelData` Get referencableModelData for any db model
- `upsertDbModel` create or update one or multiple items in any db model

To interact with these api's you can use the typerepo `api` package. Below are some examples

# Getting a db model

```tsx
import { queries } from "api";

export const YourPage = () => {
  const usersQuery = queries.useGetDbModel("User");
  // your data, the users
  const users = usersQuery.data?.result?.data;

  return usersQuery.isLoading || !users ? (
    "Loading..."
  ) : (
    <Div>{users.map((x) => x.name).join(",")}</Div>
  );
};
```

# Upserting a value, deleting it

```tsx
import { api } from "api";
import { Creation } from "model-types";

export const YourPage = () => {
  return (
    <Div>
      <button
        onClick={async () => {
          const newUser: Creation<User> = {
            // id: "kskdsksksksks" // to update a user, just upsert with the already existing ID to overwrite that one
            name: "John Doe",
            age: 33,
          };

          const apiResult = await api.upsertDbModel("User", newUser);
          // typesafe api result!
        }}
      >
        Add Johnny
      </button>

      <button
        onClick={async () => {
          const apiResult = await api.deleteDbModel("User", "kskdsksksksks");
          // typesafe api result!
        }}
      >
        Get rid of Johnny
      </button>
    </Div>
  );
};
```
