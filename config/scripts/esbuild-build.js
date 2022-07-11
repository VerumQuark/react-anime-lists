const esbuild = require("esbuild");
const config = require("../build.config");

esbuild
  .build(config)
  .then(() => {
    console.log("Builded Successfully!");
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
