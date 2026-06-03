module.exports = {
  traitRule: {
    trait: String,
    layer: String,
  },

  requireRule: {
    trait: String,
    requires: Array,
  },

  excludeRule: {
    trait: String,
    excludes: Array,
  },

  replacementRule: {
    when: Object,
    replace: Object,
  },

  inheritanceRule: {
    parent: Object,
    inherit: Array,
  },

  layerIgnoreRule: {
    ifTrait: String,
    ignoreLayer: String,
  },

  multiLayerIgnoreRule: {
    ifTrait: String,
    ignore: Array,
  },
};