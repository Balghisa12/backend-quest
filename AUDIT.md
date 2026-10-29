# Mobile & curriculum audit — 29 October 2026

## Scope

Reviewed the complete 43-lesson course JSON, module distribution, swipe page markup and rendering logic, navigation handlers, and Railway runtime configuration.

## Changes shipped

- Shorter explanation cards (270 characters of sentence-grouped content instead of 340).
- Clearer concept-specific headings rather than repetitive generic headings.
- First-sentence visual emphasis; sentences displayed as separate readable paragraphs.
- Explicit lesson phase labels: Problem, Concept, Code, Walkthrough, Quiz, Practice, Interview.
- A separate within-lesson progress indicator alongside overall deck progress.
- Correct ↑ Back / ↓ Next labels for vertical movement; visible swipe hint.
- Larger touch targets, responsive spacing, improved narrow-screen typography.
- Shorter code blocks (9 lines per card rather than 11) and easier code panning.
- Preserved the same 43 lesson IDs, quizzes, bookmarks, notes and localStorage key.

## Automated checks

The course checks verify complete fields, valid multiple-choice answers, correct lesson count, unique IDs, same progress storage key and valid client-side JavaScript.

Run with `bun test`.

## Findings and next improvements

1. **Go and AI breadth — high priority.** Go (1 lesson) and AI (1 lesson) are significantly thinner than TypeScript (5) and SQL (7). Add goroutines/channels, mutex/race, graceful shutdown, MCP tool lifecycle and evaluation exercises.
2. **Frontend depth — medium priority.** Frontend integration has only one lesson; add data fetching, accessibility and frontend/backend contract testing.
3. **Real-device verification — high priority.** Verify 320px-wide devices, iPhone safe areas, shorter mobile viewports, Android Chromium and mobile Safari. Automated content checks do not replace touch usability tests.
4. **Screen-reader and keyboard review — medium priority.** Test native swipe, focus restoration after quiz updates and sheet focus trapping. Current modal still needs explicit focus management.
5. **Learning quality — medium priority.** Add explicit learning outcomes, estimated minutes, real coding exercises, deeper examples and separated beginner vs advanced pathways. Code is currently illustrative rather than executable in the app.
6. **Progress portability — medium priority.** Notes and bookmarks remain in localStorage only; they do not sync across devices.

## Design principle

Keep the existing one-card-at-a-time vertical feed but make every card self-contained, scannable and comfortable on a 320–390px display. Preserve existing lesson IDs to retain browser-saved progress.
