import { useStyletron } from '@anthaathi/solid-styletron';
import { Accessor } from 'solid-js';
import { CartCheckOut } from '~/Features/Commerce/Components/CartCheckOut';
import { SideOver } from '~/Features/Core/Components/SideOver';
import { CartItems } from '../CartItems';

export interface CartSlideOverProps {
  isOpen: Accessor<boolean>;
  setOpen: (input: boolean) => void;
}

export default function CartSlideOver(props: CartSlideOverProps) {
  const [css, $theme] = useStyletron();
  return (
    <SideOver title="Cart" isOpen={props.isOpen} setOpen={props.setOpen}>
      <div
        class={css({
          marginTop: $theme.sizing.scale400,
        })}
      >
        <CartItems />
        <CartCheckOut />
      </div>
    </SideOver>
  );
}
