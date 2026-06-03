const Context = require("./Context");

const LegendaryEngine =
  require("./LegendaryEngine");

const RuleEngine =
  require("./RuleEngine");

const TraitResolver =
  require("./TraitResolver");

class LegendaryGenerator {
  constructor(config) {
    this.config = config;

    this.legendaryEngine =
      new LegendaryEngine(config);

    this.ruleEngine =
      new RuleEngine(config);

    this.traitResolver =
      new TraitResolver(config);
  }

  generate(name) {
    const context =
      new Context();

    this.legendaryEngine.inject(
      context,
      name
    );

    this.ruleEngine.apply(
      context
    );

    const traits =
      this.traitResolver.resolve(
        context
      );

    return {
      rank: "Legendary",
      traits,
      context,
    };
  }
}

module.exports =
  LegendaryGenerator;