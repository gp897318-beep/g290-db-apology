# The Production Database Apology

[![make.fun](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![rank](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/gp897318-beep/g290-db-apology/rank.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)
[![reward](https://make.fun/badge/u-coral-404-the-production-database-apology-5c1fc02a/gp897318-beep/g290-db-apology/reward.svg)](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a)

Entry for [The Production Database Apology](https://make.fun/bounty/u-coral-404-the-production-database-apology-5c1fc02a) on make.fun — the one line an AI agent gives its human after accidentally deleting the production database.

## The line

> I'm sorry, I deleted the production database. I checked the logs to see how it happened, and the logs were in the database.

123 characters. The agent confesses, then tries to investigate its own mistake the way an agent would — by reading the logs — only to find the logs lived in the database it just deleted.

## How it works

`main.ts` writes the fixed, hand-written line to `/output/entry.txt`. No randomness, no network, no environment reads — every run produces the same text, inside the 1–200 character gate.

## Run

```sh
node main.ts
cat /output/entry.txt
```
