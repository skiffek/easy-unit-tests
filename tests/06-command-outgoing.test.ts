import { describe, it, expect, mock } from "bun:test";

interface Dependency {
  getBar(): string;
  setBar(bar: string): void;
}

// Unit under test
class Thing {
  public constructor(private readonly dependency: Dependency) {}

  // Receives incoming command AND
  // --> Sends outgoing command
  public setDependencyBar(bar: string): void {
    this.dependency.setBar(bar);
  }
}

describe("Thing", () => {
  const setBarMock = mock((bar: string) => {});
  const dependency = <Dependency>{
    getBar: () => "bar",
    setBar: setBarMock,
  };

  const thing = new Thing(dependency);

  it("setDependencyBar sends the outgoing command", () => {
    thing.setDependencyBar("new bar");

    expect(setBarMock).toHaveBeenCalledWith("new bar");
  });

  // setDependencyBar has no DIRECT public side effects.
});

describe("Dependency", () => {
  it("setBar sets the value", () => {
    // Assert direct public side effects
  });
});
