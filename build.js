const fs = require("fs");
const path = require("path");

const root = __dirname;
const out = path.join(root, "public");
const sourceAssets = path.join(root, "assets");
const outputAssets = path.join(out, "assets");

fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(outputAssets, { recursive: true });
fs.copyFileSync(path.join(root, "index.html"), path.join(out, "index.html"));
if (fs.existsSync(sourceAssets)) {
  for (const name of fs.readdirSync(sourceAssets)) {
    if (name.endsWith(".b64")) {
      fs.copyFileSync(path.join(sourceAssets, name), path.join(outputAssets, name));
    }
  }
}
console.log("Built Rag Day static site with bundled image payloads.");
