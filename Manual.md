# Complete Command Reference

## Generate Full Collection

Generate the entire collection using all configured rules, rarity weights, validation, rendering, metadata, plugins, and analytics

```bash
node src/main.js generate
```

Output

```txt
build/images
build/json
build/reports
```

---

## Generate Single NFT

Generate one NFT with fixed traits

```bash
node src/main.js single '{"Species":"Werewolf","Eyes":"Galaxy Eyes"}'
```

Example

```bash
node src/main.js single '{"Species":"Ghost"}'
```

Result

```txt
Species = Ghost
Everything else randomized
Rules still applied
```

---

## Generate Founder NFT

Generate a founder NFT using FounderEngine

```bash
node src/main.js founder
```

Default founder traits

```txt
Founder Badge
Founder Aura
Founder Background
```

Used for

```txt
Team NFTs
Reserve NFTs
Treasury NFTs
Genesis NFTs
```

---

## Generate Legendary NFT

Generate a predefined legendary NFT

```bash
node src/main.js legendary "The First King"
```

Example configuration

```js
legendaryNFTs: [
  {
    name: "The First King",

    traits: {
      Species: "Werewolf",
      Head: "King Head",
      Crown: "Genesis Crown",
      Eyes: "Galaxy Eyes"
    }
  }
]
```

---

## Generate Analytics Report

Export collection analytics

```bash
node src/main.js analytics
```

Output

```txt
build/reports/analytics.json
```

Contains

```txt
Trait counts
Trait frequency
DNA statistics
Collection distribution
```

---

## Validate Collection

Checks rules and configuration before generation

```bash
node src/main.js validate
```

Checks

```txt
Missing traits
Broken references
Circular dependencies
Invalid rule targets
Duplicate configurations
Impossible combinations
```

---

## Export CSV

Export collection data to CSV

```bash
node src/main.js csv
```

Output

```txt
build/reports/collection.csv
```

---

## Export Rarity CSV

Export rarity rankings

```bash
node src/main.js rarity
```

Output

```txt
build/reports/rarity.csv
```

Contains

```txt
Edition
DNA
Rarity Score
Rank
```

---

## Generate Hybrid NFT

Generate NFT with partial trait locking

Example

```bash
node src/main.js hybrid '{"Species":"Werewolf"}'
```

Result

```txt
Species fixed
Remaining layers randomized
Rules still enforced
```

---

## Generate Batch Collection

Generate a custom number of NFTs

```bash
node src/main.js generate 500
```

Result

```txt
Generates first 500 NFTs
```

Example

```bash
node src/main.js generate 10000
```

---

## Generate NFT Range

Generate specific edition range

```bash
node src/main.js generate-range 1001 1500
```

Result

```txt
Generates editions 1001 through 1500
```

---

## Regenerate Specific Edition

Rebuild a single NFT edition

```bash
node src/main.js regenerate 257
```

Used for

```txt
Corrupt image recovery
Metadata fixes
Render issues
```

---

## Rebuild Metadata

Recreate all metadata without regenerating images

```bash
node src/main.js rebuild-metadata
```

---

## Rebuild Analytics

Recalculate collection analytics

```bash
node src/main.js rebuild-analytics
```

---

## List Legendary NFTs

Display all configured legendary NFTs

```bash
node src/main.js legendary-list
```

Example output

```txt
The First King
The Eternal Ghost
The Ancient Slime
```

---

## List Traits

Display all available traits

```bash
node src/main.js traits
```

Example output

```txt
Species
  Werewolf
  Ghost
  Slime

Eyes
  Blue Eyes
  Galaxy Eyes
  Laser Eyes
```

---

## List Layers

Display all available layers

```bash
node src/main.js layers
```

Example output

```txt
Background
Species
Head
Hair
Eyes
Face
Accessory
Hat
Aura
```

---

## Show Rule Report

Display rule conflict report

```bash
node src/main.js rules
```

Output

```txt
build/reports/conflicts.json
```

---

## Show Collection Statistics

Display collection statistics

```bash
node src/main.js stats
```

Example

```txt
Total NFTs
Unique DNA
Trait Counts
Legendary Count
Founder Count
```

---

## Dry Run

Test generation without saving files

```bash
node src/main.js dry-run
```

Used for

```txt
Rule testing
Probability testing
Validation testing
```

---

## Plugin Diagnostics

Display loaded plugins

```bash
node src/main.js plugins
```

Example

```txt
RarityPlugin
MetadataPlugin
UtilityPlugin
```

---

## Enable Debug Mode

Run with detailed logs

```bash
node src/main.js generate --debug
```

Displays

```txt
Trait selection
Rule execution
Layer resolution
Metadata generation
DNA generation
```

---

## Performance Benchmark

Measure engine speed

```bash
node src/main.js benchmark
```

Example output

```txt
1000 NFTs generated
Average render time
Average rule time
Peak memory usage
```

---

## Recommended Production Commands

Validate before generating

```bash
node src/main.js validate
```

Generate collection

```bash
node src/main.js generate
```

Export analytics

```bash
node src/main.js analytics
```

Export rarity rankings

```bash
node src/main.js rarity
```

Review reports

```txt
build/reports
```

Verify metadata

```txt
build/json
```

Verify images

```txt
build/images
```
