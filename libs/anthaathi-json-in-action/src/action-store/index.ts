/* eslint-disable no-unused-vars */
export type SetDataAction<T = any> = (
  kind: string,
  newData: SetNewData<T> | any,
) => void;
export type SetNewData<T> = (prevData: T) => T;
export type ActionFunction = (_: Record<string, any>) => void;
export type DepsToUpdate = (prevDeps: string[]) => string[];
/* eslint-enable no-unused-vars */

export class ActionStore {
  private dataStore: Record<string, any> = {};

  private functionStore: Record<string, ActionFunction> = {};

  private functionDeps: Record<string, string[]> = {};

  setData<T = any>(id: string, data: T) {
    const functionToCall = Object.entries(this.functionDeps)
      .filter((res) => res[1].indexOf(id) !== -1)
      ?.map((res) => res[0]);

    this.dataStore[id] = data;

    functionToCall.forEach((methodName) => {
      this.call(methodName);
    });
  }

  getData<T>(id: string): T {
    return this.dataStore[id];
  }

  registerAction(
    method: string,
    functionToCall: ActionFunction,
    deps: string[],
  ) {
    this.functionStore[method] = functionToCall;
    this.functionDeps[method] = deps;
  }

  setDependency(method: string, deps: string[] | DepsToUpdate) {
    if (!this.functionStore[method]) {
      throw new Error('Function is not registered as action');
    }

    if (typeof deps === 'function') {
      this.functionDeps[method] = deps(this.functionDeps[method]);
      return;
    }

    this.functionDeps[method] = deps;
  }

  call(method: string) {
    this.functionStore[method]?.call(this, this.dataStore);
  }
}

export default ActionStore;
