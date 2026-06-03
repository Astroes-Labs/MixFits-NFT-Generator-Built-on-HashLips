const fs = require("fs");
const path = require("path");

class ImageExporter {
  constructor(buildDir) {
    this.imageDir = path.join(buildDir, "images");

    console.log("Image output folder:", this.imageDir);
  }

  save(canvas, edition) {
    const buffer = canvas.toBuffer("image/png");

    const filePath = path.join(
      this.imageDir,
      `${edition}.png`
    );

    fs.writeFileSync(filePath, buffer);

    console.log("Saved image:", filePath);

    return filePath;
  }
}

module.exports = ImageExporter;