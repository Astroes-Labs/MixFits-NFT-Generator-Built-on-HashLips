const Generator =
  require("./Generator");

class CollectionBuilder {
  constructor(config) {
    this.config = config;

    this.generator =
      new Generator(config);
  }

  build() {
    const results = [];

    const total =
      this.config.collection
        .editionSize;

    for (
      let edition = 1;
      edition <= total;
      edition++
    ) {
      const result =
        this.generator.generate();

      result.edition =
        edition;

      results.push(result);

      console.log(
        `Generated #${edition}`
      );
    }

    return results;
  }
}

module.exports =
  CollectionBuilder;