import { useStyletron } from '@anthaathi/solid-styletron';

export const RadioButtonLabel = ({
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

export function PaymentOptions() {
  const [css, $theme] = useStyletron();
  return (
    <>
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
          Select Payment Method
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
    </>
  );
}
