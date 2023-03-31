export declare type Constructor<T> = new (...args: any) => T;

export abstract class BaseUtil {
  private static instanceMap = new Map<string, any>();
  private static instanceInitState: Record<string, boolean> = {};

  public static getInstance<U, T extends Constructor<any> = any>(cl: T): U {
    const name = this.name;
    if (this.instanceMap.has(name)) {
      return this.instanceMap.get(name);
    } else {
      this.instanceInitState[name] = true;
      this.instanceMap.set(name, new cl());
      this.instanceInitState[name] = false;
      return this.instanceMap.get(name);
    }
  }

  protected static safeguard() {
    if (!this.instanceInitState[this.name]) {
      throw new Error(this.name + ' cannot be instantiated with a constructor. Use getInstance()');
    }
  }
}