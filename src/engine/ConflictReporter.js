const fs = require("fs");
const path = require("path");

class ConflictReporter {
  constructor(config) {
    this.config = config;
  }

  analyze() {
    const conflicts = [];

    const requires =
      this.config.rules.requires || [];

    const excludes =
      this.config.rules.excludes || [];

    requires.forEach((requireRule) => {
      excludes.forEach((excludeRule) => {
        if (
          requireRule.trait !==
          excludeRule.trait
        ) {
          return;
        }

        requireRule.requires.forEach(
          (required) => {
            excludeRule.excludes.forEach(
              (excluded) => {
                if (
                  required.layer ===
                    excluded.layer &&
                  required.trait ===
                    excluded.trait
                ) {
                  conflicts.push({
                    type:
                      "REQUIRE_EXCLUDE_CONFLICT",
                    trait:
                      requireRule.trait,
                    target:
                      required.trait,
                  });
                }
              }
            );
          }
        );
      });
    });

    return conflicts;
  }

  export() {
    const report =
      this.analyze();

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
        "conflicts.json"
      ),
      JSON.stringify(
        report,
        null,
        2
      )
    );

    return report;
  }
}

module.exports =
  ConflictReporter;