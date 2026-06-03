class RuleEngine {
  constructor(config) {
    this.config = config;
  }

  apply(context) {
    this.applyRequires(context);
    this.applyExcludes(context);
    this.applyReplacements(context);
    this.applyInheritance(context);
    this.applyLayerIgnore(context);
    this.applyMultiLayerIgnore(context);

    return context;
  }

  applyRequires(context) {
    const rules = this.config.rules.requires;

    for (const rule of rules) {
      if (!context.hasTrait(rule.trait)) continue;

      for (const requirement of rule.requires) {
        context.setTrait(
          requirement.layer,
          requirement.trait
        );
      }
    }
  }

  applyExcludes(context) {
    const rules = this.config.rules.excludes;

    for (const rule of rules) {
      if (!context.hasTrait(rule.trait)) continue;

      for (const exclusion of rule.excludes) {
        if (
          context.getTrait(exclusion.layer) ===
          exclusion.trait
        ) {
          throw new Error(
            `${rule.trait} excludes ${exclusion.trait}`
          );
        }
      }
    }
  }

  applyReplacements(context) {
    const rules = this.config.rules.replacements;

    for (const rule of rules) {
      const current =
        context.getTrait(rule.when.layer);

      if (current !== rule.when.trait) continue;

      context.setTrait(
        rule.replace.layer,
        rule.replace.trait
      );
    }
  }

  applyInheritance(context) {
    const rules = this.config.rules.inheritance;

    for (const rule of rules) {
      const current =
        context.getTrait(rule.parent.layer);

      if (current !== rule.parent.trait) continue;

      for (const inherit of rule.inherit) {
        context.setTrait(
          inherit.layer,
          inherit.trait
        );
      }
    }
  }

  applyLayerIgnore(context) {
    const rules = this.config.rules.layerIgnore;

    for (const rule of rules) {
      if (!context.hasTrait(rule.ifTrait)) continue;

      context.ignoreLayer(rule.ignoreLayer);
    }
  }

  applyMultiLayerIgnore(context) {
    const rules =
      this.config.rules.multiLayerIgnore;

    for (const rule of rules) {
      if (!context.hasTrait(rule.ifTrait)) continue;

      for (const layer of rule.ignore) {
        context.ignoreLayer(layer);
      }
    }
  }
}

module.exports = RuleEngine;