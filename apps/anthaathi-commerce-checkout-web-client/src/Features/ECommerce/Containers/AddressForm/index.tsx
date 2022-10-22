import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Cell, Grid } from 'baseui/layout-grid';
import { Select } from 'baseui/select';

export function AddressForm() {
  return (
    <form>
      <FormControl>
        <Select
          options={[{ label: 'United Arab Emirates', id: '#F0F8FF' }]}
          placeholder="Country"
        />
      </FormControl>

      <Grid gridMaxWidth={0} gridMargins={0}>
        <Cell span={6}>
          <FormControl>
            <Input placeholder="First name" />
          </FormControl>
        </Cell>
        <Cell span={6}>
          <FormControl>
            <Input placeholder="Last name" />
          </FormControl>
        </Cell>
      </Grid>

      <FormControl>
        <Input placeholder="Address"></Input>
      </FormControl>

      <FormControl>
        <Input placeholder="Apartment, suite, etc. (option)" />
      </FormControl>

      <Grid gridMaxWidth={0} gridMargins={0}>
        <Cell span={6}>
          <FormControl>
            <Input placeholder="Area" />
          </FormControl>
        </Cell>

        <Cell span={6}>
          <FormControl>
            <Input placeholder="Emirate" />
          </FormControl>
        </Cell>
      </Grid>
    </form>
  );
}
