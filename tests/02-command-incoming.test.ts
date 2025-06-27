import { describe, it, mock } from "node:test";
import * as assert from "node:assert/strict";

import { Thing } from "../src/lib/thing.ts";

describe("Command Incoming", () => {
  const thing = new Thing();

  it("setFoo sets the value", () => {
    // Test incoming command messages...
    thing.setFoo("nups");

    // ... by making assertions about direct public side effects.
    assert.equal(thing.getFoo(), "nups");
  });
});
