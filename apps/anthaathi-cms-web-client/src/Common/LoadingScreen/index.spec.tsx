import * as React from 'react';
import renderer from 'react-test-renderer';
import LoadingScreen from './index';

describe('LoadingScreen', () => {
  it('should render the component', () => {
    const tree = renderer.create(<LoadingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
