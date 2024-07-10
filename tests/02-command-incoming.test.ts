/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from "bun:test";

// Unit under test
class Thing {
  public constructor(private foo: string = "") {}

  public getFoo(): string {
    return this.foo;
  }

  // --> Receives incoming command
  public setFoo(foo: string): void {
    this.foo = foo;
  }
}

describe("Thing", () => {
  const thing = new Thing();

  it("setFoo sets the value", () => {
    thing.setFoo("my-foo");

    // Assert direct public side effects
    expect(thing.getFoo()).toBe("my-foo");
  });
});

/*
 * RULE 2
 * -> Test incoming command messages by making assertions about direct public side effects.
 */
