import { styled, useStyletron } from 'baseui';
import { Button, KIND, SIZE } from 'baseui/button';
import { Menu } from 'baseui/icon';
import { Delete } from 'baseui/icon';
import { useRecoilState } from 'recoil';
import { headerOpenAtom } from './atom';
import { ToolbarTitle } from '../Toolbar/styled';
import { Link } from 'react-router-dom';
import { Toolbar } from '../Toolbar';

export const Header = styled('header', ({ $theme }) => ({
  boxShadow: $theme.lighting.shadow500,
  height: '48px',
  paddingLeft: $theme.sizing.scale400,
  paddingRight: $theme.sizing.scale400,
  position: 'fixed',
  top: '0px',
  left: 0,
  right: 0,
  backgroundColor: $theme.colors.primaryHeaderA,
  zIndex: 1,
}));

export const HeaderWrapper = styled('div', ({ $theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  height: '48px',
  maxWidth: $theme.sizing.maxAppWidth,
  width: '100%',
  margin: '0 auto',
}));

export function HeaderToggle() {
  const [headerOpen, setHeaderOpen] = useRecoilState(headerOpenAtom);
  const [, $theme] = useStyletron();

  return (
    <div>
      <Toolbar>
        <Button
          kind={KIND.secondary}
          size={SIZE.compact}
          $style={{
            width: '36px',
            height: '36px',
            padding: '0px',
            backgroundColor: $theme.colors.primaryHeaderB,
            ':hover': { backgroundColor: $theme.colors.primaryHeaderB },
          }}
          onClick={() => setHeaderOpen((prev) => !prev)}
        >
          {!headerOpen && <Menu color="#fff" size={20} />}
          
          {headerOpen && <Delete color="#fff" size={20} />}
        </Button>
        <ToolbarTitle $as={Link} to="/">
          Anthaathi CRM
        </ToolbarTitle>
      </Toolbar>
    </div>
  );
}
