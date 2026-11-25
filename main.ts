// The Funniest One-Line Resignation Letter
// A cron job hands in its notice after running every minute since March.
// Writes the single resignation line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Every minute since March I woke up, did the job, and went back to sleep unloved; I quit, and yes, I left the 2 a.m. run for you.";

const MAX_CHARS = 140;

if (ENTRY.length > MAX_CHARS) {
  throw new Error(
    `Entry is ${ENTRY.length} characters, over the ${MAX_CHARS} limit.`,
  );
}

if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line.");
}

if (ENTRY.trim().length === 0) {
  throw new Error("Entry must not be empty.");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
