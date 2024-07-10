/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from "bun:test";

// Unit under test
class Thing {
  public constructor(private foo: string = "") {}

  // --> Receives incoming queries
  public getFoo(): string {
    return this.foo;
  }

  public setFoo(foo: string): void {
    this.foo = foo;
  }
}

describe("Thing", () => {
  const thing = new Thing();

  it("getFoo returns the correct value", () => {
    thing.setFoo("my-foo");

    // Assert what it sends back
    expect(thing.getFoo()).toBe("my-foo");
  });
});

/*
 * RULE 1
 * -> Test incoming query messages by making assertions about what they send back.
 */
