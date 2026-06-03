class ProbabilityEngine {
  constructor(config) {
    this.config = config;
  }

  calculateWeight(
    layer,
    trait,
    context
  ) {
    let weight = trait.weight;

    const modifiers =
      this.config.probabilityModifiers || [];

    modifiers.forEach((rule) => {
      if (
        context.hasTrait(rule.ifTrait)
      ) {
        rule.modify.forEach((m) => {
          if (
            m.layer === layer.name
          ) {
            weight *=
              m.multiplier || 1;
          }
        });
      }
    });

    return weight;
  }

  selectTrait(
    layer,
    context
  ) {
    let totalWeight = 0;

    layer.traits.forEach((trait) => {
      totalWeight +=
        this.calculateWeight(
          layer,
          trait,
          context
        );
    });

    let random =
      Math.random() * totalWeight;

    for (const trait of layer.traits) {
      random -= this.calculateWeight(
        layer,
        trait,
        context
      );

      if (random <= 0) {
        return trait;
      }
    }

    return layer.traits[0];
  }
}

module.exports =
  ProbabilityEngine;