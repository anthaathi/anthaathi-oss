import { FormControl } from 'baseui/form-control';
import { DatePicker } from 'baseui/datepicker';
import { Select } from 'baseui/select';
import { Button, KIND, SIZE } from 'baseui/button';
import { Link } from 'react-router-dom';
import { useStyletron } from 'baseui';
import { Radio, RadioGroup } from 'baseui/radio';
import { HeadingSmall, LabelSmall } from 'baseui/typography';
import { ReviewBlock } from '../../Features/ECommerce/Components/ReviewBlock';

export default function Shipping() {
  const [css] = useStyletron();

  return (
    <div>
      <ReviewBlock
        items={[
          {
            title: 'Contact',
            content: 'me@f22.dev',
          },
          {
            title: 'Ship to',
            content:
              'oaksokas, okok, Discovery Garden DU, United Arab Emirates',
          },
        ]}
      />

      <form action="">
        <HeadingSmall marginTop="scale600" marginBottom="scale600">
          Shipping Information
        </HeadingSmall>

        <FormControl label="Delivery date">
          <DatePicker placeholder="Delivery date" />
        </FormControl>
        <FormControl label="Time slot">
          <Select
            options={[
              { label: '09AM - 12PM', id: '09AM-12PM' },
              { label: '01PM - 05PM', id: '01PM-05PM' },
              { label: '05PM - 10PM', id: '05PM-10PM' },
            ]}
          />
        </FormControl>

        <FormControl label="Shipping Method">
          <RadioGroup>{[<Radio>Free</Radio>]}</RadioGroup>
        </FormControl>

        <div
          className={css({
            display: 'flex',
            flexDirection: 'row-reverse',
            marginTop: '24px',
          })}
        >
          <Button
            $as={Link}
            to="../shipping"
            size={SIZE.large}
            overrides={{ Root: { style: { width: 'max-content' } } }}
          >
            CONTINUE TO SHOPPING
          </Button>
          <span className={css({ flexGrow: 1 })} />
        </div>
      </form>
    </div>
  );
}
