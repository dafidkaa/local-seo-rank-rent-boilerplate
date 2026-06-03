#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { resolve, basename } from "node:path";

const CONFIGS_DIR = fileURLToPath(new URL("../configs", import.meta.url));
const TARGET = fileURLToPath(new URL("../src/site.config.ts", import.meta.url));

const name = process.argv[2];

if (!name) {
  const available = [];
  if (existsSync(CONFIGS_DIR)) {
    const { readdirSync } = await import("node:fs");
    for (const f of readdirSync(CONFIGS_DIR)) {
      if (f.endsWith(".config.ts")) available.push(f.replace(".config.ts", ""));
    }
  }
  console.error("Usage: node scripts/switch-config.mjs <name>");
  if (available.length) {
    console.error(`\nAvailable configs: ${available.join(", ")}`);
  }
  process.exit(1);
}

const source = resolve(CONFIGS_DIR, `${name}.config.ts`);

if (!existsSync(source)) {
  console.error(`Config not found: ${source}`);
  const { readdirSync } = await import("node:fs");
  const available = readdirSync(CONFIGS_DIR)
    .filter((f) => f.endsWith(".config.ts"))
    .map((f) => f.replace(".config.ts", ""));
  if (available.length) {
    console.error(`Available configs: ${available.join(", ")}`);
  }
  process.exit(1);
}

const content = readFileSync(source, "utf-8");

const requiredExports = ["siteConfig", "allServices"];
const requiredTypes = ["Locale", "ServiceItem", "HeroSlide", "BlogCategory"];
for (const exp of requiredExports) {
  if (!content.includes(`export const ${exp}`)) {
    console.error(`Missing required export "${exp}" in ${basename(source)}`);
    process.exit(1);
  }
}
for (const typ of requiredTypes) {
  if (!content.includes(`export type ${typ}`)) {
    console.error(`Missing required type export "${typ}" in ${basename(source)}`);
    process.exit(1);
  }
}

const header = `// Active site config — switched from configs/${name}.config.ts by switch-config.mjs\n`;

writeFileSync(TARGET, header + content, "utf-8");

const siteUrl = content.match(/siteUrl:\s*"([^"]+)"/)?.[1] || "unknown";
console.log(`Switched to "${name}" config (${siteUrl})`);
console.log(`  Source: configs/${name}.config.ts`);
console.log(`  Target: src/site.config.ts`);
