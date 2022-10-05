import { useStyletron } from '@anthaathi/solid-styletron';
import { Button, Kind, Size } from '~/Features/Core/Components/Button';
import {
  IconPlusLarge,
  IconSearchLarge,
} from '@anthaathi/oracle-apex-solid-icons';
import { createSignal } from 'solid-js';
import { Link, useNavigate } from '@solidjs/router';
import { Img } from '~/Features/Core/Components/Image';
import { Button as S_Button } from 'solid-headless';

export interface ProductProps {
  id: number;
  name: string;
  name_ar?: string;
  description?: string;
  category?: string;
  price: number;
  currency: string;
  image: string;
  weight_unit?: string;
  packaging?: string;
  key?: string;
  notes?: string;
}

export function ProductTile(props: ProductProps) {
  const [css, $theme] = useStyletron();
  const [isOpen, setIsOpen] = createSignal(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate('/product/' + props.id);
      }}
      class={css({
        textDecoration: 'none',
        color: '#000',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '4px',
        borderBottomRightRadius: '4px',
        borderTopRightRadius: '4px',
        borderTopLeftRadius: '4px',
        border: '1px solid #e4e4d9',
        ':hover': {
          boxShadow: '1px 1px 5px 4px #E5E5EA',
        },
      })}
    >
      <div
        class={css({
          width: 'auto',
          position: 'relative',
          cursor: 'pointer',
          paddingLeft: $theme.sizing.scale600,
          paddingRight: $theme.sizing.scale600,
          paddingTop: $theme.sizing.scale600,
          [$theme.mediaQuery?.md || '']: {
            paddingLeft: $theme.sizing.scale800,
            paddingRight: $theme.sizing.scale800,
            paddingTop: $theme.sizing.scale800,
          },
        })}
        onMouseOver={() => setIsOpen(true)}
        onMouseOut={() => setIsOpen(false)}
      >
        <div
          class={css({
            position: 'absolute',
            right: '5px',
            top: '14px',
            opacity: isOpen() ? 1 : 0,
            transitionTimingFunction: 'ease',
            transitionDuration: '100ms',
            transitionProperty: 'opacity',
            zIndex: 1,
            display: 'block',
          })}
        >
          <Button
            $override={{
              Root: {
                style: {
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderTopRightRadius: '50%',
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                  marginBottom: '12px',
                  border: '1px solid #e4e4d9',
                  ':hover': {
                    backgroundColor: '#E5E5EA',
                  },
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
                  paddingLeft: '10px',
                  paddingRight: '10px',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  borderTopRightRadius: '50%',
                  borderTopLeftRadius: '50%',
                  borderBottomLeftRadius: '50%',
                  borderBottomRightRadius: '50%',
                  border: '1px solid #e4e4d9',
                  ':hover': {
                    backgroundColor: '#E5E5EA',
                  },
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
          <div>
            <Img
              src={props.image}
              // srcSet="//cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_360x.jpg?v=1653582153 360w, //cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_540x.jpg?v=1653582153 540w, //cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_720x.jpg?v=1653582153 720w, //cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_900x.jpg?v=1653582153 900w, //cdn.shopify.com/s/files/1/0648/1303/9842/products/Capsicum_Mixed_-_3_Color-1_1080x.jpg?v=1653582153 1080w"
              alt=""
              $override={{
                Root: {
                  $style: {
                    width: '100%',
                    flexGrow: 1,
                    objectFit: 'cover',
                    [$theme.mediaQuery?.md || '']: {
                      width: `calc(100% - ${$theme.sizing.scale400} - ${$theme.sizing.scale400})`,
                      paddingLeft: $theme.sizing.scale400,
                      paddingRight: $theme.sizing.scale400,
                    },
                  },
                },
              }}
            />
          </div>
          <div>
            <h4
              class={css([
                $theme.typography.HeadingXSmall,
                {
                  marginBottom: $theme.sizing.scale200,
                  marginTop: $theme.sizing.scale800,
                },
              ])}
            >
              {props.name}
            </h4>

            <h5
              class={css([
                $theme.typography.ParagraphSmall,
                {
                  marginTop: $theme.sizing.scale100,
                  marginBottom: 0,
                  color: '#858585',
                },
              ])}
            >
              {props.notes}
            </h5>

            <h5
              class={css([
                $theme.typography.ParagraphLarge,
                {
                  marginTop: 0,
                  marginBottom: $theme.sizing.scale800,
                  fontWeight: 'bold',
                },
              ])}
            >
              {Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: props.currency,
              }).format(props.price) +
                ' / ' +
                props.packaging}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
