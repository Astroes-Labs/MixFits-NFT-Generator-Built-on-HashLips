const AnalyticsEngine = require("./AnalyticsEngine");

const MetadataEngine = require("./MetadataEngine");

const ConflictReporter = require("./ConflictReporter");

const PluginManager = require("./PluginManager");

const CanvasRenderer = require("./CanvasRenderer");

const ImageExporter = require("./ImageExporter");

const MetadataWriter = require("./MetadataWriter");

const CSVSchemaEngine = require("./CSVSchemaEngine");

const ValidationEngineV2 = require("./ValidationEngineV2");

class GenerationPipeline {
  constructor(config) {
    this.config = config;

    this.analytics = new AnalyticsEngine();

    this.metadataEngine = new MetadataEngine(config);

    this.conflicts = new ConflictReporter(config);

    this.plugins = new PluginManager(config);

    this.renderer = new CanvasRenderer(config);

    this.exporter = new ImageExporter(
      require("path").join(process.cwd(), "build"),
    );

    this.writer = new MetadataWriter(
      require("path").join(process.cwd(), "build"),
    );

    this.csv = new CSVSchemaEngine(config);

    this.validator = new ValidationEngineV2();
  }

  initialize() {
    this.plugins.load();

    const conflicts = this.conflicts.export();

    if (conflicts.length) {
      console.warn("Rule conflicts found:", conflicts.length);
    }
  }

  async process(result, edition) {
    const errors = this.validator.validate(result.traits);

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    const canvas = await this.renderer.render(result.traits);

    this.exporter.save(canvas, edition);

    const metadata = this.metadataEngine.build({
      edition,
      dna: result.dna,
      traits: result.traits,
      rank: result.rank || "Common",
    });

    this.writer.write(metadata, edition);

    this.analytics.record(result);

    return metadata;
  }

  finalize() {
    this.analytics.export();
  }
}

module.exports = GenerationPipeline;
