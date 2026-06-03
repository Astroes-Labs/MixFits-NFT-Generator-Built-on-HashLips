class MetadataEngine {
  constructor(config) {
    this.config = config;
  }

  build({
    edition,
    dna,
    traits,
    rank = "Common",
  }) {
    return {
      name:
        `${this.config.collection.namePrefix} #${edition}`,

      description:
        this.config.collection
          .description,

      image:
        `${this.config.collection.baseUri}/${edition}.png`,

      dna,

      edition,

      rank,

      attributes:
        Object.entries(
          traits
        ).map(
          ([traitType, value]) => ({
            trait_type:
              traitType,
            value,
          })
        ),
    };
  }
}

module.exports =
  MetadataEngine;