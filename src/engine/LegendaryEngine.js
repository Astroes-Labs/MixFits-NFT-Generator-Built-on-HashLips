class LegendaryEngine {
  constructor(config) {
    this.config = config;
  }

  getLegendary(name) {
    const legendarys =
      this.config.legendaryNFTs ||
      [];

    return legendarys.find(
      (nft) =>
        nft.name === name
    );
  }

  inject(
    context,
    name
  ) {
    const nft =
      this.getLegendary(name);

    if (!nft) {
      throw new Error(
        `Legendary NFT not found: ${name}`
      );
    }

    Object.entries(
      nft.traits
    ).forEach(
      ([layer, trait]) => {
        context.setTrait(
          layer,
          trait
        );
      }
    );

    context.flags.legendary =
      true;

    return context;
  }
}

module.exports =
  LegendaryEngine;