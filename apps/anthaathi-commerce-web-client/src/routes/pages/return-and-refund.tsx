import { useStyletron } from '@anthaathi/solid-styletron';
import OrderedItems from '~/Features/CMSComponents/Components/OrderDetailsPage/OrderedItems';
import { Input } from '~/Features/Core/Components/Input';
import { SelectOption } from '~/Features/Core/Components/SelectOption';

export default function ReturnAndRefundPage() {
  const [css, $theme] = useStyletron();
  return (
    <div
      class={css({
        margin: '0 auto',
        width: $theme.sizing.maxWidth,
        maxWidth: `calc(100% - ${$theme.sizing.scale500} - ${$theme.sizing.scale500})`,
        marginTop: $theme.sizing.scale800,
        marginBottom: $theme.sizing.scale800,
      })}
    >
      <div
        class={css({
          display: 'flex',
          [$theme.mediaQuery.md]: {
            flexDirection: 'row',
          },
          [$theme.mediaQuery.xs]: {
            flexDirection: 'column',
          },
        })}
      >
        <div
          class={css({
            flex: 1,
            [$theme.mediaQuery.md]: {
              marginRight: $theme.sizing.scale600,
            },
          })}
        >
          <SelectOption
            label="Select Reason"
            options={[
              {
                title: 'Other reason (reason for return)',
                value: '1',
              },
              {
                title: 'Reason 2',
                value: '2',
              },
              {
                title: 'Reason 3',
                value: '3',
              },
            ]}
          />
          <div
            class={css({
              marginTop: $theme.sizing.scale400,
            })}
          >
            <p
              class={css({
                ...$theme.typography.LabelMedium,
                fontWeight: 'normal',
                color: '#000',
                marginTop: 0,
                marginBottom: $theme.sizing.scale300,
              })}
            >
              Reason for return
            </p>

            <Input
              type="password"
              id="password"
              width="100%"
              $overrides={{
                Root: { style: { width: '100%', height: '120px' } },
              }}
            />
          </div>
          <div
            //   onclick={props.handlePress}
            class={css({
              marginTop: $theme.sizing.scale700,
              width: '100%',
              textAlign: 'center',
              backgroundColor: '#118b44',
              paddingTop: '12px',
              paddingBottom: '12px',
              color: '#fff',
              fontWeight: 'bold',
              fontSize: '18px',
              borderRadius: '4px',
              ':hover': { cursor: 'pointer' },
            })}
          >
            Next
          </div>
        </div>
        <div
          class={css({
            flex: 1,
          })}
        >
          <OrderedItems
            items={[
              {
                id: 1,
                name: 'Baby Yellow Pepper',
                image:
                  'https://burst.shopifycdn.com/photos/fruit-plate.jpg?width=373&height=373&format=pjpg&exif=1&iptc=1',
                key: '12',
                price: 12,
                numberOfItems: 2,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
              {
                id: 2,
                name: 'Capsicum mixed',
                image:
                  'https://burst.shopifycdn.com/photos/red-and-green-gooseberries-against-white.jpg?width=373&format=pjpg&exif=1&iptc=1',
                key: '23',
                price: 23,
                numberOfItems: 2,
                currency: 'USD',
                weight_unit: 'KG',
                packaging: '500 gms',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
