const { copyReaderStaticAssets } = require("collect-static-assets");
// import your function here to get all pages for your website (including the `FileWebPage`[])
// const { getAllMyPages } = require("my-node-operation");

const fillPublic = async () => {
  // It is undefined now, but you can simply remove that and uncomment the line below.
  // const pages = await getAllMyPages();
  const pages = undefined;
  if (!pages) return;
  return copyReaderStaticAssets(process.cwd(), pages);
};
fillPublic();
