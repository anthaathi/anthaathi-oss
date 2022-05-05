/// <reference types="vite/client" />

import { ForwardRefRenderFunction } from 'react';

declare module 'react' {
  export type RefForwardingComponent<
    T,
    P extends Record<string, unknown> = Record<string, unknown>,
  > = ForwardRefRenderFunction<T, P>;
}
