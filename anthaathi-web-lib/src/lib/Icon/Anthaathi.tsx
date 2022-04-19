import React from 'react';
import { useStyletron } from 'baseui';

export default function Anthaathi(props: React.SVGProps<SVGSVGElement>) {
  const [css] = useStyletron();

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" {...props}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <polygon
            className={css({ fill: '#FFF' })}
            points="250 174.64 299.5 216.1 250 257.55 250 310.26 344.16 231.4 344.16 200.8 250 121.93 250 174.64"
          />
          <polygon
            className={css({ fill: '#FFF' })}
            points="250 242.45 200.5 283.9 250 325.36 250 378.07 155.84 299.2 155.84 268.6 250 189.74 250 242.45"
          />
        </g>
      </g>
    </svg>
  );
}
