#!/usr/bin/env node

/**
 * Set the active attorney slug for the current branch.
 *
 * Usage: npm run set-attorney -- jay-wang
 */

import { readFileSync, writeFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const configPath = join(__dirname, "../src/config/active-attorney.ts");

const slug = process.argv[2];

if (!slug) {
  console.error("Usage: npm run set-attorney -- <attorney-slug>");
  console.error("Example: npm run set-attorney -- jay-gellhaus");
  process.exit(1);
}

const content = readFileSync(configPath, "utf8");
const updated = content.replace(
  /export const ACTIVE_ATTORNEY_SLUG = "[^"]+";/,
  `export const ACTIVE_ATTORNEY_SLUG = "${slug}";`,
);

if (updated === content) {
  console.error("Could not update active attorney slug in config file.");
  process.exit(1);
}

writeFileSync(configPath, updated, "utf8");
console.log(`Active attorney set to: ${slug}`);
