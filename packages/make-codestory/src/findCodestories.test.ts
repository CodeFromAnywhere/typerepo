import { findCodestories } from "./findCodestories";

const test = async () => {
  const x = await findCodestories();
  console.log({ result: x });
};

test();
