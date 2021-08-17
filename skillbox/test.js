const fs = require("fs");
const crypto = require("crypto");

let fileName = process.argv[2];
console.log('fileName:', fileName);
try {
  let fileContent = fs.readFileSync(fileName);

  try {
    let hashContent = fs.readFileSync(fileName + `.sha256`);
    const hash = crypto.createHash("sha256");
    hash.update(fileContent);
    let fileToHash = hash.digest("hex");
    if (fileToHash != hashContent.toString().trim()) {
      console.log(102);
      process.exit(102);
    }
  } catch (e) {
    console.log(101);
    process.exit(101);
  }
} catch (e) {
  console.log(100);
  process.exit(100);
}
