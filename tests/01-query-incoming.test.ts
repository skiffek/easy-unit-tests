import { describe, it, expect } from "bun:test";

import { Thing, type Dependency } from "../lib/thing";

describe("Thing", () => {
  const dependency: Dependency = {
    getBar: () => "bar",
    setBar: () => {},
  };

  it("", () => {
    const thing = new Thing("my-foo", dependency);

    expect(thing.getFoo()).toBe("my-foo");
  });
});
