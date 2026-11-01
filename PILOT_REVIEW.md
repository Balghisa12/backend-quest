# Pilot lesson review — 1 November 2026

Three pilots: ts-types, go-cancel-worker-pool, api-idempotency-retry.
All 59 lesson IDs and the existing localStorage key are preserved.

## Learning experience
- Predict before reading: a short question with feedback after selecting an answer.
- Author each concept card with a specific heading and one teaching purpose.
- Preserve complete pilot code examples and show explicit practice criteria.
- End with a takeaway, optional expanded explanation, source links and separate read/recall/apply status.
- Reading completion is self-reported; the interface explicitly says code is not graded.
- Predictions persist separately from quiz results; legacy progress remains available.
- Other lessons retain their existing concept-card fallback.

## Validation
node --test tests/pilot.test.js: 4 passing tests.
Covers content compatibility, quantity behavior, metadata, authored slide order,
whole-code preservation, prediction feedback, recap state and legacy saved progress.
The existing Bun suite was not run because Bun is unavailable locally.
Attempted a Playwright browser smoke test; no Chromium executable is installed,
so visual layout, touch scrolling and mobile accessibility remain unverified.
Go is a labeled code fragment; payment code is labeled workflow pseudocode.

Deferred: spaced review, answer-attempt history, daily collection, foundation chapters,
runnable projects, diagnostic skipping and complete redesign of the remaining 56 lessons.
No merge or production deployment is included.
