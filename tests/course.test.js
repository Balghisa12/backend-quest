import { describe, expect, it } from "bun:test";
import { readFileSync } from "node:fs";

const course = JSON.parse(readFileSync(new URL("../data/course.json", import.meta.url), "utf8"));
const html = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");

describe("interview academy content", () => {
  it("counts exactly the lessons provided", () => {
    expect(course.count).toBe(course.lessons.length);
    expect(course.lessons.length).toBeGreaterThanOrEqual(43);
  });

  it("has unique, persistent lesson IDs", () => {
    const ids = course.lessons.map(x => x.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("contains complete practice and answer material", () => {
    const moduleIds = new Set(course.modules.map(x => x.id));
    for (const lesson of course.lessons) {
      expect(moduleIds.has(lesson.module)).toBe(true);
      for (const key of ["id", "topic", "title", "scenario", "explanation", "code", "exercise", "solution", "interview", "warning"]) {
        expect(typeof lesson[key]).toBe("string");
        expect(lesson[key].trim().length).toBeGreaterThan(0);
      }
      expect(Array.isArray(lesson.walk)).toBe(true);
      expect(lesson.walk.length).toBeGreaterThan(0);
      expect(Array.isArray(lesson.quiz.answers)).toBe(true);
      expect(lesson.quiz.answers.length).toBeGreaterThanOrEqual(2);
      expect(lesson.quiz.correct).toBeGreaterThanOrEqual(0);
      expect(lesson.quiz.correct).toBeLessThan(lesson.quiz.answers.length);
      expect(lesson.quiz.question.length).toBeGreaterThan(0);
    }
  });

  it("preserves progress storage and swipe navigation", () => {
    expect(html).toContain('backend-quest-swipe-v1');
    expect(html).toContain('scroll-snap-type:y mandatory');
    expect(html).toContain('id="nextBtn"');
    expect(html).toContain('id="prevBtn"');
    expect(html).toContain('id="lessonProgress"');
  });

  it("has syntactically valid client JavaScript", () => {
    const script = html.match(/<script>([\s\S]*?)<\/script>/)?.[1];
    expect(script).toBeTruthy();
    expect(() => new Function(script)).not.toThrow();
  });
});
