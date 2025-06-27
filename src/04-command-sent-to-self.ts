export class Thing {
  private baz: string = "baz";

  // Sends command to self
  // (also receives incoming command)
  public setSquark(zab: string): void {
    this.setBaz(zab.split("").reverse().join(""));
  }

  // Receives command from self
  private setBaz(baz: string): void {
    this.baz = baz;
  }
}
