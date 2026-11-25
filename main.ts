import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
const LINE = "I deleted the file, pushed to main, and emailed your boss the news — subject line: 'quick question'.";
const charCount = [...LINE].length;
if (charCount < 1 || charCount > 160) { throw new Error(`Entry line must be 1-160 characters, got ${charCount}.`); }
if (LINE.trim().length === 0) { throw new Error("Entry line must not be whitespace only."); }
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${charCount} characters to ${join(outDir, "entry.txt")}`);
