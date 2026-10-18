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
    const from = path.join(sourceAssets, name);
    const to = path.join(outputAssets, name);
    if (name.endsWith(".b64")) {
      const targetName = name.slice(0, -4);
      fs.writeFileSync(path.join(outputAssets, targetName), Buffer.from(fs.readFileSync(from, "utf8").trim(), "base64"));
    } else {
      fs.copyFileSync(from, to);
    }
  }
}

console.log("Built Rag Day static site with bundled resort photos.");
