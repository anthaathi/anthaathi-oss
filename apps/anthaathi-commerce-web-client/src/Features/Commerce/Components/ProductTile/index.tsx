import { useStyletron } from '@anthaathi/solid-styletron';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import {
  IconPlusLarge,
  IconSearchLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { createSignal } from 'solid-js';
import { Link } from '@solidjs/router';

export function ProductTile() {
  const [css, $theme] = useStyletron();
  const [isOpen, setIsOpen] = createSignal(false);

  return (
    <Link
      href="/"
      class={css({
        textDecoration: 'none',
        color: '#000',
        backgroundColor: '#f8f8f8',
        borderBottomLeftRadius: '12px',
        borderBottomRightRadius: '12px',
        borderTopRightRadius: '12px',
        borderTopLeftRadius: '12px',
      })}
    >
      <div
        class={css({
          width: 'auto',
          position: 'relative',
          cursor: 'pointer',
          paddingLeft: $theme.sizing.scale800,
          paddingRight: $theme.sizing.scale800,
          paddingTop: $theme.sizing.scale800,
        })}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <div
          class={css({
            position: 'absolute',
            right: '-20px',
            top: '14px',
            opacity: isOpen() ? 1 : 0,
            transitionTimingFunction: 'ease',
            transitionDuration: '100ms',
            transitionProperty: 'opacity',
            zIndex: 1,
          })}
        >
          <Button
            $override={{
              Root: {
                style: {
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  borderTopRightRadius: '50%',
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                  marginBottom: '12px',
                },
              },
            }}
            onClick={(e) => {
              e.preventDefault();
            }}
            $size={Size.Mini}
            $kind={Kind.Secondary}
            $startEnhancer={() => (
              <IconSearchLarge width="20px" height="20px" />
            )}
          />
          <Button
            $override={{
              Root: {
                style: {
                  paddingLeft: '12px',
                  paddingRight: '12px',
                  paddingTop: '12px',
                  paddingBottom: '12px',
                  borderTopRightRadius: '50%',
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                },
              },
            }}
            onClick={(e) => {
              e.preventDefault();
            }}
            $size={Size.Mini}
            $kind={Kind.Secondary}
            $startEnhancer={() => <IconPlusLarge width="20px" height="20px" />}
          />
        </div>

        <div
          class={css({
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <img
            src="https://cdn.shopify.com/s/files/1/0648/1303/9842/products/Yellow_Baby_Pepper-1_360x.jpg?v=1653583277"
            srcSet="//cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_360x.jpg?v=1653582153 360w, //cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_540x.jpg?v=1653582153 540w, //cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_720x.jpg?v=1653582153 720w, //cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_900x.jpg?v=1653582153 900w, //cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_1080x.jpg?v=1653582153 1080w"
            alt=""
            class={css({
              width: `calc(100% - ${$theme.sizing.scale400} - ${$theme.sizing.scale400})`,
              flexGrow: 1,
              objectFit: 'cover',
              paddingLeft: $theme.sizing.scale400,
              paddingRight: $theme.sizing.scale400,
            })}
          />

          <h4
            class={css({
              ...$theme.typography.ParagraphLarge,
              marginBottom: $theme.sizing.scale200,
              marginTop: $theme.sizing.scale800,
            })}
          >
            Baby Yellow Pepper
          </h4>

          <h5
            class={css({
              ...$theme.typography.ParagraphLarge,
              marginTop: 0,
              marginBottom: $theme.sizing.scale800,
              fontWeight: 'bold',
            })}
          >
            {Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'AED',
            }).format(12)}
          </h5>
        </div>
      </div>
    </Link>
  );
}
