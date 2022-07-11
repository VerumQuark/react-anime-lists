const esbuild = require("esbuild");
const config = require("../build.config");
import("create-serve").then((serve) => {
  esbuild
    .build({
      ...config,
      watch: {
        onRebuild(err, res) {
          serve.update();
          err ? serve.error("× Failed") : serve.log("✓ Updated");
        },
      },
    })
    .then(() => {
      console.log("Serve Successfully!");
      serve.start({ port: 3000 });
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    });
});
