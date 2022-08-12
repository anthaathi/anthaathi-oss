import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { HeadingMedium, HeadingSmall, LabelLarge } from 'baseui/typography';
import React from 'react';

function PageHeader() {
  const [, $theme] = useStyletron();
  return (
    <>
      <Block
        display="flex"
        alignItems="center"
        marginTop="scale500"
        marginLeft="scale500"
        marginBottom="scale500"
      >
        <span
          style={{
            backgroundColor: '#0076DF',
            color: '#fff',
            padding: '10px',
            borderRadius: '4px',
          }}
          className="fa fa-area-chart fa-2x"
          aria-hidden="true"
        />
        <HeadingSmall
          $style={{
            fontFamily: $theme.typography.headingFontFamily,
            marginLeft: '10px',
            color: '#242424',
            marginBottom: '0px',
            marginTop: '0px',
          }}
        >
          Dashboard
        </HeadingSmall>
      </Block>
      <div
        style={{
          paddingBottom: '1px',
          width: '100%',
          backgroundColor: $theme.colors.borderTransparent,
          marginBottom: $theme.sizing.scale400,
        }}
      />
    </>
  );
}

export default PageHeader;
