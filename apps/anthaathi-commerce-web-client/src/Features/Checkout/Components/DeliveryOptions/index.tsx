import { useStyletron } from '@anthaathi/solid-styletron';
import { SelectOption } from '~/Features/Core/Components/SelectOption';

export function DeliveryOptions() {
  const [css, $theme] = useStyletron();
  return (
    <>
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
    </>
  );
}
