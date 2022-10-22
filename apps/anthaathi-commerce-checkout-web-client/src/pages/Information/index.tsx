import { Link } from 'react-router-dom';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { HeadingSmall, LabelLarge, ParagraphMedium } from 'baseui/typography';
import { useStyletron } from 'baseui';
import { Checkbox } from 'baseui/checkbox';
import { AddressForm } from '../../Features/ECommerce/Containers/AddressForm';
import { SubscribeForNotification } from '../../Features/ECommerce/Components/SubscribeForNotification';
import { Button, SIZE } from 'baseui/button';

export default function Information() {
  const [css] = useStyletron();

  return (
    <div>
      <div className={css({ display: 'flex', alignItems: 'center' })}>
        <HeadingSmall marginTop={0} marginBottom={0}>
          Contact Information
        </HeadingSmall>
        <span className={css({ flexGrow: 1 })} />
        <span>
          <ParagraphMedium>
            Already have an account?{' '}
            <Link to="/account/login" className={css({ color: 'green' })}>
              Log in
            </Link>
          </ParagraphMedium>
        </span>
      </div>
      <FormControl label="Email or mobile phone number">
        <Input />
      </FormControl>

      <FormControl>
        <Checkbox title="Email me with news and offers">
          Email me with news and offers
        </Checkbox>
      </FormControl>

      <LabelLarge marginTop="scale600" marginBottom="scale600">
        Shipping address
      </LabelLarge>

      <AddressForm />

      <FormControl>
        <Checkbox>Save this information for next time</Checkbox>
      </FormControl>

      <SubscribeForNotification />

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
    </div>
  );
}
