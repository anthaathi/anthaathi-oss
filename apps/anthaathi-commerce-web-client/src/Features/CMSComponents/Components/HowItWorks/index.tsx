import { Grid } from '~/Features/Core/Components/Grid';
import { useStyletron } from '@anthaathi/solid-styletron';
import {
  IconFileSqlLarge,
  IconIdCardOLarge,
  IconTruckLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { JSX } from 'solid-js';

export function HowItWorks() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        paddingTop: $theme.sizing.scale1000,
        paddingBottom: $theme.sizing.scale1000,
        borderTop: '1px solid #e8e8e1',
        borderBottom: '1px solid #e8e8e1',
      })}
    >
      <div
        class={css({
          maxWidth: $theme.sizing.maxWidth,
          marginLeft: 'auto',
          marginRight: 'auto',
        })}
      >
        <h2
          class={css({
            margin: '0 auto',
            paddingBottom: $theme.sizing.scale500,
            textAlign: 'center',
            fontWeight: 400,
            fontSize: '36px',
            lineHeight: '1.2',
            letterSpacing: '0.0em',
          })}
        >
          How It Works
        </h2>
      </div>
      <Grid
        $override={{
          Root: {
            style: {
              maxWidth: $theme.sizing.maxWidth,
              marginLeft: 'auto',
              marginRight: 'auto',
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
        <HowItWorksCell
          src={''}
          icon={<IconIdCardOLarge height="70px" width="70px" />}
          title="Register"
        />
        <HowItWorksCell
          src={''}
          icon={<IconFileSqlLarge height="70px" width="70px" />}
          title="Select Products & Place Order"
        />
        <HowItWorksCell
          src={''}
          icon={<IconTruckLarge height="70px" width="70px" />}
          title="Schedule Delivery"
        />
      </Grid>
    </div>
  );
}

interface HowItWorksProps {
  src: string;
  title: string;
  icon: JSX.Element;
}

export function HowItWorksCell(props: HowItWorksProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: $theme.sizing.scale500,
      })}
    >
      <div
        class={css({
          margin: '0 auto',
          textAlign: 'center',
          paddingBottom: $theme.sizing.scale500,
        })}
      >
        {props.icon}
      </div>
      <div
        class={css({
          margin: '0 auto',
          paddingBottom: $theme.sizing.scale500,
          fontWeight: 300,
          fontSize: '27px',
          lineHeight: '1.2',
          letterSpacing: '0.0em',
        })}
      >
        {props.title}
      </div>
    </div>
  );
}
