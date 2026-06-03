class TraitResolver {
  constructor(config) {
    this.config = config;
  }

  resolve(context) {
    const result = {};

    for (const layer of this.config.layers) {
      if (context.isLayerIgnored(layer.name)) {
        continue;
      }

      result[layer.name] =
        context.getTrait(layer.name);
    }

    return result;
  }
}

module.exports = TraitResolver;