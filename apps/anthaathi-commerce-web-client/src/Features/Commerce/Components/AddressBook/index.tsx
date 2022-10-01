import { useStyletron } from '@anthaathi/solid-styletron';
import { For } from 'solid-js';
import { Button } from 'solid-headless';
import { AddressCard } from '~/Features/Commerce/Components/AddressCard';

export interface AddressBookProps {
  defaultAddress: AddressBookItemProps;
  Addresses: AddressBookItemProps[];
}

export function AddressBook(props: AddressBookProps) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        width: '100%',
        height: '100%',
        boxSizing: 'border-box',
      })}
    >
      <div
        class={css({
          fontSize: $theme.sizing.scale600,
          fontWeight: 400,
          textAlign: 'left',
          paddingBottom: $theme.sizing.scale700,
        })}
      >
        The following addresses will be used on the checkout page by default.
      </div>
      <AddressCard {...props.defaultAddress} />

      <div
        class={css({
          fontSize: $theme.sizing.scale600,
          fontWeight: 400,
          textAlign: 'left',
          paddingBottom: $theme.sizing.scale700,
        })}
      >
        The following addresses are available during the checkout process.
      </div>
      <For each={props.Addresses}>
        {(Address: AddressBookItemProps) => <AddressCard {...Address} />}
      </For>
      <div
        class={css({
          display: 'flex',
          flexDirection: 'row-reverse',
        })}
      >
        <Button
          class={css({
            padding: $theme.sizing.scale500,
            border: 'none',
            borderRadius: '5px',
            backgroundColor: 'green',
            color: 'white',
            fontSize: $theme.typography.font300.fontSize,
            fontWeight: $theme.typography.font300.fontWeight,
          })}
        >
          Add new address
        </Button>
      </div>
    </div>
  );
}

export interface AddressBookItemProps {
  title: string;
  name: string;
  addressLine1: string;
  addressLine2: string;
  state: string;
  country: string;
  contactInfo: string;
}
