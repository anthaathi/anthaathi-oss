import React, { forwardRef, HTMLAttributes } from 'react';

const Item = forwardRef<
  HTMLDivElement,
  React.DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
>(({ ...props }, ref) => {
  return <div {...props} ref={ref} />;
});

Item.displayName = 'KanbanItem';

export default Item;
