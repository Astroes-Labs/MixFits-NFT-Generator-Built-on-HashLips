const {
  createCanvas,
} = require("canvas");

class Renderer {
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
    layers
  ) {
    throw new Error(
      "Render implementation coming in next phase"
    );
  }
}

module.exports =
  Renderer;