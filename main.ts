// Six Words, One Story — a complete story in exactly six words.
//
// The whole entry is one line of flash fiction. The program writes it to
// /output/entry.txt, where the grader's gate checks it (UTF-8, 1–60
// characters) and the judge compares it against the other entries.
//
// The story: a soldier comes home from the war to be told, in one flat
// apology, that the home he fought for no longer exists. Six words carry
// the departure, the war and the loss; everything else is left unsaid.

import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "Sorry, soldier. Your village is gone.";

// The form is the whole game: refuse to ship anything that is not a
// complete story in exactly six words.
const words = STORY.trim().split(/\s+/);
if (words.length !== 6) {
  throw new Error(`story must be exactly six words, got ${words.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
