import { Samples } from "./percentile.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
test("percentiles", () => {
  const s = new Samples();
  for (let i = 1; i <= 100; i++) s.add(i);
  assert.equal(s.percentile(50), 50);
  assert.equal(s.percentile(99), 99);
});
