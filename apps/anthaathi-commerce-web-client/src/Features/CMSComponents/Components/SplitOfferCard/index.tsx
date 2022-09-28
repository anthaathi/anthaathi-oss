import { useStyletron } from '@anthaathi/solid-styletron';

export interface SplitCardOfferProps {
  title: string;
  subtitle: string;
  image: string;
  buttonTitle: string;
  handlePress?: () => void;
}

export function SplitOfferCard(props: SplitCardOfferProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        marginTop: '5px',
        marginBottom: '5px',
        backgroundColor: '#f8f8f8',
        display: 'flex',
        alignItems: 'center',
        [$theme.mediaQuery.xl]: {
          flexDirection: 'row',
        },
        [$theme.mediaQuery.lg]: {
          flexDirection: 'row',
        },
        [$theme.mediaQuery.md]: {
          flexDirection: 'row',
        },
        [$theme.mediaQuery.sm]: {
          flexDirection: 'row',
        },
        [$theme.mediaQuery.xs]: {
          flexDirection: 'column-reverse',
        },
      })}
    >
      <div
        class={css({
          [$theme.mediaQuery.xs]: {
            marginTop: '10px',
            marginBottom: '20px',
            width: '100%',
          },
        })}
      >
        <div
          class={css({
            marginLeft: '80px',
            [$theme.mediaQuery.lg]: {
              marginLeft: '80px',
              marginRight: '80px',
              textAlign: 'left',
              display: 'block',
            },
            [$theme.mediaQuery.md]: {
              marginRight: '40px',
              marginLeft: '40px',
              textAlign: 'left',
            },
            [$theme.mediaQuery.sm]: {
              marginRight: '20px',
              marginLeft: '20px',
              textAlign: 'left',
              display: 'block',
            },
            [$theme.mediaQuery.xs]: {
              marginRight: '30px',
              marginLeft: '30px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            },
          })}
        >
          <h1>{props.title}</h1>
          <h3>{props.subtitle}</h3>
          <div
            onclick={props.handlePress}
            class={css({
              textAlign: 'center',
              color: '#fff',
              paddingTop: '10px',
              paddingBottom: '10px',
              backgroundColor: '#000',
              width: '160px',
              fontWeight: 'bold',
              fontSize: '18px',
              borderRadius: '4px',
              ':hover': { cursor: 'pointer' },
            })}
          >
            {props.buttonTitle}
          </div>
        </div>
      </div>
      <img
        src={props.image}
        alt="image"
        class={css({
          backgroundColor: '#fff',
          [$theme.mediaQuery.xl]: {
            height: '520px',
            width: '60%',
            paddingLeft: '10%',
            paddingRight: '10%',
          },
          [$theme.mediaQuery.lg]: {
            height: '520px',
          },
          [$theme.mediaQuery.md]: {
            height: '420px',
          },
          [$theme.mediaQuery.sm]: {
            height: '420px',
          },
          [$theme.mediaQuery.xs]: {
            height: '320px',
            width: '100%',
          },
        })}
      />
    </div>
  );
}