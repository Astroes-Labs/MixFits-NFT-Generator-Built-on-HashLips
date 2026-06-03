const Generator = require("./Generator");

class SingleNFTGenerator {
  constructor(config) {
    this.config = config;
    this.generator = new Generator(config);
  }

  generate(traits = {}) {
    return this.generator.generate(traits);
  }
}

module.exports = SingleNFTGenerator;