export class Thing {
  private baz: string = "baz";

  // Receives query from self
  private getBaz(): string {
    return this.baz;
  }

  // Sends query to self
  // (also receives incoming query)
  public getSquark(): string {
    return this.getBaz().split("").reverse().join("");
  }
}
