import React, { forwardRef, HTMLAttributes } from 'react';

const Item = forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>(({ id, ...props }, ref) => {
  return <div {...props} ref={ref} />;
});

export default Item;
