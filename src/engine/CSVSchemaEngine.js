class CSVSchemaEngine {
  constructor(config) {
    this.config = config;
  }

  buildRow(result) {
    const schema =
      this.config.csvSchemas?.default || [];

    const row = {};

    schema.forEach(key => {
      if (key === "edition") {
        row.edition = result.edition;
      }

      if (key === "dna") {
        row.dna = result.dna;
      }

      if (key === "rank") {
        row.rank = result.rank;
      }

      if (key === "score") {
        row.score =
          result.rarityScore || 0;
      }
    });

    return row;
  }
}

module.exports =
  CSVSchemaEngine;