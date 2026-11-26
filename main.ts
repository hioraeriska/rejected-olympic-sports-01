import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Rejected Olympic Sports — one funny single-line sport the Olympics turned down.
// The line: a made-up event real enough to sound like a broadcast, absurd
// enough to be funny, with the twist landing on the final clause.
const LINE =
  "Synchronised queueing: four athletes, one bus, judged on patience, posture, and who snaps first.";

const outDir = process.argv[2] ?? "/output";

// Gate: the entry must be 1 to 200 characters, a single line, not only
// whitespace — otherwise it is never judged and takes no prize.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
