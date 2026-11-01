# Pilot lesson review — 1 November 2026

Scope: ts-types, go-cancel-worker-pool, api-idempotency-retry.
All 59 lesson IDs and the existing localStorage key are preserved.

- Added outcomes, prerequisite descriptions, difficulty, estimated minutes, sources and verification dates.
- Rewrote explanations, walkthroughs, quiz distractors and option-specific feedback.
- Added practice acceptance criteria rendered in the existing swipe UI.
- Pilot code examples remain whole instead of being cut every nine lines.
- Sources appear on pilot recap cards. Other lessons retain their existing rendering.

Validation: node --test tests/pilot.test.js passed (3 tests).
Checked original and updated lesson ID sequences and confirmed only three lessons changed.
Bun is unavailable locally, so the original bun test suite was not run.
Go code is explicitly a fragment and payment code is explicitly workflow pseudocode;
neither is claimed as a runnable project or a complete production implementation.
Manual mobile/browser verification remains required.

Deferred: spaced review, attempt history, daily collection, new foundation chapters and runnable projects.
No deployment is part of this change.
