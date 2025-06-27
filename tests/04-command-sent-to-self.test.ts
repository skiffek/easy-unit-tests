import { describe, it, mock } from "node:test";
import * as assert from "node:assert/strict";

import { Thing } from "../src/lib/thing.ts";

describe("Command sent to self", () => {
  const thing = new Thing();

  // Do not test private methods.
  // Do not make assertions about their result.
  // Do not expect to send them.
  it.skip("setBaz sets the value", () => {});
  it.skip("setSquark calls setBaz", () => {});

  it("setSquark sets the reversed baz", () => {
    // --> see "Command incoming"
  });
});
