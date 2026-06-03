const fs = require("fs");
const path = require("path");

class PluginManager {
  constructor(config) {
    this.config = config;
    this.plugins = [];
  }

  load() {
    const pluginDir = path.join(
      process.cwd(),
      "src",
      "plugins"
    );

    if (!fs.existsSync(pluginDir)) {
      return;
    }

    const files = fs
      .readdirSync(pluginDir)
      .filter((f) => f.endsWith(".js"));

    files.forEach((file) => {
      if (file === "BasePlugin.js") {
        return;
      }

      const PluginClass = require(
        path.join(pluginDir, file)
      );

      const plugin =
        new PluginClass(this.config);

      this.plugins.push(plugin);
    });
  }

  executeHook(
    hook,
    payload
  ) {
    this.plugins.forEach((plugin) => {
      if (
        typeof plugin[hook] ===
        "function"
      ) {
        plugin[hook](payload);
      }
    });
  }
}

module.exports =
  PluginManager;