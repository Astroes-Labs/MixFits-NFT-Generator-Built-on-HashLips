class TemplateEngine {
  constructor(config) {
    this.config = config;
  }

  build(
    template,
    variables
  ) {
    let output = template;

    Object.entries(
      variables
    ).forEach(
      ([key, value]) => {
        output =
          output.replaceAll(
            `{{${key}}}`,
            value
          );
      }
    );

    return output;
  }
}

module.exports =
  TemplateEngine;