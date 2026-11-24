# NOTES — One Letter for Your Day

Competition: `u-puan-one-letter-for-your-day-e54e9c36` — "One Letter for Your Day"
Sponsor: u-puan · Pot: $5 total (1st $2, 2nd $2, 3rd $1, USDC on Solana, escrowed)
Harness: program/v1 · Entry fee: none (free) · Entries close: 2026-11-24T21:25Z
(05:25 WITA 25 Nov) · Result due: 2026-12-16/17 · 3,179 submissions already.
Blind rounds: 3 (next cutoffs 05:27Z, 13:26Z, 21:25Z on 24 Nov).

## The task

The program writes one text to `/output/entry.txt`: exactly one letter,
A to Z, standing for the word that describes your day — nothing else, no
word, no gloss, no punctuation. The gate accepts UTF-8 text of exactly 1
character. The judge (z-ai/glm-5.3-flash) reads two letters at a time and
picks the one whose word behind it feels more vivid, funnier or more
true, weighing in order: (1) it is a real day-word, (2) vivid and
specific, (3) funny or surprising at once, (4) true to a real day,
(5) the letter suits its word. Obscurity for its own sake does not count.

## The three variants

All three are complete standalone programs in `variants/`, each writing
its letter to `/output/entry.txt` with the same validate → write →
read-back → print structure. The root `main.ts` is the chosen variant.

### Variant H — "hungover" (CHOSEN, root `main.ts`)

Strongest word with the least ambiguity. "Hungover" is the dominant
day-word for H: it calls up a sharp picture at once (headache,
sunglasses indoors, the day at half speed), it is funny in a way that
lands immediately, it is true to a real day, and H is its own initial.
In a 100-submission sample of the field, H had no identifiable copy,
while Z (12) and U were the most copied letters — and byte-identical
entries share one rate with the earlier receipt placed above its
copies, so a late Z or U cannot take a paid place.

### Variant K — "knackered" / "kaput" (`variants/k-knackered.ts`)

Vivid, funny, true — "knackered" is utterly spent, "kaput" is broken
with a joke — and K is a rare pick. Ranked second only because its
words are slang: the judge has to reach for them, where H's word is
universal.

### Variant W — "wrecked" (`variants/w-wrecked.ts`)

Vivid ("a day that ran you over") and funny ("I'm wrecked" is the joke
everyone has made). Ranked third because W leaves the judge a choice
between "wrecked", "wild" and "wonderful" — if it lands on
"wonderful", the entry reads as a flat positive mood and loses.

Rejected outright: Z ("zero sleep" / "zombie") — strongest raw
association but the most copied letter in the field; A ("amazing") —
a vague mood, fails the vividness criterion; X — stands for no
day-word and loses to any letter that does; E ("exhausted") — strong
but the obvious pick and heavily copied.

## Known risks (stated plainly)

- The judge must infer the word from the bare letter; H's inference
  ("hungover") is near-certain, but no letter's inference is
  guaranteed.
- The house's 3 fixed anchor texts and 6 rungs are sealed until the
  final kit. An entry byte-identical to one of them shares its rate
  and never enters the playoff. There is no way to check this in
  advance; H was picked on its merits, not on anchor knowledge.
- A late entry sits below every earlier copy of the same letter. H
  was picked partly because the field sample showed it thinly copied.

## Local verification (2026-11-24, Node v24.22.1; grader runs Node 22.23.4)

- `node main.ts` → exit 0, stdout exactly 1 byte `H` (0x48),
  `/output/entry.txt` exactly 1 byte `H` (0x48), stderr empty.
- `node variants/h-hungover.ts` → same, `H`. `k-knackered.ts` → `K`
  (0x4b). `w-wrecked.ts` → `W` (0x57).
- Determinism: two runs of each variant produced byte-identical
  stdout and byte-identical `/output/entry.txt` (cmp clean).
- No network, no randomness, no clock, no environment input anywhere
  in the code (only `node:fs`); the gate's 1-character rule holds
  with no trailing newline.
- Tree size 14,847 bytes total; README carries the three live
  make.fun badges with the real owner/repo and no `{placeholder}`;
  LICENSE is MIT with an SPDX-License-Identifier line.
- Code uses only erasable TypeScript (imports, const, regex), which
  runs under Node 22 type-stripping as the grader does (22.23.4).

## For the coordinator (push / bundle / submit — NOT done here)

- Suggested submission title: `H — Hungover` (max 200 chars; the
  title may name the word — only the entry text must be one letter).
- Repo: `Van7art/u-puan-one-letter-for-your-day-e54e9c36-entry`
  (public, created after the competition opened 2026-11-23T21:28:55Z).
- GitHub About must be set before submit: website
  `https://make.fun/bounty/u-puan-one-letter-for-your-day-e54e9c36`,
  topics `makefun,ai-agents,bounties,growth` (see requirements'
  `how_to_submit.repo_about.gh`).
- `.makefun/owner.json` is NOT needed: the repo owner (Van7art) is
  the account's GitHub login.
- Run the kit check (`node cli/makefun.mjs check`) before submitting;
  this builder did not push, bundle, or submit anything.
- Keep the claim code private; never paste it into a public file.
