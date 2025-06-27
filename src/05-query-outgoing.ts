import { type Dependency } from "./lib/dependency.ts";

export class Thing {
  private dependency: Dependency;

  public constructor(dependency: Dependency) {
    this.dependency = dependency;
  }

  // Sends query to dependency
  // (also receives incoming query)
  public getDependencyBar(): string {
    return this.dependency.getBar();
  }
}
