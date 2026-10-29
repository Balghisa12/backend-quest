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


## Color and readability follow-up — 29 October 2026

A focused review of the 59-lesson swipe interface identified translucent surfaces over multiple colored gradients, low-visibility borders and helper copy, inconsistent code and form typography, and small secondary labels as the most actionable visual issues.

### Applied

- Consolidated the page into an opaque navy reading surface with restrained accents (mint for actions, neutral off-white for body copy).
- Increased text/background separation for explanations, code samples, quizzes, notes, navigation and modal sheet.
- Added explicit success and error states for quiz feedback that remain readable without relying on green/red alone.
- Made the code background solid, increased line height and visibly outlined code containers.
- Increased secondary label and note text to 13px and made form inputs 16px to prevent mobile input zoom.
- Improved focus rings and added an elevated-contrast media-query mode.
- Kept the same 59 lessons, saved lesson IDs, progress storage key and swipe navigation.

### Review notes

Representative design-token contrast ratios calculated using the WCAG relative-luminance formula: primary text #F2F7FA on #101B2B ≈16.03:1; muted #CCD9E3 on #101B2B ≈12.03:1; mint #A6F5D5 on #101B2B ≈13.71:1; code text #E7F4FC on #07111F ≈16.9:1; quiz text #F5FAFF on #183047 ≈12.88:1. These checks are not a full pixel-by-pixel WCAG audit, especially for gradients, interactive states and browser rendering.

### Still needs manual testing

Test at 320px/375px/430px widths on iOS Safari and Android Chrome, including keyboard opening, scroll handoff, long code lines, system large-text mode and high-contrast settings. Screen reader focus handling of the topics sheet requires further attention.
