const fs = require("fs");

class CSVExporter {
  export(
    results,
    outputFile
  ) {
    if (!results.length) {
      return;
    }

    const headers =
      Object.keys(
        results[0]
      );

    const csv = [
      headers.join(","),
      ...results.map((row) =>
        headers
          .map(
            (header) =>
              `"${row[header] ?? ""}"`
          )
          .join(",")
      ),
    ].join("\n");

    fs.writeFileSync(
      outputFile,
      csv
    );
  }
}

module.exports =
  CSVExporter;