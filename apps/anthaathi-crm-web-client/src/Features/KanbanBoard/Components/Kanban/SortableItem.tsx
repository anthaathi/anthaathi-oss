import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

import Item from './Item';

export function SortableItem(props: { id: string }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    height: '64px',
  };

  return (
    <Item ref={setNodeRef} style={style} {...attributes} {...listeners}>
      Hello world
    </Item>
  );
}
