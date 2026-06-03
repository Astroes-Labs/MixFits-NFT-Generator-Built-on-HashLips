const fs = require("fs");
const path = require("path");

const {
  createCanvas,
  loadImage,
} = require("canvas");

class CanvasRenderer {
  constructor(config) {
    this.config = config;

    this.canvas =
      createCanvas(
        config.render.width,
        config.render.height
      );

    this.ctx =
      this.canvas.getContext(
        "2d"
      );
  }

  async render(
    selectedLayers
  ) {
    for (const layer of selectedLayers) {
      const image =
        await loadImage(
          layer.path
        );

      this.ctx.drawImage(
        image,
        0,
        0,
        this.config.render.width,
        this.config.render.height
      );
    }

    return this.canvas;
  }

  save(
    outputPath
  ) {
    fs.writeFileSync(
      outputPath,
      this.canvas.toBuffer(
        "image/png"
      )
    );
  }
}

module.exports =
  CanvasRenderer;