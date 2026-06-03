const fs = require("fs");
const path = require("path");

class AnalyticsEngine {
  constructor() {
    this.stats = {
      total: 0,
      traits: {},
      dna: {},
    };
  }

  record(result) {
    this.stats.total++;

    Object.entries(
      result.traits
    ).forEach(
      ([layer, trait]) => {
        if (
          !this.stats.traits[
            layer
          ]
        ) {
          this.stats.traits[
            layer
          ] = {};
        }

        if (
          !this.stats.traits[
            layer
          ][trait]
        ) {
          this.stats.traits[
            layer
          ][trait] = 0;
        }

        this.stats.traits[
          layer
        ][trait]++;
      }
    );

    this.stats.dna[
      result.dna
    ] = true;
  }

  export() {
    const reportDir =
      path.join(
        process.cwd(),
        "build",
        "reports"
      );

    fs.mkdirSync(reportDir, {
      recursive: true,
    });

    fs.writeFileSync(
      path.join(
        reportDir,
        "analytics.json"
      ),
      JSON.stringify(
        this.stats,
        null,
        2
      )
    );
  }
}

module.exports =
  AnalyticsEngine;