import {
  AddressBook,
  AddressBookItemProps,
} from '~/Features/Commerce/Components/AddressBook';

export default function addressbook() {
  return (
    <AddressBook defaultAddress={DefaultAddress} Addresses={AddressList} />
  );
}

const DefaultAddress: AddressBookItemProps = {
  title: 'Shipping Address',
  name: 'Anmol K',
  addressLine1: 'Some address line number 1',
  addressLine2: 'Some address line 2',
  state: 'Maharashtra',
  country: 'Bharat',
  contactInfo: '000 000 0000',
};

const AddressList: AddressBookItemProps[] = [
  {
    title: 'Address 1',
    name: 'Anmol K',
    addressLine1: 'Some address line number 1',
    addressLine2: 'Some address line 2',
    state: 'Maharashtra',
    country: 'Bharat',
    contactInfo: '000 000 0000',
  },
  {
    title: 'Address 2',
    name: 'Anmol K',
    addressLine1: 'Some address line number 1',
    addressLine2: 'Some address line 2',
    state: 'Maharashtra',
    country: 'Bharat',
    contactInfo: '000 000 0000',
  },
];
