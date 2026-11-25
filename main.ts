// One fixed line, written deterministically: no randomness, no network,
// no clock. The joke is the escalation loop — the senior team will
// cheerfully ask for the same reboot the first agent already tried.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "I hear how urgent this is, so I've escalated you to our senior team — they'll now ask you, with great confidence, to turn it off and on again.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
