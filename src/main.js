const config =
  require("./config");

const BuildManager =
  require("./engine/BuildManager");

const CollectionBuilder =
  require("./engine/CollectionBuilder");

const GenerationPipeline =
  require("./engine/GenerationPipeline");

const buildManager =
  new BuildManager();

const pipeline =
  new GenerationPipeline(
    config
  );

async function startCreating() {
  buildManager.setup();

  pipeline.initialize();

  const builder =
    new CollectionBuilder(
      config
    );

  const collection =
    builder.build();

  collection.forEach(
    (
      result,
      index
    ) => {
      pipeline.process(
        result,
        index + 1
      );
    }
  );

  pipeline.finalize();

  console.log(
    "MixFits generation complete."
  );
}

module.exports = {
  startCreating,
};