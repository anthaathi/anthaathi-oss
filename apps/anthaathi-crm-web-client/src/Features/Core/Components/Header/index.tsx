import { styled, useStyletron } from 'baseui';
import { Button, KIND, SIZE } from 'baseui/button';
import { Delete, Menu } from 'baseui/icon';
import { useRecoilState } from 'recoil';
import { headerOpenAtom } from './atom';
import { ToolbarTitle } from '../Toolbar/styled';
import { Link } from 'react-router-dom';
import { Toolbar } from '../Toolbar';
import { useState } from 'react';

export const Header = styled('header', ({ $theme }) => ({
  boxShadow: $theme.lighting.shadow500,
  height: '48px',
  paddingLeft: $theme.sizing.scale500,
  paddingRight: $theme.sizing.scale500,
  position: 'fixed',
  top: '0px',
  left: 0,
  right: 0,
  backgroundColor: $theme.colors.primaryHeaderA,
  zIndex: 10,
}));

export const HeaderWrapper = styled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  height: '48px',
  width: '100%',
}));

export function HeaderToggle() {
  const [headerOpen, setHeaderOpen] = useRecoilState(headerOpenAtom);
  const [, $theme] = useStyletron();

  const [isHovering, setIsHovering] = useState(false);

  return (
    <Toolbar>
      <Button
        kind={KIND.secondary}
        size={SIZE.compact}
        onMouseOver={() => {
          setIsHovering(true);
        }}
        onMouseOut={() => {
          setIsHovering(false);
        }}
        $style={{
          width: '36px',
          height: '36px',
          paddingLeft: '0px',
          paddingRight: '0px',
          paddingTop: '0px',
          paddingBottom: '0px',
          backgroundColor: $theme.colors.primaryHeaderB,
          ':hover': { backgroundColor: $theme.colors.primaryHeaderB },
        }}
        onClick={() => setHeaderOpen((prev) => !prev)}
      >
        {headerOpen && isHovering ? (
          <Delete color="#fff" size={20} />
        ) : (
          <Menu color="#fff" size={20} />
        )}
      </Button>
      <ToolbarTitle $as={Link} to="/">
        Anthaathi CRM
      </ToolbarTitle>
    </Toolbar>
  );
}
