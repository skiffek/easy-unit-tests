import { describe, it, expect } from "bun:test";

// Unit under test
class Thing {
  private foo: string = "default"

  // Receives incoming queries
  public getFoo(): string {
    return this.foo;
  }

  public setFoo(foo: string): void {
    this.foo = foo;
  }
}

describe("Thing", () => {
  const thing = new Thing();

  it('getFoo returns the correct value', () => {
    thing.setFoo("my-foo");

    expect(thing.getFoo()).toBe("my-foo");
  });
})
