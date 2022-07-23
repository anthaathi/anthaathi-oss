import {
  Header,
  HeaderToggle,
  HeaderWrapper,
} from '../Features/Core/Components/Header';
import React from 'react';
import { FlexFill } from '../Features/Core/Components/FlexFill';
import { Button, SIZE } from 'baseui/button';
import { useStyletron } from 'baseui';
import { AppWrapper } from '../Features/Core/Components/AppWrapper';
import { Link } from 'react-router-dom';

export default function CustomerPage() {
  const [, $theme] = useStyletron();

  return (
    <>
      <Header>
        <HeaderWrapper>
          <HeaderToggle />
          <FlexFill />

          <Button
            $style={{ fontFamily: $theme.typography.headingFontFamily }}
            size={SIZE.compact}
            $as={Link}
            to="/customer/new"
          >
            NEW CUSTOMER
          </Button>
        </HeaderWrapper>
      </Header>

      <AppWrapper>Hello world</AppWrapper>
    </>
  );
}
