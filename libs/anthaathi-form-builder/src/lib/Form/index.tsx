import * as React from 'react';
import { useCallback, useMemo } from 'react';
import { JSONSchema7 } from 'json-schema';
import { apply, RulesLogic } from 'json-logic-js';

export interface Bindings {
  $ref: string;
  $paths: (string | number)[];
}

export interface UIElement<T> {
  $import?: string;
  $element: string | React.FunctionComponent;
  $$kind: 'anthaathi/element';
  scope?: string;
  props?: Record<
    string,
    UIElement<T> | UIElement<T>[] | DynamicElement | React.ReactNode
  >;
  binding?: Bindings;
}

export interface FormProps<T> {
  $dataSchema: JSONSchema7;
  $renderSchema: UIElement<T> | UIElement<T>[] | React.ReactNode;
}

export interface DynamicElement {
  $$kind: 'anthaathi/dynamic';
  jsonLogic: RulesLogic;
}

export const DataConfigContext = React.createContext<Bindings[]>([]);

export function Form<T>({
  $dataSchema,
  $renderSchema: $renderSchema_,
}: FormProps<T>) {
  function extracted<TT>(
    $renderSchema:
      | UIElement<T>
      | DynamicElement
      | React.ReactElement<any, string | React.JSXElementConstructor<any>>
      | string
      | number
      | Iterable<React.ReactNode>
      | React.ReactPortal
      | boolean
      | UIElement<TT>[],
  ) {
    /* Processing the props of the element. */
    const processedProps: { children?: React.ReactNode } = Object.keys(
      ($renderSchema as UIElement<TT>).props || {},
    ).reduce((result, key) => {
      // eslint-disable-next-line no-param-reassign
      result[key] = renderElements(($renderSchema as UIElement<T>).props[key]);

      return result;
    }, {});

    const { children, ...props } = processedProps;

    const element = React.createElement(
      ($renderSchema as UIElement<TT>).$element,
      props,
      children || null,
    );

    return (
      <DataConfigContext.Consumer>
        {(value) => (
          <DataConfigContext.Provider
            value={[
              ...(value || []),
              ($renderSchema as UIElement<T>).binding,
            ].filter(Boolean)}
          >
            {element}
          </DataConfigContext.Provider>
        )}
      </DataConfigContext.Consumer>
    );
  }

  const renderElements = useCallback(
    (
      $renderSchema:
        | UIElement<T>
        | UIElement<T>[]
        | DynamicElement
        | React.ReactNode,
    ) => {
      if (Array.isArray($renderSchema)) {
        return $renderSchema.map((res) => renderElements(res));
      }

      if (($renderSchema as UIElement<T>)?.$$kind === 'anthaathi/element') {
        return extracted($renderSchema);
      }

      if (($renderSchema as DynamicElement)?.$$kind === 'anthaathi/dynamic') {
        return apply(($renderSchema as DynamicElement).jsonLogic, {
          test: 'test',
        });
      }

      return $renderSchema;
    },
    [],
  );

  return useMemo(() => renderElements($renderSchema_), [$renderSchema_]);
}

export default Form;
