import { describe, it, mock } from "node:test";
import * as assert from "node:assert/strict";

import { Thing } from "../src/lib/thing.ts";

describe("Query sent to self", () => {
  const thing = new Thing();

  // Do not test private methods.
  // Do not make assertions about their result.
  // Do not expect to send them.
  it.skip("getBaz returns the correct value", () => {});
  it.skip("getSquark calls getBaz", () => {});

  it("getSquark returns the reversed baz", () => {
    // --> see "Query incoming"
  });
});
