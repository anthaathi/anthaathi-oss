import { useStyletron } from '@anthaathi/solid-styletron';
import { FormControl } from '~/Features/Core/Components/FormControl';
import { Input } from '~/Features/Core/Components/Input';
import { SelectOption } from '~/Features/Core/Components/SelectOption';

export default function AddEditAddress() {
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
          <FormControl
            label="Company name"
            for="companyName"
            $override={{
              Root: {
                $style: {
                  width: '100%',
                },
              },
            }}
          >
            <Input
              placeholder="Enter company name"
              id="companyName"
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
            label="Phone"
            for="phone"
            $override={{
              Root: {
                $style: {
                  width: '100%',
                },
              },
            }}
          >
            <Input
              placeholder="Enter phone"
              id="phone"
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
            label="Apartment"
            for="apartment"
            $override={{
              Root: {
                $style: {
                  width: '100%',
                },
              },
            }}
          >
            <Input
              placeholder="Enter apartment"
              id="apartment"
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
            label="Address"
            for="address"
            $override={{
              Root: {
                $style: {
                  width: '100%',
                },
              },
            }}
          >
            <Input
              placeholder="Enter address"
              id="address"
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
          <SelectOption
            label="Emirate"
            options={[
              {
                title: 'Abu Dhabi',
                value: '1',
              },
              {
                title: 'Ajman',
                value: '2',
              },
              {
                title: 'Alain',
                value: '3',
              },
              {
                title: 'Dubai',
                value: '4',
              },
              {
                title: 'Fujairah',
                value: '5',
              },
              {
                title: 'Sharjah',
                value: '6',
              },
            ]}
          />
          <FormControl
            label="Area"
            for="area"
            $override={{
              Root: {
                $style: {
                  width: '100%',
                },
              },
            }}
          >
            <Input
              placeholder="Enter area"
              id="area"
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
        <div
          class={css({
            marginTop: $theme.sizing.scale900,
            [$theme.mediaQuery?.md || '']: {
              width: '240px',
            },
            width: '100%',
            textAlign: 'center',
            backgroundColor: '#118b44',
            paddingTop: '12px',
            paddingBottom: '12px',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '18px',
            borderRadius: '4px',
            ':hover': { cursor: 'pointer' },
          })}
        >
          Save Changes
        </div>
      </form>
    </div>
  );
}
