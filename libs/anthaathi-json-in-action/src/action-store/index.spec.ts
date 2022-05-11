import Store from './index';

describe('ActionStore', () => {
  it('should store data into the store', () => {
    const store = new Store();
    const data = [];

    store.setData('something', data);
    expect(store.getData('something')).toBe(data);
  });

  it('should store return undefined when it is not there', () => {
    const store = new Store();
    expect(store.getData('something')).toBe(undefined);
  });

  it('should register action and when we call it should execute', () => {
    const store = new Store();

    const fnToCall = jest.fn().mockImplementation(() => {});

    store.registerAction('onInit', fnToCall, []);
    store.call('onInit');

    expect(fnToCall).toBeCalledTimes(1);
  });

  it('should register action and when we call it should execute', () => {
    const store = new Store();

    const fnToCall = jest.fn().mockImplementation(() => {});

    store.registerAction('onInit', fnToCall, ['somekinddata']);
    store.setData('somekinddata', { amazing: true });

    expect(fnToCall).toBeCalledTimes(1);
  });

  it('should register action and call when its deps get change', () => {
    const store = new Store();
    const fnToCall = jest.fn().mockImplementation(() => {});

    const deps = [];

    store.registerAction('onInit', fnToCall, deps);
    // @ts-ignore
    expect(store.functionDeps.onInit).toBe(deps);

    store.setData('something', ['test']);

    store.setDependency('onInit', ['something']);

    store.setData('something', ['test']);

    expect(fnToCall).toBeCalledTimes(1);

    store.setDependency('onInit', (prev) => [...prev, 'something2']);
  });

  it('should not get called when deps is not there', () => {
    const store = new Store();

    const fnToCall = jest.fn().mockImplementation(() => {});

    store.registerAction('onInit', fnToCall, []);

    store.setData('test', []);

    expect(fnToCall).toBeCalledTimes(0);
  });
});
