const fs = require("fs");
const path = require("path");

const SRC_DIR = path.join(__dirname, "src");

function removeComments(content) {
  return content
    .replace(/\/\*[\s\S]*?\*\//g, "") // block comments
    .replace(/(^|\s)\/\/.*$/gm, ""); // line comments
}

function processFile(filePath) {
  if (filePath.endsWith(".js") || filePath.endsWith(".jsx")) {
    const content = fs.readFileSync(filePath, "utf-8");
    const cleaned = removeComments(content);
    fs.writeFileSync(filePath, cleaned, "utf-8");
    console.log(`✅ Cleaned: ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      walk(fullPath);
    } else {
      processFile(fullPath);
    }
  }
}

walk(SRC_DIR);
console.log("✅ All comments stripped from .js/.jsx files in src/");
