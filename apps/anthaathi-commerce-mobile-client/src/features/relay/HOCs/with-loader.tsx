import React, {Suspense} from 'react';

export function withLoader(Product: React.ElementType, Fallback = () => <></>) {
  return (props: any) => {
    return (
      <Suspense fallback={<Fallback />}>
        <Product {...props} />
      </Suspense>
    );
  };
}
