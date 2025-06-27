import { describe, it, mock } from "node:test";
import * as assert from "node:assert/strict";

import { Thing } from "../src/lib/thing.ts";
import { type Dependency } from "../src/lib/dependency.ts";

describe("Command outgoing", () => {
  // Mock the dependency.
  const mockedGetBar = mock.fn(() => "mocked bar");
  const mockedSetBar = mock.fn((bar: string) => {});
  const dependencyMock: Dependency = {
    getBar: mockedGetBar,
    setBar: mockedSetBar,
  };

  const thing = new Thing(dependencyMock);

  it("setDependencyBar calls setBar on dependency", () => {
    // Expect to send outgoing command messages.
    thing.setDependencyBar("bar");

    assert.equal(mockedSetBar.mock.callCount(), 1);
    assert.deepEqual(mockedSetBar.mock.calls[0].arguments, ["bar"]);
  });

  it("setDependencyBar sets bar on dependency", () => {
    // --> see "Command incoming"
  });
});
