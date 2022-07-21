import { LabelMedium } from 'baseui/typography';
import { FlexFill } from '../../../Core/Components/FlexFill';
import { Button, KIND, SIZE } from 'baseui/button';
import { Block } from 'baseui/block';
import { useStyletron } from 'baseui';
import { Icon } from '../../../Core/Components/Icon';

export interface PeopleSelectorProps {
  label: string;
}

export function SidebarSelector({ label }: PeopleSelectorProps) {
  const [, $theme] = useStyletron();

  return (
    <div>
      <Block
        display="flex"
        alignContent="center"
        placeContent="center"
        marginBottom="scale200"
        alignItems="center"
        $style={{ cursor: 'pointer' }}
        onClick={() => {}}
      >
        <LabelMedium
          $style={{ fontFamily: $theme.typography.headingFontFamily }}
        >
          {label}
        </LabelMedium>

        <FlexFill />

        <Button size={SIZE.mini} kind={KIND.tertiary}>
          <Icon icon="gear" />
        </Button>
      </Block>
    </div>
  );
}
