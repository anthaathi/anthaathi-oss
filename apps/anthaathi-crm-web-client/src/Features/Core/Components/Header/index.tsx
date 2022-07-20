import { styled } from 'baseui';
import { Button, KIND, SIZE } from 'baseui/button';
import { Menu } from 'baseui/icon';
import React from 'react';
import { useRecoilState } from 'recoil';
import { headerOpenAtom } from './atom';

export const Header = styled('header', ({ $theme }) => ({
  boxShadow: $theme.lighting.shadow500,
  height: '48px',
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  paddingLeft: $theme.sizing.scale400,
  paddingRight: $theme.sizing.scale400,
  position: 'fixed',
  top: '48px',
  left: 0,
  right: 0,
}));

export function HeaderToggle() {
  const [, setHeaderOpen] = useRecoilState(headerOpenAtom);

  return (
    <Button
      kind={KIND.secondary}
      size={SIZE.compact}
      onClick={() => setHeaderOpen((prev) => !prev)}
    >
      <Menu />
    </Button>
  );
}
