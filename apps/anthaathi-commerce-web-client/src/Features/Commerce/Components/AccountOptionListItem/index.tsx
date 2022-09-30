import {useStyletron} from "@anthaathi/solid-styletron";
import {Button} from "solid-headless";

export interface AccountOptionListItemProps {
  name: string;
  onClick: () => void;
}

export function AccountOptionListItem(props: AccountOptionListItemProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        paddingBottom: $theme.sizing.scale500,
      })}
    >
      <Button
        onClick={props.onClick}
        class={css({
          width: '100%',
          height: '100%',
          padding: $theme.sizing.scale400,
          border: '0px solid',
          fontSize: '16px',
          fontWeight: 500,
          borderBottom: '3px solid transparent',
          ':hover': {
            borderBottom: '3px solid green',
            color: 'green',
          },
          textAlign: 'left',
          backgroundColor: 'transparent',
        })}
      >
        {props.name}
      </Button>
    </div>
  );
}
