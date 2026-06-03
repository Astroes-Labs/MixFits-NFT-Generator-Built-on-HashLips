class Context {
  constructor() {
    this.edition = 0;
    this.dna = null;

    this.selectedTraits = {};

    this.ignoredLayers = new Set();

    this.metadata = {};

    this.logs = [];

    this.flags = {
      founder: false,
      legendary: false,
      hybrid: false,
    };
  }

  setTrait(layer, trait) {
    this.selectedTraits[layer] = trait;
  }

  getTrait(layer) {
    return this.selectedTraits[layer];
  }

  hasTrait(traitName) {
    return Object.values(this.selectedTraits).includes(traitName);
  }

  ignoreLayer(layerName) {
    this.ignoredLayers.add(layerName);
  }

  isLayerIgnored(layerName) {
    return this.ignoredLayers.has(layerName);
  }

  log(message) {
    this.logs.push(message);
  }
}

module.exports = Context;