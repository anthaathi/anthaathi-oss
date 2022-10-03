import { useStyletron } from '@anthaathi/solid-styletron';
import { Input } from '~/Features/Core/Components/Input';
import { SelectOption } from '~/Features/Core/Components/SelectOption';

export default function CheckoutPage() {
  const [css, $theme] = useStyletron();
  return (
    <div>
      <div
        class={css({
          margin: '0 auto',
          width: $theme.sizing.maxWidth,
          maxWidth: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
          marginTop: $theme.sizing.scale800,
          marginBottom: $theme.sizing.scale800,
        })}
      >
        <SelectOption
          label="Delivery Address"
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
            Select Date
          </p>
          <input
            type="date"
            class={css([
              {
                ...$theme.typography.ParagraphSmall,
                paddingLeft: $theme.sizing.scale400,
                backgroundColor: '#efefef',
                width: `calc(100% - ${$theme.sizing.scale400})`,
                height: '48px',
                border: '1px solid transparent',
                borderRadius: '4px',
              },
            ])}
          />
        </div>
        <SelectOption
          label="Select Timeslot"
          options={[
            {
              title: '09am-12pm',
              value: '1',
            },
            {
              title: '01pm-05pm',
              value: '2',
            },
            {
              title: '05am-10pm',
              value: '3',
            },
          ]}
        />
        <SelectOption
          label="Select Frequency"
          options={[
            {
              title: 'One time',
              value: '1',
            },
            {
              title: 'Weekly',
              value: '2',
            },
            {
              title: 'Monthly',
              value: '3',
            },
          ]}
        />
        <div
          class={css({
            marginTop: $theme.sizing.scale500,
          })}
        >
          <p
            class={css({
              ...$theme.typography.LabelMedium,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 0,
              marginBottom: $theme.sizing.scale300,
            })}
          >
            Comments
          </p>

          <Input
            placeholder="Add a note to your order"
            type="comment"
            id="comment"
            width="100%"
            $overrides={{
              Root: { style: { width: '100%', height: '120px' } },
            }}
          />
        </div>

        <div
          class={css({
            marginTop: $theme.sizing.scale500,
          })}
        >
          <p
            class={css({
              ...$theme.typography.LabelMedium,
              fontWeight: 'bold',
              color: '#000',
              marginTop: 0,
              marginBottom: $theme.sizing.scale300,
            })}
          >
            Payment Method
          </p>
          <div
            class={css({
              border: '1px solid #F0F0F0',
              borderRadius: '2px',
              backgroundColor: '#fff',
              paddingLeft: $theme.sizing.scale600,
              paddingRight: $theme.sizing.scale600,
              paddingTop: $theme.sizing.scale500,
              paddingBottom: $theme.sizing.scale500,
            })}
          >
            <RadioButtonLabel
              label="Credit / Debit Card"
              name="card"
              value="card"
            />
            <RadioButtonLabel label="Cash on delivery" name="cod" value="cod" />
            <RadioButtonLabel label="Wallet" name="wallet" value="wallet" />
          </div>
        </div>
        <div
          class={css({
            marginTop: $theme.sizing.scale700,
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
          Purchase
        </div>
      </div>
    </div>
  );
}

const RadioButtonLabel = ({
  label,
  name,
  value,
}: {
  label: string;
  name: string;
  value: string;
}) => {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        marginTop: $theme.sizing.scale500,
        paddingBottom: $theme.sizing.scale500,
        display: 'flex',
        alignItems: 'center',
        border: '0px solid #E3E2E7',
        borderBottomWidth: '1px',
      })}
    >
      <input
        type="radio"
        name={name}
        value={value}
        id={name}
        class={css({
          ':focus': {
            color: 'red',
            backgroundColor: 'green',
          },
        })}
      />
      <label
        for={name}
        class={css({
          ...$theme.typography.LabelMedium,
          fontWeight: 'normal',
          color: '#000',
          marginLeft: $theme.sizing.scale400,
        })}
      >
        {label}
      </label>
    </div>
  );
};
