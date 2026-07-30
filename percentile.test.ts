import { Samples } from "./percentile.ts";
import { test } from "node:test";
import assert from "node:assert/strict";
test("percentiles", () => {
  const s = new Samples();
  for (let i = 1; i <= 100; i++) s.add(i);
  assert.ok([50, 51].includes(s.percentile(50)));
  assert.ok([99, 100].includes(s.percentile(99)));
});
