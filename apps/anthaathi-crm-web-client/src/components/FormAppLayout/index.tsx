import {AppContent} from '@anthaathi/web-lib';
import {useStyletron} from 'baseui';
import {Block} from 'baseui/block';
import {HeadingMedium, HeadingXSmall} from 'baseui/typography';
import * as React from 'react';
import {useIntl} from 'react-intl';
import {Cell, Grid} from 'baseui/layout-grid';

export interface FormAppLayoutProps {
  title: React.ReactNode;
  subTitle: React.ReactNode;
  children: React.ReactNode;
}

export function FormAppLayout({title, subTitle, children}: FormAppLayoutProps) {
  const [, $theme] = useStyletron();
  const intl = useIntl();

  return (
    <AppContent $small={false}>
      <Grid>
        <Cell span={12}>
          <HeadingMedium marginTop="scale800" marginBottom="scale200">
            {title}
          </HeadingMedium>
          <HeadingXSmall
            marginTop="scale200"
            marginBottom="scale800"
            color="#333"
          >
            {subTitle}
          </HeadingXSmall>

          <Block
            $style={{
              borderBottomColor: $theme.colors.backgroundTertiary,
              borderBottomWidth: '.1px',
              borderBottomStyle: 'solid',
              width: '100%',
              marginTop: $theme.sizing.scale200,
              marginBottom: $theme.sizing.scale400,
              maxWidth: '1400px',
            }}
          />
        </Cell>
      </Grid>

      <Block
        as="main"
        $style={{
          paddingLeft: $theme.sizing.scale800,
          paddingRight: $theme.sizing.scale800,
        }}
      >
        {children}
      </Block>
    </AppContent>
  );
}
