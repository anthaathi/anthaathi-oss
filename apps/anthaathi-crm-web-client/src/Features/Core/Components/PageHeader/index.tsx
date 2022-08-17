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
        paddingTop="scale500"
        paddingLeft="scale500"
        paddingBottom="scale500"
        marginBottom="scale600"
        $style={{
          borderBottomColor: $theme.colors.borderTransparent,
          borderBottomStyle: 'solid',
          borderBottomWidth: '1px',
          position: 'sticky',
          top: '48px',
          backgroundColor: $theme.colors.backgroundPrimary,
          zIndex: 1,
        }}
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
    </>
  );
}

export default PageHeader;
