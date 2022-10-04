import { useStyletron } from '@anthaathi/solid-styletron';
import { Input } from '~/Features/Core/Components/Input';
import { SelectOption } from '~/Features/Core/Components/SelectOption';
import { FormControl } from '~/Features/Core/Components/FormControl';

export function AddAddress() {
  const [css, $theme] = useStyletron();

  return (
    <div>
      <form action="">
        <div class={css({ display: 'flex', flexDirection: 'column' })}>
          <div
            class={css({
              [$theme.mediaQuery?.md || '']: {
                display: 'flex',
              },
              width: '100%',
            })}
          >
            <FormControl
              label="First name"
              for="firstName"
              $override={{
                Root: {
                  $style: {
                    [$theme.mediaQuery?.md || '']: {
                      width: `calc(100% - ${$theme.sizing.scale400})`,
                      marginRight: $theme.sizing.scale400,
                    },
                  },
                },
              }}
            >
              <Input
                placeholder="Enter first name"
                id="firstName"
                $overrides={{
                  Root: {
                    style: {
                      width: '100%',
                      height: '48px',
                      marginBottom: $theme.sizing.scale600,
                    },
                  },
                }}
              />
            </FormControl>
            <FormControl
              label="Last name"
              for="lastName"
              $override={{
                Root: {
                  $style: {
                    [$theme.mediaQuery?.md || '']: {
                      width: `calc(100% - ${$theme.sizing.scale400})`,
                      marginLeft: $theme.sizing.scale400,
                    },  
                  },
                },
              }}
            >
              <Input
                placeholder="Enter last name"
                id="lastName"
                $overrides={{
                  Root: {
                    style: {
                      width: '100%',
                      height: '48px',
                      marginBottom: $theme.sizing.scale600,
                    },
                  },
                }}
              />
            </FormControl>
          </div>

          <div>
            <p
              class={css({
                ...$theme.typography.LabelMedium,
                fontWeight: 'bold',
                color: '#000',
                marginTop: $theme.sizing.scale500,
                marginBottom: $theme.sizing.scale300,
              })}
            >
              Mobile Number
            </p>
            <Input
              placeholder="Enter mobile number"
              $overrides={{
                Root: {
                  style: {
                    width: '100%',
                    height: '48px',
                    marginBottom: $theme.sizing.scale600,
                  },
                },
              }}
            />
          </div>
          <SelectOption
            label="Select Address"
            options={[
              {
                title: 'Address 1',
                value: '1',
              },
            ]}
          />
        </div>
      </form>
    </div>
  );
}
