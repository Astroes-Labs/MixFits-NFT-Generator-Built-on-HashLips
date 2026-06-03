const AnalyticsEngine =
  require("./AnalyticsEngine");

const MetadataEngine =
  require("./MetadataEngine");

const ConflictReporter =
  require("./ConflictReporter");

const PluginManager =
  require("./PluginManager");

class GenerationPipeline {
  constructor(config) {
    this.config = config;

    this.analytics =
      new AnalyticsEngine();

    this.metadataEngine =
      new MetadataEngine(config);

    this.conflicts =
      new ConflictReporter(
        config
      );

    this.plugins =
      new PluginManager(
        config
      );
  }

  initialize() {
    this.plugins.load();

    const conflicts =
      this.conflicts.export();

    if (
      conflicts.length
    ) {
      console.warn(
        "Rule conflicts found:",
        conflicts.length
      );
    }
  }

  process(
    result,
    edition
  ) {
    this.plugins.executeHook(
      "beforeGeneration",
      result
    );

    const metadata =
      this.metadataEngine.build(
        {
          edition,
          dna:
            result.dna,
          traits:
            result.traits,
          rank:
            result.rank ||
            "Common",
        }
      );

    this.plugins.executeHook(
      "afterGeneration",
      result
    );

    this.analytics.record(
      result
    );

    return metadata;
  }

  finalize() {
    this.analytics.export();
  }
}

module.exports =
  GenerationPipeline;