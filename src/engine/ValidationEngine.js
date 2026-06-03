class ValidationEngine {
  constructor(config) {
    this.config = config;
  }

  validateContext(context) {
    const errors = [];

    this.validateRequires(
      context,
      errors
    );

    this.validateExcludes(
      context,
      errors
    );

    return errors;
  }

  validateRequires(
    context,
    errors
  ) {
    const rules =
      this.config.rules.requires;

    rules.forEach((rule) => {
      if (
        !context.hasTrait(
          rule.trait
        )
      )
        return;

      rule.requires.forEach(
        (required) => {
          if (
            context.getTrait(
              required.layer
            ) !==
            required.trait
          ) {
            errors.push(
              `${rule.trait} requires ${required.trait}`
            );
          }
        }
      );
    });
  }

  validateExcludes(
    context,
    errors
  ) {
    const rules =
      this.config.rules.excludes;

    rules.forEach((rule) => {
      if (
        !context.hasTrait(
          rule.trait
        )
      )
        return;

      rule.excludes.forEach(
        (excluded) => {
          if (
            context.getTrait(
              excluded.layer
            ) ===
            excluded.trait
          ) {
            errors.push(
              `${rule.trait} excludes ${excluded.trait}`
            );
          }
        }
      );
    });
  }
}

module.exports =
  ValidationEngine;