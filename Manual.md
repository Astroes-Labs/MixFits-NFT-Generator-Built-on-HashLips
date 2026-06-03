````md
# MixFits NFT Engine Manual

## Overview

MixFits is a rule driven NFT generation engine built for structured NFT collections

It supports

- full collection generation
- single NFT generation
- founder NFTs
- legendary NFTs
- analytics
- plugins
- metadata export
- image rendering

---

## Install

```bash
npm install
````

---

## Run Commands

### Generate full collection

```bash
node src/main.js generate
```

---

### Generate single NFT

```bash
node src/main.js single '{"Species":"Werewolf","Eyes":"Galaxy Eyes"}'
```

---

### Generate founder NFT

```bash
node src/main.js founder
```

---

### Generate legendary NFT

```bash
node src/main.js legendary "The First King"
```

---

### Export analytics only

```bash
node src/main.js analytics
```

---

## Folder Structure

```txt
src/
  main.js
  config.js

  engine/
    Generator.js
    CollectionBuilder.js
    SingleNFTGenerator.js
    FounderGenerator.js
    LegendaryGenerator.js
    GenerationPipeline.js
    LayerLoader.js
    CanvasRenderer.js
    ImageExporter.js
    MetadataWriter.js
    CSVSchemaEngine.js
    ValidationEngineV2.js
    AnalyticsEngine.js
    PluginManager.js
    RuleEngine.js
    TraitResolver.js
    Context.js

layers/
  Species/
  Eyes/
  Background/

build/
  images/
  json/
  reports/
```

---

## Layer System

### Config example

```js
layers: [
  { name: "Species" },
  { name: "Eyes" },
  { name: "Background" }
]
```

---

### Folder requirement

```txt
layers/Species
layers/Eyes
layers/Background
```

---

### Trait file format

```txt
Werewolf#5.png
Ghost#3.png
Human#1.png
```

* name before # is trait name
* number after # is weight

---

## Core System Logic

### DNA system

Each NFT is created using a unique DNA string

```js
Species:Werewolf|Eyes:Galaxy Eyes|Background:Dark
```

Used to prevent duplicates

---

### Rule Engine

Controls trait interactions

---

## Require Rules

If trait exists then required trait must exist

```txt
King Crown requires King Head
```

---

## Exclude Rules

If trait exists then block another trait

```txt
Angel Halo excludes Devil Horns
```

---

## Replace Rules

Replace one trait with another

```txt
Wizard Hat replaces Hair layer
```

---

## Layer Ignore Rules

Skip rendering a layer

```txt
Robot Helmet ignores Hair
```

---

## Multi Layer Ignore

Skip multiple layers

```txt
Full Mask ignores Hair Eyes Face
```

---

## Trait Inheritance

Unlock extra traits

```txt
Werewolf unlocks Wolf Teeth
```

---

## Generation Modes

---

### Random Collection Mode

```bash
node src/main.js generate
```

Behavior

* random trait selection
* weighted rarity system
* rule validation
* full batch generation

---

### Single NFT Mode

```bash
node src/main.js single '{}'
```

Behavior

* accepts manual traits
* fills missing traits randomly
* applies all rules

---

### Founder NFT Mode

```bash
node src/main.js founder
```

Behavior

* fixed special traits
* no randomness
* reserved NFT logic

---

### Legendary NFT Mode

```bash
node src/main.js legendary "The First King"
```

Behavior

* fully predefined NFT
* deterministic output
* no randomness allowed

---

## Output System

---

### Images

```txt
build/images/1.png
build/images/2.png
```

---

### Metadata

```txt
build/json/1.json
build/json/_metadata.json
```

---

### Analytics

```txt
build/reports/analytics.json
```

---

## Metadata Structure

```json
{
  "name": "MixFits #1",
  "dna": "hash",
  "edition": 1,
  "attributes": [
    {
      "trait_type": "Species",
      "value": "Werewolf"
    }
  ]
}
```

---

## Analytics System

Tracks

* trait frequency
* DNA uniqueness
* rarity distribution
* total NFT count

---

## Plugin System

Plugins run automatically at hooks

---

### Hooks

```txt
beforeGeneration
afterGeneration
beforeRender
afterMetadata
afterSave
```

---

### Plugin uses

* rarity scoring
* whitelist logic
* external APIs
* staking systems

---

## Common Errors

---

### Missing layer folder

```txt
ENOENT layers/Species
```

Fix

Create folder matching config exactly

---

### Duplicate DNA

Same NFT already generated

Fix

* increase trait variety
* adjust weights
* reduce overlap rules

---

### Missing image files

Fix

Ensure PNG files exist in layer folders

---

### Rule conflicts

Impossible trait combination

Fix

Review requires and excludes rules

---

## Performance Tips

* keep layers under 12
* avoid heavy PNG files
* batch generate in chunks
* reduce conflicting rules
* test with single NFT mode first

---

## Workflow

```txt
1. Setup layers
2. Configure config.js
3. Run single NFT test
4. Run founder NFT
5. Run legendary NFT
6. Run full collection
7. Export analytics
8. Adjust rarity
9. Final production build
```

---

## Summary

MixFits is a rule based NFT generation engine that replaces traditional HashLips logic

It provides

* controlled randomness
* deterministic NFTs
* rule based trait logic
* scalable batch generation
* metadata automation
* analytics tracking

```
```
