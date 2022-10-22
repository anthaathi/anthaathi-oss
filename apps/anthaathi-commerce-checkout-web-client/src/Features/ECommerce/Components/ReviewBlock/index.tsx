import React from 'react';
import { LabelSmall } from 'baseui/typography';
import { Button, KIND, SIZE } from 'baseui/button';
import { useStyletron } from 'baseui';

export interface ReviewBlockProps {
  items: {
    title: React.ReactNode;
    content: React.ReactNode;
  }[];
}

export function ReviewBlock({ items }: ReviewBlockProps) {
  const [css] = useStyletron();

  return (
    <div
      className={css({
        border: '1px solid #EEE',
        borderRadius: '10px',
        marginTop: '1rem',
      })}
    >
      {items.map((res, index) => {
        return (
          <div
            className={css({
              display: 'flex',
              padding: '.5rem 1rem',
              borderTop: index === 0 ? undefined : '1px solid #EEE',
              alignItems: 'center',
            })}
          >
            <div className={css({ width: '20%', flexShrink: 0 })}>
              <LabelSmall color="#666">{res.title}</LabelSmall>
            </div>
            <div className={css({ flexGrow: 1 })}>
              <LabelSmall>{res.content}</LabelSmall>
            </div>

            <Button kind={KIND.tertiary} size={SIZE.mini}>
              Change
            </Button>
          </div>
        );
      })}
    </div>
  );
}
