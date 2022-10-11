import { useStyletron } from '@anthaathi/solid-styletron';
import { Button, Kind } from '~/Features/Core/Components/Button';
import { IconEnvelopeLarge } from '@anthaathi/oracle-apex-solid-icons';

export function FAB() {
  const [css, $theme] = useStyletron();

  return (
    <div>
      <Button
        $kind={Kind.Tertiary}
        $startEnhancer={() => <IconEnvelopeLarge fill="white" />}
        onClick={() =>
          window.open(
            'https://api.whatsapp.com/send?phone=+971509751445',
            '_blank',
          )
        }
        $override={{
          Root: {
            style: {
              position: 'fixed',
              bottom: '20px',
              right: '20px',
              background: 'green',
              height: '70px',
              width: '70px',
              borderTopRightRadius: '70px',
              borderTopLeftRadius: '70px',
              borderBottomLeftRadius: '70px',
              borderBottomRightRadius: '70px',
              transitionProperty: 'box-shadow',
              transitionDuration: '200ms',
              transitionTimingFunction: 'ease',
              ':hover': {
                background: 'green',
                boxShadow: '2px 2px 2px #888888 ',
              },
              justifyContent: 'center',
            },
          },
        }}
      ></Button>
    </div>
  );
}
