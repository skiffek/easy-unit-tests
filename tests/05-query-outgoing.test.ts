import { describe, it, mock } from "node:test";
import * as assert from "node:assert/strict";

import { Thing } from "../src/lib/thing.ts";
import { type Dependency } from "../src/lib/dependency.ts";

describe("Query outgoing", () => {
  // Mock the dependency.
  const mockedGetBar = mock.fn(() => "mocked bar");
  const mockedSetBar = mock.fn((bar: string) => {});
  const dependencyMock: Dependency = {
    getBar: mockedGetBar,
    setBar: mockedSetBar,
  };

  const thing = new Thing(dependencyMock);

  // Do not test outgoing query messages.
  // Do not make assertions about their result.
  // Do not expect to send them.
  it.skip("getDependencyBar calls getBar on dependency", () => {});

  it("getDependencyBar returns bar of dependency", () => {
    // --> see "Query incoming"
  });
});
