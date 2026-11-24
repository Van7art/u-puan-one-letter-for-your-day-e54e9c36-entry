// One Letter for Your Day — variant W: "wrecked".
//
// Competition: u-puan-one-letter-for-your-day-e54e9c36 (make.fun, program/v1).
// The entry is exactly one letter, A to Z, standing for the word that
// describes your day. The judge sees only the letter and picks the one
// whose word behind it feels more vivid, funnier or more true.
//
// This variant sends W. The word behind it is "wrecked":
//   - vivid and specific: "wrecked" paints total destruction in one
//     word — a day that ran you over and left nothing standing. It is
//     a picture, not a mood.
//   - funny in a way that lands at once: "I'm wrecked" is the joke
//     everyone has made about their own day; it lands because it is
//     an exaggeration everyone recognises as true.
//   - true to a real day: an honest report of a day that finished
//     the person living it, ordinary or strange.
//   - the letter suits its word: W is wrecked's own initial, and the
//     word's hard double sound fits the letter's shape.
// The risk: W has weaker rivals for the judge's first thought —
// "wild" and "wonderful" are both real day-words and both vaguer
// than "wrecked". If the judge lands on "wonderful", this entry
// reads as a flat positive mood and loses to any vivid word. That
// ambiguity is why W ranks behind H, whose word the judge reaches
// with near certainty.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one letter, and nothing else.
const LETTER = "W";

// The word behind the letter, kept as a comment for the human reader.
// It is NOT written to the entry file: the rules demand exactly one
// character, no word, no gloss, no punctuation.
const WORD_BEHIND_IT = "wrecked";

// Validate the entry before writing anything: exactly one ASCII
// capital letter, A to Z. Anything else fails loudly instead of
// shipping an invalid entry.
if (!/^[A-Z]$/.test(LETTER)) {
  throw new Error(`invalid entry ${JSON.stringify(LETTER)}: must be one letter A-Z`);
}

// The grader's gate reads /output/entry.txt: UTF-8 text of exactly
// 1 character, not only white space. Write the letter with no
// trailing newline, so the file is exactly one byte.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Read the file back and prove what was written is exactly the entry.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LETTER) {
  throw new Error(
    `entry mismatch: /output/entry.txt holds ${JSON.stringify(written)}, expected ${JSON.stringify(LETTER)}`,
  );
}

// Print the entry and nothing else: one character, no newline, so
// stdout carries exactly the entry too.
process.stdout.write(LETTER);

// Keep the reasoning honest: the word is declared, never shipped.
void WORD_BEHIND_IT;
