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
  IconAngleDownLarge,
  IconAngleUpLarge,
} from '@anthaathi/oracle-apex-solid-icons';

export function FAQ(props: { title?: string; list: FAQItem[] }) {
  const [css, $theme] = useStyletron();

  return (
    <div
      class={css({
        margin: '0 auto',
        maxWidth: $theme.sizing.maxWidth,
        textAlign: 'center',
      })}
    >
      {props.title && (
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
          {props.title}
        </div>
      )}
      <div
        class={css({
          width: '100%',
          margin: '0 auto',
        })}
      >
        <Accordion defaultValue={props.list[0]} toggleable>
          <For each={props.list}>
            {(faq: FAQItem) => (
              <AccordionItem value={faq}>
                <AccordionHeader>
                  <AccordionButton
                    as="button"
                    class={css({
                      maxWidth: '100%',
                      width: '100%',
                      paddingTop: $theme.sizing.scale500,
                      paddingBottom: $theme.sizing.scale500,
                      paddingLeft: $theme.sizing.scale500,
                      paddingRight: $theme.sizing.scale500,
                      textAlign: 'left',
                      borderBottom: '1px solid #d9d9d9',
                      ':hover': {
                        transitionTimingFunction: 'ease',
                        transitionDuration: '100ms',
                        transitionProperty: 'background-color',
                        // backgroundColor: '#e9e9e9',
                        cursor: 'pointer',
                      },
                    })}
                  >
                    {({ isSelected }) => (
                      <div
                        class={css({
                          display: 'flex',
                          width: '100%',
                          maxWidth: '100%',
                          alignItems: 'center',
                        })}
                      >
                        <div class={css({ flex: 1, fontWeight: 600 })}>
                          {faq.question}
                        </div>
                        <Show
                          when={isSelected()}
                          fallback={<IconAngleDownLarge />}
                          keyed={true}
                        >
                          <IconAngleUpLarge />
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
