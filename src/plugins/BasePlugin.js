class BasePlugin {
  constructor(config) {
    this.config = config;
    this.name = "Unnamed Plugin";
  }

  beforeGeneration(context) {}

  afterGeneration(result) {}

  beforeRender(context) {}

  afterRender(result) {}

  beforeMetadata(metadata) {}

  afterMetadata(metadata) {}

  beforeSave(result) {}

  afterSave(result) {}
}

module.exports = BasePlugin;