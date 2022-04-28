import * as React from 'react';
import { Block } from 'baseui/block';
import { HeadingMedium } from 'baseui/typography';
import { useIntl } from 'react-intl';
import { AppContent, FlexFill } from '@anthaathi/web-lib';
import UploadAssets from '../../Features/MediaLibrary/Components/UploadAssets';

export default function Media() {
  const intl = useIntl();

  return (
    <Block data-testid="media-wrapper">
      <AppContent>
        <Block
          display="flex"
          alignContent="center"
          placeContent="center"
          alignItems="center"
        >
          <HeadingMedium marginTop="scale800">
            {intl.formatMessage({
              defaultMessage: 'Media Library',
              id: 'rUiXzS',
            })}
          </HeadingMedium>

          <FlexFill />

          <UploadAssets />
        </Block>
        Page not found
      </AppContent>
    </Block>
  );
}
