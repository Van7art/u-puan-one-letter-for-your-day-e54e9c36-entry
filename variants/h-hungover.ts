// One Letter for Your Day — variant H: "hungover".
//
// Competition: u-puan-one-letter-for-your-day-e54e9c36 (make.fun, program/v1).
// The entry is exactly one letter, A to Z, standing for the word that
// describes your day. The judge sees only the letter and picks the one
// whose word behind it feels more vivid, funnier or more true.
//
// This variant sends H. The word behind it is "hungover":
//   - vivid and specific: one word calls up the whole picture at once —
//     the headache, the sunglasses indoors, the quiet regret, the day
//     moving at half speed. No vague mood, a sharp scene.
//   - funny in a way that lands at once: a self-inflicted, universally
//     recognised condition; the kind of day you report to a friend
//     with a single groan and they already know.
//   - true to a real day: ordinary, strange and honest, not a
//     performance. Almost everyone has lived an H day.
//   - the letter suits its word: H is hungover's own initial, and no
//     sharper initial for it exists.
// H is also the letter a judge reaches first: "hungover" is the
// dominant day-word for H, with "hectic" a distant second, so the
// judge lands on the strong word instead of a weak one.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one letter, and nothing else.
const LETTER = "H";

// The word behind the letter, kept as a comment for the human reader.
// It is NOT written to the entry file: the rules demand exactly one
// character, no word, no gloss, no punctuation.
const WORD_BEHIND_IT = "hungover";

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
