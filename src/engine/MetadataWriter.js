const fs = require("fs");
const path = require("path");

class MetadataWriter {
  constructor(buildDir) {
    this.jsonDir = path.join(buildDir, "json");
    this.all = [];
  }

  write(metadata, edition) {
    const filePath = path.join(
      this.jsonDir,
      `${edition}.json`
    );

    fs.writeFileSync(
      filePath,
      JSON.stringify(metadata, null, 2)
    );

    this.all.push(metadata);
  }

  writeCollection() {
    const filePath = path.join(
      this.jsonDir,
      "_metadata.json"
    );

    fs.writeFileSync(
      filePath,
      JSON.stringify(this.all, null, 2)
    );
  }
}

module.exports = MetadataWriter;