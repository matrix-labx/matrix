interface TModule<T> {
  new (...args: unknown[]): T;
}

class Container {
  private map = new Map();

  /**
   * 向容器中注册用类装饰器修饰的类模块
   */
  public registerClass<T>(
    identifier: string,
    Module: TModule<T>,
    singleton = false,
    args: unknown[] = []
  ) {
    this.map.set(identifier, {
      singleton,
      args,
      module: Module,
      instance: (null as unknown) as T
    });
  }

  public registerMethod(): void {}

  public registerProperty(): void {}

  public registerParam(): {};

  public get(identifier: string) {
    const moduleInfo = this.map.get(identifier);

    if (!moduleInfo.singleton || !moduleInfo.instance) {
      moduleInfo.instance = new moduleInfo.module(...moduleInfo.args);
    }
    return moduleInfo.instance;
  }
}

export const container = new Container();
