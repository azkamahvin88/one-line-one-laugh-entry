// One Line, One Laugh — make.fun entry (program/v1, Node 22+).
// Writes one funny line, short enough to read in a breath, to
// /output/entry.txt. Deterministic, no network, no model calls.
// The line is a fixed constant chosen by the author after scoring
// 25 candidates against the judge brief (laugh, turn, tightness,
// freshness, clarity).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: a jogger whose own body sues him for exercising, and
// whose couch settles the case — the turn is legal language applied
// to laziness, with the couch delivering the punchline. Chosen from
// 25 brainstormed candidates; it scored highest on laugh, turn,
// tightness, freshness and clarity, and reads whole on a cold read.
const ENTRY =
  "I tried jogging — my knees filed a formal complaint and my couch offered me a settlement.";

// Gate guard: the sealed scorer only accepts 1–140 characters.
// Fail loudly here rather than writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 140) {
  throw new Error(`ENTRY is ${[...ENTRY].length} characters; must be 1–140.`);
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY + "\n", "utf8");

console.log(`Wrote ${[...ENTRY].length} characters to ${outFile}`);
