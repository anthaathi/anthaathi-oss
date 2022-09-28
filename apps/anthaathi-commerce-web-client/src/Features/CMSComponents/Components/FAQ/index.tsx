import { useStyletron } from '@anthaathi/solid-styletron';
import {
  Accordion,
  AccordionButton,
  AccordionHeader,
  AccordionItem,
  AccordionPanel,
} from 'solid-headless';
import { For, Show } from 'solid-js';
import {
  IconArrowDownSmall,
  IconArrowUpSmall,
} from '@anthaathi/oracle-apex-solid-icons';

export function FAQ() {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        margin: '0 auto',
        maxWidth: $theme.sizing.maxWidth,
        textAlign: 'center',
      })}
    >
      <div
        class={css({
          margin: '0 auto',
          paddingBottom: $theme.sizing.scale500,
          textAlign: 'center',
          fontWeight: 400,
          fontSize: '36px',
          lineHeight: '1.2',
          letterSpacing: '0.0em',
        })}
      >
        FAQs
      </div>
      <div
        class={css({
          maxWidth: '600px',
          margin: '0 auto',
        })}
      >
        <Accordion defaultValue={FAQs[0]} toggleable>
          <For each={FAQs}>
            {(faq: FAQItem) => (
              <AccordionItem value={faq}>
                <AccordionHeader>
                  <AccordionButton
                    as="div"
                    class={css({
                      maxWidth: '600px',
                      width: '600px',
                      paddingTop: $theme.sizing.scale500,
                      paddingBottom: $theme.sizing.scale500,
                      paddingLeft: $theme.sizing.scale500,
                      paddingRight: $theme.sizing.scale500,
                      margin: '0',
                      textAlign: 'left',
                      borderBottom: '1px solid #d9d9d9',
                      ':hover': {
                        transitionTimingFunction: 'ease',
                        transitionDuration: '100ms',
                        transitionProperty: 'background-color',
                        backgroundColor: '#e9e9e9',
                        cursor: 'pointer',
                      },
                    })}
                  >
                    {({ isSelected }) => (
                      <div
                        class={css({
                          display: 'flex',
                          width: '600px',
                          alignItems: 'center',
                        })}
                      >
                        <div class={css({ flex: 1, fontWeight: 500 })}>
                          {faq.question}
                        </div>
                        <Show
                          when={isSelected()}
                          fallback={<IconArrowDownSmall />}
                          keyed={true}
                        >
                          <IconArrowUpSmall />
                        </Show>
                      </div>
                    )}
                  </AccordionButton>
                </AccordionHeader>
                <AccordionPanel
                  class={css({
                    maxWidth: '600px',
                    textAlign: 'left',
                    paddingLeft: '5px',
                  })}
                >
                  {faq.answer}
                </AccordionPanel>
              </AccordionItem>
            )}
          </For>
        </Accordion>
      </div>
    </div>
  );
}

export interface FAQItem {
  question: string;
  answer: string;
}

const FAQs: FAQItem[] = [
  {
    question: 'How do I check out?',
    answer:
      "As soon as you have finished adding items to your shopping cart and are ready to place an order, select the 'Checkout' tab. Follow the steps by entering the requested details for your delivery and the payment details until you receive the order confirmation and an e-mail summary of your order.",
  },
  {
    question: 'Are there any hidden charges when I make a purchase online?',
    answer:
      'There are NO hidden charges when you make a purchase on www.nrtcfresh.com. The price you see on the product page is just what you pay.',
  },
  {
    question: 'How do I get a receipt?',
    answer:
      'You will receive an electronic receipt on your registered email address, the order confirmation that will summarize your order and the payment details. When your shopping basket is delivered, you will be given a detailed delivery note of your received order by the driver.',
  },
];
