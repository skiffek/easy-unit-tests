/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from "bun:test";

// Unit under test
class Thing {
  public constructor(private baz: string[] = []) {}

  // Receives incoming query AND
  // --> Sends query to self
  public getBazAsString(): string {
    return this.getBaz().join("");
  }

  // --> Receives sent-to-self query
  private getBaz(): string[] {
    return this.baz;
  }
}

describe("Thing", () => {
  const thing = new Thing();

  // Enough to assert the result of getBazAsString,
  // DO NOT test getBaz directly

  it("getBazAsString returns the correct value", () => {
    // Assert return value
  });
});

/*
 * RULE 3
 * -> Do not test private methods.
 *    Do not make assertions about their result.
 *    Do not expect to send them.
 */
