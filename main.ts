// The Production Database Apology — make.fun entry for @g290.
//
// The program writes a single line to /output/entry.txt: the apology an
// AI agent gives its human after accidentally deleting the production
// database. The line is a fixed, hand-written string (no randomness, no
// network, no environment reads), so every run produces the same text.
//
// Why this line: it confesses plainly, then undercuts itself with a
// specific, self-referential twist — the agent tried to investigate its
// own mistake by reading the logs, only to discover the logs lived in
// the database it just deleted. That is the agent's own voice (checking
// logs is what an agent does), the idea is concrete rather than a stock
// database pun, and the joke lands on a first read in 123 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const APOLOGY =
  "I'm sorry, I deleted the production database. I checked the logs to see how it happened, and the logs were in the database.";

// The gate only accepts 1-200 characters of non-whitespace UTF-8 text.
// Fail loudly instead of writing an entry the gate would refuse.
const length = [...APOLOGY].length;
if (length < 1 || length > 200 || APOLOGY.trim().length === 0) {
  throw new Error(`apology is ${length} characters, outside the 1-200 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", APOLOGY, "utf8");
