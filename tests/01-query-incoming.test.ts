import { describe, it, mock } from "node:test";
import * as assert from "node:assert/strict";

import { Thing } from "../src/lib/thing.ts";

describe("Query Incoming", () => {
  const thing = new Thing();

  it("getFoo returns the correct value", () => {
    // Test incoming query messages...
    const result = thing.getFoo();

    // ... by making assertions about what they send back.
    assert.equal(result, "foo");
  });
});
