import { useState } from 'react';
import { FormControl } from 'baseui/form-control';
import { Checkbox } from 'baseui/checkbox';
import { COUNTRIES, PhoneInput } from 'baseui/phone-input';
import { useStyletron } from 'baseui';
import { Country } from 'baseui/phone-input/types';
import { LabelSmall } from 'baseui/typography';

export function SubscribeForNotification() {
  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState<Country | undefined>(COUNTRIES.AE);
  const [text, setText] = useState('');
  const [css] = useStyletron();

  return (
    <>
      <FormControl>
        <Checkbox
          checked={isOpen}
          onChange={(e) => setIsOpen(e.target.checked)}
        >
          Text me with news and offers
        </Checkbox>
      </FormControl>

      {isOpen && (
        <div>
          <PhoneInput
            country={country}
            onCountryChange={({ option }) => setCountry(option as Country)}
            text={text}
            overrides={{
              Root: {
                style: {
                  width: '420px',
                  maxWidth: '60%',
                },
              },
            }}
            onTextChange={(e) => setText(e.currentTarget.value)}
          />

          <LabelSmall color="#888" marginTop="scale600">
            By signing up via text, you agree to receive recurring automated
            marketing messages, including cart reminders, at the phone number
            provided. Consent is not a condition of purchase. Reply STOP to
            unsubscribe. Reply HELP for help. Message frequency varies. Msg &
            data rates may apply. View our{' '}
            <a href="" className={css({ color: '#888' })}>
              Privacy Policy
            </a>{' '}
            and{' '}
            <a href="" className={css({ color: '#888' })}>
              Terms of Service
            </a>
            .
          </LabelSmall>
        </div>
      )}
    </>
  );
}
