export class Thing {
  private foo: string = "foo";

  // Receives incoming command
  public setFoo(foo: string): void {
    this.foo = foo;
  }
}
