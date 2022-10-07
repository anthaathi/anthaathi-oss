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
              backgroundColor: 'green',
              height: '70px',
              width: '70px',
              borderRadius: '70px',
              ':hover': {
                backgroundColor: 'green',
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
