const Context = require("./Context");
const FounderEngine = require("./FounderEngine");
const RuleEngine = require("./RuleEngine");
const TraitResolver = require("./TraitResolver");

class FounderGenerator {
  constructor(config) {
    this.config = config;

    this.founderEngine =
      new FounderEngine(config);

    this.ruleEngine =
      new RuleEngine(config);

    this.traitResolver =
      new TraitResolver(config);
  }

  generate() {
    const context =
      new Context();

    this.founderEngine.inject(
      context
    );

    this.ruleEngine.apply(
      context
    );

    const traits =
      this.traitResolver.resolve(
        context
      );

    return {
      rank: "Founder",
      traits,
      context,
    };
  }
}

module.exports =
  FounderGenerator;