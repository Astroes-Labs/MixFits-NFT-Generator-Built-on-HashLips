const path = require("path");

const Context =
  require("./Context");

const RuleEngine =
  require("./RuleEngine");

const TraitResolver =
  require("./TraitResolver");

const LayerLoader =
  require("./LayerLoader");

const DNAEngine =
  require("./DNAEngine");

const ProbabilityEngine =
  require("./ProbabilityEngine");

const ValidationEngine =
  require("./ValidationEngine");

class Generator {
  constructor(config) {
    this.config = config;

    this.ruleEngine =
      new RuleEngine(config);

    this.traitResolver =
      new TraitResolver(config);

    this.validationEngine =
      new ValidationEngine(config);

    this.probabilityEngine =
      new ProbabilityEngine(config);

    this.dnaEngine =
      new DNAEngine();

    this.layerLoader =
      new LayerLoader(
        path.join(
          process.cwd(),
          "layers"
        )
      );

    this.dnaSet =
      new Set();
  }

  generate() {
    const context =
      new Context();

    const layers =
      this.layerLoader.loadAll(
        this.config.layers
      );

    layers.forEach((layer) => {
      const trait =
        this.probabilityEngine.selectTrait(
          layer,
          context
        );

      context.setTrait(
        layer.name,
        trait.name
      );
    });

    this.ruleEngine.apply(
      context
    );

    const errors =
      this.validationEngine.validateContext(
        context
      );

    if (errors.length) {
      throw new Error(
        errors.join("\n")
      );
    }

    const traits =
      this.traitResolver.resolve(
        context
      );

    const dna =
      this.dnaEngine.create(
        traits
      );

    if (
      !this.dnaEngine.isUnique(
        dna,
        this.dnaSet
      )
    ) {
      throw new Error(
        "Duplicate DNA"
      );
    }

    this.dnaSet.add(dna);

    return {
      dna,
      traits,
      context,
    };
  }
}

module.exports =
  Generator;