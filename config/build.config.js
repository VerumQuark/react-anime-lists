const path = require("path");

const entryFile = "index.tsx";

const config = {
  entryPoints: [path.resolve(__dirname, "..", "src", entryFile)],
  outdir: path.resolve(__dirname, "..", "public", "assets"),
  bundle: true,
  minify: process.env.NODE_ENV === "production",
};

module.exports = config;
