import { CONTROLLER_KEY } from '../constants';
import { container } from '../core/container';
import { Scope, ScopeOptions } from '../interface/scope';
import { isString, isUndefined } from '../util/type';

export interface ControllerOptions extends ScopeOptions {
  prefix?: string | string[];
  host?: string | RegExp | Array<string | RegExp>;
}

export function Controller(): ClassDecorator;
export function Controller(prefix: string | string[]): ClassDecorator;
export function Controller(options: ControllerOptions): ClassDecorator;
export function Controller(
  prefixOrOptions?: string | string[] | ControllerOptions
): ClassDecorator {
  const controllerOptions: ControllerOptions = {};

  if (isUndefined(prefixOrOptions)) {
    controllerOptions.prefix = '/';
    controllerOptions.scope = Scope.SINGLETON;
  } else if (isString(prefixOrOptions) || Array.isArray(prefixOrOptions)) {
    controllerOptions.prefix = prefixOrOptions;
    controllerOptions.scope = Scope.SINGLETON;
  } else {
    controllerOptions.prefix = prefixOrOptions.prefix || '/';
    controllerOptions.scope = prefixOrOptions.scope || Scope.SINGLETON;
  }

  return (target: object) => {
    console.log('ClassDecorator Controller');
    console.log(target, controllerOptions, CONTROLLER_KEY);
    console.log('\n');
    // container.registerClass(CONTROLLER_KEY, target, controllerOptions);
  };
}
