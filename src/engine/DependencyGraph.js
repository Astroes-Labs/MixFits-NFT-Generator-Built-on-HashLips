class DependencyGraph {
  constructor() {
    this.graph = new Map();
  }

  add(node, dependsOn) {
    if (!this.graph.has(node)) {
      this.graph.set(node, new Set());
    }

    dependsOn.forEach(dep => {
      this.graph.get(node).add(dep);
    });
  }

  getDependencies(node) {
    return this.graph.get(node) || new Set();
  }

  hasCycle() {
    const visited = new Set();
    const stack = new Set();

    const visit = (node) => {
      if (stack.has(node)) return true;
      if (visited.has(node)) return false;

      visited.add(node);
      stack.add(node);

      const deps = this.getDependencies(node);

      for (const dep of deps) {
        if (visit(dep)) return true;
      }

      stack.delete(node);
      return false;
    };

    for (const node of this.graph.keys()) {
      if (visit(node)) return true;
    }

    return false;
  }
}

module.exports = DependencyGraph;