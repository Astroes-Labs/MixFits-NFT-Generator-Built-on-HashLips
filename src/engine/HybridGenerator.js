class HybridGenerator {
  constructor(generator) {
    this.generator =
      generator;
  }

  generate(
    fixedTraits = {}
  ) {
    return this.generator.generate(
      fixedTraits
    );
  }
}

module.exports =
  HybridGenerator;