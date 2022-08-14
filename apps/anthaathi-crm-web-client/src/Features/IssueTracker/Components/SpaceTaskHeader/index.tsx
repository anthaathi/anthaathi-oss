import { useStyletron } from 'baseui';
import { Block } from 'baseui/block';
import { Button, KIND } from 'baseui/button';
import { HeadingLarge, LabelMedium } from 'baseui/typography';
import React from 'react';

export interface SpaceTaskHeaderProps {
  title: string;
  subtitle: string;
  onClick1?: () => void;
  onClick2?: () => void;
}

function SpaceTaskHeader({
  title,
  subtitle,
  onClick1,
  onClick2,
}: SpaceTaskHeaderProps) {
  const [, $theme] = useStyletron();
  return (
    <div>
      <Block
        display="flex"
        width="775px"
        height="60px"
        justifyContent="space-between"
        alignItems="center"
      >
        <Block>
          <HeadingLarge
            $style={{
              fontFamily: $theme.typography.headingFontFamily,
              marginTop: '5px',
              marginBottom: '5px',
            }}
          >
            {title}
          </HeadingLarge>
          <LabelMedium>{subtitle}</LabelMedium>
        </Block>
        <Block>
          <Button
            onClick={onClick1}
            kind={KIND.tertiary}
            overrides={{
              BaseButton: {
                style: () => ({
                  backgroundColor: '#EAEAEA',
                }),
              },
            }}
          >
            <span className="fa fa-check" aria-hidden="true" />
          </Button>
          <Button
            onClick={onClick2}
            kind={KIND.tertiary}
            overrides={{
              BaseButton: {
                style: () => ({
                  backgroundColor: '#EAEAEA',
                  marginLeft: '10px',
                }),
              },
            }}
          >
            <span className="fa fa-ellipsis-h" aria-hidden="true" />
          </Button>
        </Block>
      </Block>
    </div>
  );
}

export default SpaceTaskHeader;
