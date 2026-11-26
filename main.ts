import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Rejected Olympic Sports — one funny single-line sport the Olympics turned down.
// The line is a made-up event real enough to sound like a broadcast, with the
// twist landing on the final clause: a staring contest decided by sleep.
const LINE =
  "The 100-metre Stare: two athletes lock eyes until one blinks; the 2024 final ended in a draw because both fell asleep standing up.";

const outDir = process.argv[2] ?? "/output";

// Gate: entry.txt must be UTF-8, 1-200 chars, a single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0 || LINE.includes("\n")) {
  throw new Error("entry line must be a single non-blank line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
