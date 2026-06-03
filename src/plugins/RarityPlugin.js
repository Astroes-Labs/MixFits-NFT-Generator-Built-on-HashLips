const BasePlugin =
  require("./BasePlugin");

class RarityPlugin extends BasePlugin {
  constructor(config) {
    super(config);

    this.name =
      "RarityPlugin";
  }

  afterGeneration(
    result
  ) {
    let score = 0;

    Object.values(
      result.traits
    ).forEach(() => {
      score++;
    });

    result.rarityScore =
      score;
  }
}

module.exports =
  RarityPlugin;