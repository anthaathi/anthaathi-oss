import type { Component } from 'solid-js';
import { Portal } from 'solid-js/web';

export function withPortal<P extends object>(
  Component: Component<P>,
): Component<P> {
  return (props) => {
    return (
      <Portal>
        <Component {...props} />
      </Portal>
    );
  };
}
