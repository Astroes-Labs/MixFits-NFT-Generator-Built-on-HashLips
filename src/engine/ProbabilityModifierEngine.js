class ProbabilityModifierEngine {
  constructor(config) {
    this.config = config;
  }

  apply(layer, trait, context) {
    let weight = trait.weight;

    const rules =
      this.config.probabilityModifiers ||
      [];

    rules.forEach(rule => {
      if (
        context.hasTrait(rule.ifTrait)
      ) {
        rule.modify.forEach(m => {
          if (
            m.layer === layer.name
          ) {
            weight *= m.multiplier;
          }
        });
      }
    });

    return weight;
  }
}

module.exports =
  ProbabilityModifierEngine;