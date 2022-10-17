import { useStyletron } from '@anthaathi/solid-styletron';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import { Img } from '~/Features/Core/Components/Image';

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
        maxWidth: $theme.sizing.maxWidth,
        margin: '0 auto',
        width: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
      })}
    >
      <div
        class={css({
          backgroundColor: '#f8f8f8',
        })}
      >
        <div
          class={css({
            display: 'flex',
            alignItems: 'center',
            margin: '0 auto',
            width: '100%',
            maxWidth: $theme.sizing.maxWidth,
            [$theme.mediaQuery?.xl || '']: {
              flexDirection: 'row',
            },
            [$theme.mediaQuery?.lg || '']: {
              flexDirection: 'row',
            },
            [$theme.mediaQuery?.md || '']: {
              flexDirection: 'row',
            },
            [$theme.mediaQuery?.sm || '']: {
              flexDirection: 'row',
            },
            [$theme.mediaQuery?.xs || '']: {
              flexDirection: 'column-reverse',
            },
          })}
        >
          <div
            class={css({
              [$theme.mediaQuery?.xs || '']: {
                marginTop: '10px',
                marginBottom: '20px',
                width: '100%',
              },
            })}
          >
            <div
              class={css({
                marginLeft: '80px',
                [$theme.mediaQuery?.lg || '']: {
                  marginLeft: '80px',
                  marginRight: '80px',
                  textAlign: 'left',
                  display: 'block',
                },
                [$theme.mediaQuery?.md || '']: {
                  marginRight: '40px',
                  marginLeft: '40px',
                  textAlign: 'left',
                },
                [$theme.mediaQuery?.sm || '']: {
                  marginRight: '20px',
                  marginLeft: '20px',
                  textAlign: 'left',
                  display: 'block',
                },
                [$theme.mediaQuery?.xs || '']: {
                  marginRight: '30px',
                  marginLeft: '30px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                },
              })}
            >
              <h1
                class={css([
                  $theme.typography.DisplaySmall,
                  {
                    margin: 0,
                    paddingBottom: $theme.sizing.scale600,
                  },
                ])}
              >
                {props.title}
              </h1>
              <h3
                class={css([
                  $theme.typography.LabelLarge,
                  {
                    margin: 0,
                    paddingBottom: $theme.sizing.scale800,
                  },
                ])}
              >
                {props.subtitle}
              </h3>
              <Button
                $kind={Kind.Secondary}
                $size={Size.Large}
                onClick={props.handlePress}
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
              </Button>
            </div>
          </div>
          <Img
            src={props.image}
            alt="image"
            $override={{
              Root: {
                $style: {
                  backgroundColor: '#fff',
                  objectFit: 'contain',
                  maxWidth: '100%',
                  [$theme.mediaQuery?.xl || '']: {
                    height: '520px',
                    width: '60%',
                    paddingLeft: '10%',
                    paddingRight: '10%',
                  },
                  [$theme.mediaQuery?.lg || '']: {
                    height: '520px',
                  },
                  [$theme.mediaQuery?.md || '']: {
                    height: '420px',
                  },
                  [$theme.mediaQuery?.sm || '']: {
                    height: '420px',
                    width: '100%',
                  },
                  [$theme.mediaQuery?.xs || '']: {
                    height: '320px',
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
