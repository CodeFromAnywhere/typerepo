const { copyReaderStaticAssets } = require("collect-static-assets");
const { codestoriesGetPages } = require("codestorys-node");

const fillPublic = async () => {
  // NB: change this to the function you get your markdown pages (FileWebPage[]) from
  const pages = await codestoriesGetPages();
  if (!pages) return;
  return copyReaderStaticAssets(process.cwd(), pages);
};
fillPublic();
