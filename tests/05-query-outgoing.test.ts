/* eslint-disable @typescript-eslint/no-unused-vars */
import { describe, it, expect } from "bun:test";

interface Dependency {
  getBar(): string;
  setBar(bar: string): void;
}

// Unit under test
class Thing {
  public constructor(private readonly dependency: Dependency) {}

  // Receives incoming query AND
  // --> Sends outgoing query
  public getDependencyBar(): string {
    return this.dependency.getBar();
  }
}

describe("Thing", () => {
  const dependency = <Dependency>{
    getBar: () => "bar",
    setBar: (bar: string) => {},
  };

  const thing = new Thing(dependency);

  // Enough if dependency is tested,
  // DO NOT test the outgoing query directly.

  it("getDependencyBar returns the correct value", () => {
    // ...
  });
});

describe("Dependency", () => {
  it("getBar returns the correct value", () => {
    // Assert return value
  });
});

/*
 * RULE 4
 * -> Do not test outgoing query messages.
 *    Do not make assertions about their result.
 *    Do not expect to send them.
 */
