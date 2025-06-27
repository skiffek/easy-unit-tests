export class Thing {
  private foo: string = "foo";

  // Receives incoming query
  public getFoo(): string {
    return this.foo;
  }
}
