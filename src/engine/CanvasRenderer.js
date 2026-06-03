const { createCanvas, loadImage } = require("canvas");

class CanvasRenderer {
  constructor(config) {
    this.config = config;

    this.canvas = createCanvas(
      config.render.width,
      config.render.height
    );

    this.ctx = this.canvas.getContext("2d");
  }

  clear() {
    this.ctx.clearRect(
      0,
      0,
      this.config.render.width,
      this.config.render.height
    );
  }

  async render(traits) {
    this.clear();

    for (const layer of Object.entries(traits)) {
      const traitName = layer[1];

      if (!traitName) continue;

      const imagePath = traitName.path;

      const img = await loadImage(imagePath);

      this.ctx.drawImage(
        img,
        0,
        0,
        this.config.render.width,
        this.config.render.height
      );
    }

    return this.canvas;
    console.log("Rendering traits:", traits);
  }
}

module.exports = CanvasRenderer;