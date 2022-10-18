import { Grid } from '~/Features/Core/Components/Grid';
import { useStyletron } from '@anthaathi/solid-styletron';
import { For, JSX } from 'solid-js';

export interface HowItWorksProps {
  title: string;
  subtitle: string;
  list: { title: string; icon: JSX.Element }[];
}

export function HowItWorks(props: HowItWorksProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        margin: '0 auto',
        width: $theme.sizing.maxWidth,
        maxWidth: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        paddingLeft: $theme.sizing.scale500,
        paddingRight: $theme.sizing.scale500,
      })}
    >
      <div
        class={css({
          paddingTop: $theme.sizing.scale800,
          paddingBottom: $theme.sizing.scale800,
          borderTop: '1px solid #e8e8e1',
          borderBottom: '1px solid #e8e8e1',
        })}
      >
        <h2
          class={css({
            marginTop: $theme.sizing.scale500,
            marginBottom: $theme.sizing.scale500,
            textAlign: 'center',
            fontWeight: $theme.typography.font550.fontWeight,
            fontSize: $theme.typography.font850.fontSize,
          })}
        >
          {props.title}
        </h2>
        <h4
          class={css({
            marginTop: $theme.sizing.scale300,
            marginBottom: $theme.sizing.scale500,
            textAlign: 'center',
            fontWeight: $theme.typography.font400.fontWeight,
            fontSize: $theme.typography.font550.fontSize,
          })}
        >
          {props.subtitle}
        </h4>
        <Grid
          $override={{
            Root: {
              style: {
                paddingTop: $theme.sizing.scale800,
                paddingBottom: $theme.sizing.scale500,
                paddingLeft: $theme.sizing.scale500,
                paddingRight: $theme.sizing.scale500,
                gridRowGap: '24px',
                gridColumnGap: '24px',
              },
            },
          }}
          columns={[1, 1, 3, 3]}
        >
          <For each={props.list} fallback={<div>Loading...</div>}>
            {(item) => <HowItWorksCell icon={item.icon} title={item.title} />}
          </For>
        </Grid>
      </div>
    </div>
  );
}

export function HowItWorksCell(props: { title: string; icon: JSX.Element }) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        padding: $theme.sizing.scale500,
      })}
    >
      <div
        class={css({
          justifyContent: 'center',
          display: 'flex',
        })}
      >
        {props.icon}
      </div>
      <div
        class={css({
          marginTop: $theme.sizing.scale600,
          marginBottom: $theme.sizing.scale500,
          textAlign: 'center',
          fontWeight: $theme.typography.font400.fontWeight,
          fontSize: $theme.typography.font650.fontSize,
        })}
      >
        {props.title}
      </div>
    </div>
  );
}
