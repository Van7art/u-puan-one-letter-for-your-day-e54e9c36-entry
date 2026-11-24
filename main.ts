// One Letter for Your Day — the chosen entry: "H" for "hungover".
//
// Competition: u-puan-one-letter-for-your-day-e54e9c36 (make.fun, program/v1).
// The entry is exactly one letter, A to Z, standing for the word that
// describes your day. The judge sees only the letter and picks the one
// whose word behind it feels more vivid, funnier or more true.
//
// Why H won over the other two variants (see variants/):
//   - variants/k-knackered.ts ("knackered" / "kaput") is vivid and
//     funny, and K is a rare pick, but its words are slang — a judge
//     has to reach for them, where H's word is universal.
//   - variants/w-wrecked.ts ("wrecked") is vivid and funny, but W
//     leaves the judge a choice between "wrecked", "wild" and
//     "wonderful"; if it lands on "wonderful", the entry reads as a
//     flat positive mood and loses.
//   - H lands on "hungover" with near certainty: it is the dominant
//     day-word for H, it calls up a sharp picture (the headache, the
//     sunglasses indoors, the day at half speed), it is funny in a
//     way that lands at once, it is true to a real day, and H is its
//     own initial. It is the strongest word with the least ambiguity.
// H also had no identifiable copy in a 100-submission sample of the
// field, while Z and U — the other obvious strong letters — are
// heavily copied, and copies share one rate with the earlier receipt
// placed above them.
//
// The program writes exactly one character to /output/entry.txt (the
// grader's gate: UTF-8 text of 1 to 1 characters, not only white
// space) and prints exactly that character to stdout. It uses no
// network, no randomness, no clock and no environment input, so two
// runs produce byte-identical output.

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
