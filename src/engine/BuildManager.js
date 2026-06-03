const fs = require("fs");
const path = require("path");

class BuildManager {
  constructor() {
    this.buildDir = path.join(process.cwd(), "build");
  }

  setup() {
    console.log("Setting up build folder...");

    if (fs.existsSync(this.buildDir)) {
      fs.rmSync(this.buildDir, {
        recursive: true,
        force: true,
      });
    }

    fs.mkdirSync(this.buildDir, { recursive: true });
    fs.mkdirSync(path.join(this.buildDir, "images"), { recursive: true });
    fs.mkdirSync(path.join(this.buildDir, "json"), { recursive: true });
    fs.mkdirSync(path.join(this.buildDir, "reports"), { recursive: true });

    console.log("Build folder ready at:", this.buildDir);
  }
}

module.exports = BuildManager;