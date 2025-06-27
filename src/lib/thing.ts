import { type Dependency } from "./dependency.ts";

export class Thing {
  private foo: string = "foo";
  private baz: string = "baz";
  private dependency: Dependency = {
    getBar: () => "bar",
    setBar: (bar: string) => {},
  };

  public constructor(dependency?: Dependency) {
    if (dependency) this.dependency = dependency;
  }

  // Receives incoming query
  public getFoo(): string {
    return this.foo;
  }

  public setFoo(foo: string): void {
    this.foo = foo;
  }

  private getBaz(): string {
    return this.baz;
  }

  private setBaz(baz: string): void {
    this.baz = baz;
  }

  public getSquark(): string {
    return this.getBaz().split("").reverse().join("");
  }

  public setSquark(zab: string): void {
    this.setBaz(zab.split("").reverse().join(""));
  }

  public getDependencyBar(): string {
    return this.dependency.getBar();
  }

  public setDependencyBar(bar: string): void {
    this.dependency.setBar(bar);
  }
}
