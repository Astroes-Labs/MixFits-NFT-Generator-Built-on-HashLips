const fs = require("fs");
const path = require("path");

class LayerLoader {
  constructor(layersDir) {
    this.layersDir = layersDir;
  }

  cleanName(filename) {
    return filename
      .replace(/\.[^/.]+$/, "")
      .split("#")[0];
  }

  getWeight(filename) {
    const name = filename.replace(/\.[^/.]+$/, "");

    const parts = name.split("#");

    const weight = Number(parts.pop());

    return Number.isNaN(weight)
      ? 1
      : weight;
  }

  loadLayer(layerName) {
    const dir = path.join(
      this.layersDir,
      layerName
    );

    const files = fs
      .readdirSync(dir)
      .filter(
        (f) =>
          !f.startsWith(".") &&
          !fs.statSync(path.join(dir, f)).isDirectory()
      );

    return {
      name: layerName,

      traits: files.map((file, index) => ({
        id: index,
        name: this.cleanName(file),
        filename: file,
        weight: this.getWeight(file),
        path: path.join(dir, file),
      })),
    };
  }

  loadAll(layers) {
    return layers.map((layer) =>
      this.loadLayer(layer.name)
    );
  }
}

module.exports = LayerLoader;