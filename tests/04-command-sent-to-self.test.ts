import { describe, it, expect } from "bun:test";

// Unit under test
class Thing {
  public constructor(private baz: string[] = []) {}

  // Receives incoming command AND
  // --> Sends command to self
  public setBazFromString(baz: string): void {
    this.setBaz(baz.split(""));
  }

  // --> Received sent-to-self command
  private setBaz(baz: string[]): void {
    this.baz = baz;
  }
}

describe("Thing", () => {
  const thing = new Thing();

  // Enough to assert the direct public side effects of setBazFromString,
  // DO NOT test setBaz directly

  it("setBazFromString sets the value", () => {
    // Assert direct public side effects
  });
});
