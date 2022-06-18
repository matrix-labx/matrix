export enum Scope {
  SINGLETON = 'singleton',
  TRANSIENT = 'transient',
  REQUEST = 'request'
}

export interface ScopeOptions {
  scope?: Scope;
}
