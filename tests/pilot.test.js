import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
const course = JSON.parse(readFileSync(new URL("../data/course.json", import.meta.url)));
const html = readFileSync(new URL("../public/index.html", import.meta.url), "utf8");
const pilotIds = ["ts-types", "go-cancel-worker-pool", "api-idempotency-retry"];
test("course remains compatible with the existing lesson renderer", () => {
  assert.equal(course.count, course.lessons.length);
  assert.equal(new Set(course.lessons.map(l => l.id)).size, course.lessons.length);
  const modules = new Set(course.modules.map(m => m.id));
  for (const l of course.lessons) {
    assert.ok(modules.has(l.module));
    for (const key of ["id","topic","title","scenario","explanation","code","exercise","solution","interview","warning"]) assert.ok(typeof l[key] === "string" && l[key].trim());
    assert.ok(l.quiz.correct >= 0 && l.quiz.correct < l.quiz.answers.length);
  }
  assert.ok(html.includes('backend-quest-swipe-v1'));
  const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
  assert.doesNotThrow(() => new Function(script));
});
test("pilot lessons have assessable outcomes and authoritative sources", () => {
  for (const id of pilotIds) {
    const l = course.lessons.find(l => l.id === id);
    assert.ok(l.outcome && l.prerequisites.length && l.acceptanceCriteria.length >= 3);
    assert.ok(l.estimatedMinutes > 0 && /^\d{4}-\d{2}-\d{2}$/.test(l.verifiedAt));
    assert.equal(l.quiz.optionFeedback.length, l.quiz.answers.length);
    assert.equal(new Set(l.quiz.optionFeedback).size, l.quiz.answers.length);
    for (const s of l.sources) assert.equal(new URL(s.url).protocol, "https:");
  }
});
test("quantity example accepts valid inputs and rejects coercion and unsafe numbers", () => {
  const code = course.lessons.find(l => l.id === "ts-types").code;
  const js = code.replace("value: unknown", "value").replace("): number", ")");
  const parse = new Function(js + "\nreturn parseQuantity;")();
  assert.equal(parse(1), 1);
  assert.equal(parse(5), 5);
  for (const x of ["5", true, null, {}, 0, -3, 1.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) assert.throws(() => parse(x));
});
