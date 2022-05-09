import { render } from '@testing-library/react';
import React from 'react';
import DefaultLayout from './index';
import { SidebarMenuIconButton } from '../../Styled/SidebarMenu';
import { WebProvider } from '../../../public';

describe('DefaultLayout', () => {
  it('should render the layout', () => {
    const element = render(
      <WebProvider lang="en-US">
        <DefaultLayout
          sidebarMenuItem={
            <SidebarMenuIconButton
              icon={<div />}
              title="Home"
              tooltip="Home"
              onClick={() => {}}
            />
          }
        >
          test
        </DefaultLayout>
      </WebProvider>,
    );

    expect(element.queryByText('Skip to content')).toBeTruthy();

    expect(element.container).toMatchSnapshot();
  });
});
