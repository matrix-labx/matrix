export function Query(key?: string): ParameterDecorator {
  return (target: object, propertyKey: string | symbol, parameterIndex: number): void => {
    console.log('ParameterDecorator Query');
    console.log(target, propertyKey, parameterIndex, key);
    console.log('\n');
  };
}

export function Queries(key?: string): ParameterDecorator {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number): void => {};
}

export function Body(key?: string): ParameterDecorator {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number): void => {};
}

export function Param(key?: string): ParameterDecorator {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number): void => {};
}

export function Headers(key?: string): ParameterDecorator {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number): void => {};
}

export function RequestPath(key?: string): ParameterDecorator {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number): void => {};
}

export function RequestIP(): ParameterDecorator {
  return (target: Object, propertyKey: string | symbol, parameterIndex: number): void => {};
}
