import { Button, Kind } from '~/Features/Core/Components/Button';
import WhatsApp from '../../../../icons/whatsapp.svg';
import { useStyletron } from '@anthaathi/solid-styletron';

export function FAB() {
  const [css] = useStyletron();

  return (
    <div>
      <Button
        $kind={Kind.Tertiary}
        $startEnhancer={() => (
          <WhatsApp width="42px" height="42px" class={css({ color: '#FFF' })} />
        )}
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
              bottom: '80px',
              [$theme.mediaQuery?.md || '']: {
                bottom: '20px',
              },
              zIndex: 2,
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
