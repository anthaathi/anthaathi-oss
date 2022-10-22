import React, { useState } from 'react';
import { Panel, StatelessAccordion } from 'baseui/accordion';
import { ReviewBlock } from '../../Features/ECommerce/Components/ReviewBlock';
import { useStyletron } from 'baseui';
import { HeadingSmall, ParagraphSmall } from 'baseui/typography';
import { Radio } from 'baseui/radio';

export default function Payment() {
  const [css] = useStyletron();
  const [expanded, setExpanded] = useState<React.Key[]>([]);

  return (
    <>
      <ReviewBlock
        items={[
          {
            title: 'Contact',
            content: 'me@f22.dev',
          },
          {
            title: 'Ship to',
            content:
              'oaksokas, okok, Discovery Garden DU, United Arab Emirates',
          },
          {
            title: 'Method',
            content: 'Free',
          },
        ]}
      />

      <HeadingSmall marginTop="scale600" marginBottom="scale300">
        Payment
      </HeadingSmall>

      <ParagraphSmall marginTop="scale200">
        All transactions are secure and encrypted.
      </ParagraphSmall>

      <div className={css({ borderRadius: '10px', backgroundColor: '#EEE' })}>
        <StatelessAccordion
          expanded={expanded}
          overrides={{ Root: { style: { borderRadius: '12px' } } }}
          onChange={({ expanded }) => setExpanded(expanded)}
          accordion
        >
          {PaymentMethods.map((res) => (
            <Panel
              key={res.id}
              title={
                <div className={css({ display: 'flex', alignItems: 'center' })}>
                  <Radio checked={expanded.indexOf(res.id) !== -1} /> &nbsp;{' '}
                  {res.name}
                </div>
              }
              overrides={{
                Content: {
                  style: {
                    paddingTop: 0,
                    paddingBottom: 0,
                    backgroundColor: '#EEE',
                  },
                },
              }}
            >
              {res.description}
            </Panel>
          ))}
        </StatelessAccordion>
      </div>
    </>
  );
}

export interface PaymentMethod {
  id: string;
  name: string;
  description?: string;
  hasCardInput?: boolean;
}

export const PaymentMethods: PaymentMethod[] = [
  {
    id: 'card',
    name: 'Card',
    description: 'Card',
    hasCardInput: true,
  },
  {
    id: 'card-on-delivery',
    name: 'Card on delivery',
  },
  {
    id: 'cash-on-delivery',
    name: 'Cash on delivery',
  },
];
