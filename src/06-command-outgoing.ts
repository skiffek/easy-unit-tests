import { type Dependency } from "./lib/dependency.ts";

export class Thing {
  private dependency: Dependency;

  public constructor(dependency: Dependency) {
    this.dependency = dependency;
  }

  // Sends command to dependency
  // (also receives incoming command)
  public setDependencyBar(bar: string): void {
    this.dependency.setBar(bar);
  }
}
