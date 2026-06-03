const crypto = require("crypto");

class DNAEngine {
  create(traits) {
    const raw = Object.entries(traits)
      .map(
        ([layer, trait]) =>
          `${layer}:${trait}`
      )
      .join("|");

    return crypto
      .createHash("sha1")
      .update(raw)
      .digest("hex");
  }

  isUnique(
    dna,
    dnaSet
  ) {
    return !dnaSet.has(dna);
  }
}

module.exports = DNAEngine;