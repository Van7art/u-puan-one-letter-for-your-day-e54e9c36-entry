// One Letter for Your Day — variant K: "knackered".
//
// Competition: u-puan-one-letter-for-your-day-e54e9c36 (make.fun, program/v1).
// The entry is exactly one letter, A to Z, standing for the word that
// describes your day. The judge sees only the letter and picks the one
// whose word behind it feels more vivid, funnier or more true.
//
// This variant sends K. The word behind it is "knackered" (with
// "kaput" as its twin):
//   - vivid and specific: "knackered" is not tired in general, it is
//     utterly spent, body and brain both done — a sharp picture of a
//     day that used a person up. "Kaput" says the same with a joke:
//     broken, finished, out of order.
//   - funny in a way that lands at once: both words are comic
//     understatement; saying the day left you kaput is the kind of
//     line a reader repeats to a friend.
//   - true to a real day: an honest report of exhaustion after a long
//     day, ordinary and recognisable.
//   - the letter suits its word: K is the initial of both candidate
//     words, and K is a rare pick, so this entry is unlikely to sit
//     under a stack of earlier copies of the same letter.
// The risk: the judge must reach "knackered" or "kaput" on its own.
// Both are the dominant day-words for K, so the risk is small, but
// K's words are slang where H's "hungover" is universal.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// The entry: one letter, and nothing else.
const LETTER = "K";

// The word behind the letter, kept as a comment for the human reader.
// It is NOT written to the entry file: the rules demand exactly one
// character, no word, no gloss, no punctuation.
const WORD_BEHIND_IT = "knackered";

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
