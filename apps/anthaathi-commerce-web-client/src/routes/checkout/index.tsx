import {
  Accordion,
  AccordionButton,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from 'solid-headless';
import { IconChevronUpLarge } from '@anthaathi/oracle-apex-solid-icons';
import { ShippingOptions } from '~/Features/Checkout/Components/ShippingOptions';
import { For } from 'solid-js';
import { useStyletron } from '@anthaathi/solid-styletron';
import { DeliveryOptions } from '~/Features/Checkout/Components/DeliveryOptions';
import { PaymentOptions } from '~/Features/Checkout/Components/PaymentOptions';
import { Link } from '@solidjs/router';

export default function Checkout() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        maxWidth: $theme.sizing.maxWidth,
        margin: '0 auto',
        paddingTop: $theme.sizing.scale1200,
        paddingBottom: $theme.sizing.scale1200,
      })}
    >
      <Accordion defaultValue={Steps[0].title} toggleable>
        <For each={Steps}>
          {(step) => {
            return (
              <AccordionItem value={step.title} class={css({})}>
                <AccordionHeader
                  class={css({
                    marginTop: 0,
                    marginBottom: 0,
                  })}
                >
                  <AccordionButton
                    as="div"
                    class={css({
                      display: 'flex',
                      cursor: 'pointer',
                      alignItems: 'center',
                      backgroundColor: '#fff',
                      border: '1px solid #e0e0e0',
                      paddingLeft: $theme.sizing.scale500,
                      paddingRight: $theme.sizing.scale500,
                    })}
                  >
                    {({ isSelected }) => (
                      <>
                        <h4
                          class={css({
                            ...$theme.typography.HeadingXSmall,
                            marginTop: 0,
                            marginBottom: 0,
                            paddingTop: $theme.sizing.scale500,
                            paddingBottom: $theme.sizing.scale500,
                          })}
                        >
                          {step.title}
                        </h4>
                        <span class={css({ flexGrow: 1 })} />
                        <div>
                          <IconChevronUpLarge
                            height={20}
                            class={css({
                              transform: isSelected()
                                ? 'rotate(180deg)'
                                : 'rotate(0)',
                              transitionProperty: 'all',
                              transitionDuration: '300ms',
                              transitionTimingFunction: 'ease',
                            })}
                          />
                        </div>
                      </>
                    )}
                  </AccordionButton>
                </AccordionHeader>
                <AccordionPanel
                  class={css({
                    backgroundColor: '#fcfcfc',
                    paddingTop: $theme.sizing.scale500,
                    paddingBottom: $theme.sizing.scale500,
                    paddingLeft: $theme.sizing.scale500,
                    paddingRight: $theme.sizing.scale500,
                  })}
                >
                  {step.component}
                </AccordionPanel>
              </AccordionItem>
            );
          }}
        </For>
      </Accordion>
      <Link
        href="/"
        class={css({
          textDecoration: 'none',
        })}
      >
        <div
          class={css({
            marginTop: $theme.sizing.scale900,
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
          Purchase
        </div>
      </Link>
    </div>
  );
}

export const Steps = [
  {
    title: 'Shipping',
    component: () => <ShippingOptions />,
  },
  {
    title: 'Delivery',
    component: () => <DeliveryOptions />,
  },
  {
    title: 'Payment',
    component: () => <PaymentOptions />,
  },
];
