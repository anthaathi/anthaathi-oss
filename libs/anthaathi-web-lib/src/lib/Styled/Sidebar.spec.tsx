import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SidebarItem, SidebarItemLink } from './Sidebar';

describe('Sidebar', () => {
  it('should render the sidebar', async () => {
    const items = render(
      <SidebarItem
        title="title"
        action={
          <button type="button" data-testid="hello">
            Hello world
          </button>
        }
      >
        test
      </SidebarItem>,
    );

    userEvent.click(items.getByTestId('hello'));

    expect(items.getByTestId('sidebar-title')).toMatchSnapshot();

    expect(
      items
        .getByTestId('sidebar-title')
        .attributes.getNamedItem('aria-expanded')?.value,
    ).toBe('false');

    userEvent.click(items.getByTestId('sidebar-title'));

    expect(
      items
        .getByTestId('sidebar-title')
        .attributes.getNamedItem('aria-expanded')?.value,
    ).toBe('true');
  });

  it('should expand when press enter', () => {
    const func = jest.fn().mockImplementation(() => {});

    const items = render(
      <SidebarItem
        title="title"
        action={
          <button type="button" data-testid="hello">
            Hello world
          </button>
        }
      >
        <SidebarItemLink data-testid="tobeclicked" onClick={func}>
          TTest
        </SidebarItemLink>
      </SidebarItem>,
    );

    const ele = items.getByTestId('sidebar-title');

    ele.focus();

    userEvent.keyboard('e');

    expect(
      items
        .getByTestId('sidebar-title')
        .attributes.getNamedItem('aria-expanded')?.value,
    ).toBe('false');

    userEvent.keyboard('{enter}');

    expect(
      items
        .getByTestId('sidebar-title')
        .attributes.getNamedItem('aria-expanded')?.value,
    ).toBe('true');

    items.getByTestId('tobeclicked').focus();

    userEvent.keyboard('{enter}');

    expect(func).toBeCalledTimes(1);

    userEvent.keyboard('e');

    expect(func).toBeCalledTimes(1);

    userEvent.click(items.getByTestId('tobeclicked'));

    expect(func).toBeCalledTimes(2);
  });
});
