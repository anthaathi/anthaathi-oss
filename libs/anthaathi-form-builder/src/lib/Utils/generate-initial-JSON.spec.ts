import generateInitialJSON from './generate-initial-JSON';

describe('Generate initial JSON', () => {
  it('should render the items', () => {
    const data = generateInitialJSON({
      type: 'object',
      properties: { kind: { type: 'string' }, abs: { type: 'object' } },
    });

    expect(data).toMatchSnapshot();
  });
});
