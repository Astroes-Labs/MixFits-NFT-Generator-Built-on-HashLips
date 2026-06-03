class FounderEngine {
  constructor(config) {
    this.config = config;
  }

  getFounderTraits() {
    return {
      Badge:
        "Founder Badge",

      Aura:
        "Founder Aura",

      Background:
        "Founder Background",
    };
  }

  inject(context) {
    const founderTraits =
      this.getFounderTraits();

    Object.entries(
      founderTraits
    ).forEach(
      ([layer, trait]) => {
        context.setTrait(
          layer,
          trait
        );
      }
    );

    context.flags.founder =
      true;

    return context;
  }
}

module.exports =
  FounderEngine;