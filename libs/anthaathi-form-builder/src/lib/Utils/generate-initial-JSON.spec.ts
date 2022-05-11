import generateInitialJSON from './generate-initial-JSON';

describe('Generate initial JSON', () => {
  it('should render the items', () => {
    const data = generateInitialJSON({
      type: 'object',
      properties: {
        kind: { type: 'string' },
        abs: { type: 'object' },
        test: { type: 'array' },
        test2: { type: 'number', default: 0 },
      },
    });

    expect(data).toMatchSnapshot();
  });
});
