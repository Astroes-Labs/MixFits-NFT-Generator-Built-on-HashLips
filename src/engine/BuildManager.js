const fs = require("fs");
const path = require("path");

class BuildManager {
  constructor() {
    this.buildDir =
      path.join(
        process.cwd(),
        "build"
      );
  }

  setup() {
    if (
      fs.existsSync(
        this.buildDir
      )
    ) {
      fs.rmSync(
        this.buildDir,
        {
          recursive: true,
          force: true,
        }
      );
    }

    fs.mkdirSync(
      this.buildDir,
      {
        recursive: true,
      }
    );

    fs.mkdirSync(
      path.join(
        this.buildDir,
        "images"
      )
    );

    fs.mkdirSync(
      path.join(
        this.buildDir,
        "json"
      )
    );

    fs.mkdirSync(
      path.join(
        this.buildDir,
        "reports"
      )
    );
  }
}

module.exports =
  BuildManager;