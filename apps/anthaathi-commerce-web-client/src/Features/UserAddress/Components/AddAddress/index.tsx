import { useStyletron } from '@anthaathi/solid-styletron';
import { Input } from '~/Features/Core/Components/Input';
import { Select } from 'solid-headless';
import { SelectOption } from '~/Features/Core/Components/SelectOption';

export function AddAddress() {
  const [css, $theme] = useStyletron();

  return (
    <div>
      <form action="">
        <div class={css({ display: 'flex', flexDirection: 'column' })}>
          <div>
            <p
              class={css({
                ...$theme.typography.LabelMedium,
                fontWeight: 'bold',
                color: '#000',
                marginTop: $theme.sizing.scale300,
                marginBottom: $theme.sizing.scale500,
              })}
            >
              Firt Name
            </p>
            <Input
              placeholder="Enter first name"
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
              Last Name
            </p>
            <Input
              placeholder="Enter last name"
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
              {
                title: 'Address 2',
                value: '2',
              },
            ]}
          />
        </div>
      </form>
    </div>
  );
}
