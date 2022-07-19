import * as React from 'react';
import {HeaderCMSInput} from '../containers/Header';

export interface RendererProps {
  components: object & {_component: string; key: string}[];
}

const renderer = [HeaderCMSInput];

const mapConverted: Record<string, React.FunctionComponent> = {};

renderer.forEach(e => {
  mapConverted[e._component] = e.component as never;
});

export default function (props: RendererProps) {
  return (
    <>
      {props.components.map(res => {
        const {_component, ...finalProps} = res;

        return React.createElement(mapConverted[_component], finalProps);
      })}
    </>
  );
}
