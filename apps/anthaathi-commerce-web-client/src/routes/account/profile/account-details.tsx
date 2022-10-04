import { useStyletron } from '@anthaathi/solid-styletron';
import { FormControl } from '~/Features/Core/Components/FormControl';
import { Input } from '~/Features/Core/Components/Input';
import { SelectOption } from '~/Features/Core/Components/SelectOption';

export default function AccountDetails() {
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
            label="Display name"
            for="displayName"
            $override={{
              Root: {
                $style: {
                  width: '100%',
                },
              },
            }}
          >
            <Input
              placeholder="Enter display name"
              id="displayName"
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
            label="Email address"
            for="emailAddress"
            $override={{
              Root: {
                $style: {
                  width: '100%',
                },
              },
            }}
          >
            <Input
              placeholder="Enter email address"
              id="emailAddress"
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
            label="Phone number"
            for="phoneNumber"
            $override={{
              Root: {
                $style: {
                  width: '100%',
                },
              },
            }}
          >
            <Input
              placeholder="Enter phone number"
              id="phoneNumber"
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
            label="Gender"
            options={[
              {
                title: 'Male',
                value: 'male',
              },
              {
                title: 'Female',
                value: 'female',
              },
            ]}
          />

          <FormControl
            label="Nationality"
            for="nationality"
            $override={{
              Root: {
                $style: {
                  marginTop: $theme.sizing.scale500,
                  width: '100%',
                },
              },
            }}
          >
            <Input
              placeholder="Enter nationality"
              id="nationality"
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
