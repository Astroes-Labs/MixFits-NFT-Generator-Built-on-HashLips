class ValidationEngineV2 {
  validate(traits) {
    const errors = [];

    const values =
      Object.values(traits);

    const empty = values.filter(v => !v);

    if (empty.length) {
      errors.push("Missing traits detected");
    }

    const duplicates =
      new Set(values);

    if (
      duplicates.size !== values.length
    ) {
      errors.push("Duplicate traits detected");
    }

    return errors;
  }
}

module.exports =
  ValidationEngineV2;