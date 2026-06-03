const basePath = process.cwd();
const { NETWORK } = require(`${basePath}/constants/network.js`);

module.exports = {
  network: NETWORK.eth,

  collection: {
    namePrefix: "MixFits",
    description: "MixFits Collection",
    baseUri: "ipfs://replace-me",
    editionSize: 10,
  },

  render: {
    width: 1024,
    height: 1024,
    smoothing: false,
    background: {
      generate: false,
      default: "#000000",
    },
  },

  layers: [
    { name: "Background" },
    { name: "Body" },
    { name: "Eyes" },
    { name: "Foot Wears" },
    { name: "Hair" },
    { name: "Hats" },
    { name: "Pants" },
    { name: "Shirt" },
    { name: "Special" },
  ],

  generation: {
    shuffle: true,
    uniqueDnaTolerance: 100000,
    hybridMode: false,
    singleMode: false,
  },

  groups: {
    slimeFaces: ["Straight Face", "Happy Face", "Sad Face"],

    wolfHair: ["Wolf Hair", "Alpha Hair"],
  },

  legendaryNFTs: [
    {
      name: "The First King",

      traits: {
        Species: "Werewolf",

        Head: "King Head",

        Crown: "Genesis Crown",

        Eyes: "Galaxy Eyes",
      },
    },
  ],

  metadataTemplates: {
    common: {
      description: "{{name}} is a citizen of MixFits.",
    },

    founder: {
      description: "{{name}} is an original founder NFT.",
    },

    legendary: {
      description: "{{name}} is one of the legendary MixFits.",
    },
  },
  csvSchemas: {
    default: ["edition", "dna", "rank"],

    rarity: ["edition", "dna", "score", "rank"],
  },

  rules: {
    requires: require("./rules/traitRequires"),
    excludes: require("./rules/traitExcludes"),
    replacements: require("./rules/traitReplacement"),
    layerIgnore: require("./rules/layerIgnore"),
    multiLayerIgnore: require("./rules/multiLayerIgnore"),
    inheritance: require("./rules/inheritance"),
  },
};
