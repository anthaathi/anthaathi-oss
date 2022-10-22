import { Input, SIZE } from 'baseui/input';
import { useStyletron } from 'baseui';
import { Button, SIZE as ButtonSize } from 'baseui/button';

export function DiscountCode() {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        paddingTop: '12px',
        paddingBottom: '12px',
        display: 'flex',
      })}
    >
      <Input size={SIZE.compact} placeholder="Discount code" />

      <Button
        size={ButtonSize.compact}
        overrides={{ Root: { style: { width: '120px', marginLeft: '6px' } } }}
      >
        APPLY
      </Button>
    </div>
  );
}
