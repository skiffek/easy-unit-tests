export interface Dependency {
  getBar(): string;
  setBar(bar: string): void;
}

export class Thing {
  private readonly dependency: Dependency;

  private foo: string;
  private baz: string[] = [];

  public constructor(foo: string, parent: Dependency) {
    this.foo = foo;
    this.dependency = parent;
  }

  // Query incoming
  public getFoo(): string {
    return this.foo;
  }

  // Command incoming
  public setFoo(foo: string): void {
    this.foo = foo;
  }

  // Query incoming AND
  // Query sent to self
  public getBazAsString(): string {
    return this.getBaz().join("");
  }

  private getBaz(): string[] {
    return this.baz;
  }

  // Command incoming AND
  // Command sent to self
  public setBazFromString(baz: string): void {
    this.setBaz(baz.split(""));
  }

  private setBaz(baz: string[]): void {
    this.baz = baz;
  }

  // Query incoming AND
  // Query outgoing
  public getDependencyBar(): string {
    return this.dependency.getBar();
  }

  // Command incoming AND
  // Command outgoing
  public setDependencyBar(bar: string): void {
    this.dependency.setBar(bar);
  }
}
