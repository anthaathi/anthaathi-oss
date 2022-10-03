import { useStyletron } from '@anthaathi/solid-styletron';
import { Input } from '~/Features/Core/Components/Input';
import { Select, SelectOption } from 'solid-headless';

export function AddAddress() {
  const [css] = useStyletron();

  return (
    <div class={css({})}>
      <form action="">
        <div class={css({ display: 'flex' })}>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Email" />
          <Input placeholder="Address Type" />
          <Select>
            <SelectOption value={''} />
          </Select>
        </div>
      </form>
    </div>
  );
}
