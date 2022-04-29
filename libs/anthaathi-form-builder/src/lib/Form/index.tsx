import * as React from 'react';
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { JSONSchema7 } from 'json-schema';
import { apply, RulesLogic } from 'json-logic-js';
import generateInitialJSON from '../Utils/generate-initial-JSON';

export interface Bindings<T = any> {
  $ref: string;
  value?: T;
  errors?: string[];
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
  $dataSchema: JSONSchema7[];
  $renderSchema: UIElement<T> | UIElement<T>[] | React.ReactNode;
}

export interface DynamicElement {
  $$kind: 'anthaathi/dynamic';
  jsonLogic: RulesLogic;
}

export const DataConfigContext = React.createContext<Bindings[]>([]);

export const DataSchemaRegistry = React.createContext<Record<string, any>>({});

export const DataModelRegistry = React.createContext<
  [Record<string, any>, Dispatch<SetStateAction<Record<string, any>>>]
>(null as never);

export const ModelDataContext = React.createContext<
  [object, Dispatch<SetStateAction<object>>]
>(null as never);

const useProvideDataSchema = ($dataSchema: JSONSchema7[]) => {
  const initialValues = useMemo(() => {
    const returnObject: Record<string, any> = {};

    $dataSchema.forEach((e, index) => {
      returnObject[e.$id || index === 0 ? '' : index] = generateInitialJSON(e);
    });

    return returnObject;
  }, []);

  return useState<Record<string, any>>(initialValues);
};

export function Form<T>({
  $dataSchema,
  $renderSchema: $renderSchema_,
}: FormProps<T>) {
  const dataSchema = useProvideDataSchema($dataSchema);

  const renderComponent = useCallback(
    (
      $renderSchema:
        | UIElement<T>
        | UIElement<T>[]
        | DynamicElement
        | React.ReactNode,
    ) => {
      const processedProps: { children?: React.ReactNode } = Object.keys(
        ($renderSchema as UIElement<T>).props || {},
      ).reduce((result, key) => {
        // eslint-disable-next-line no-param-reassign,@typescript-eslint/no-use-before-define
        result[key] = renderElements(
          ($renderSchema as UIElement<T>).props?.[key],
        );

        return result;
      }, {} as Record<string, unknown>);

      const { children, ...props } = processedProps;

      const element = React.createElement(
        ($renderSchema as UIElement<T>).$element,
        props,
        children || null,
      );

      return (
        <DataConfigContext.Consumer>
          {(value) => (
            <DataConfigContext.Provider
              value={[
                ...(value || ([] as Bindings[])),
                ($renderSchema as UIElement<T>).binding!,
              ].filter(Boolean)}
            >
              {element}
            </DataConfigContext.Provider>
          )}
        </DataConfigContext.Consumer>
      );
    },
    [],
  );

  const renderElements = useCallback(
    (
      $renderSchema:
        | UIElement<T>
        | UIElement<T>[]
        | DynamicElement
        | React.ReactNode,
    ): React.ReactNode => {
      if (Array.isArray($renderSchema)) {
        return $renderSchema.map((res) => renderElements(res));
      }

      if (($renderSchema as UIElement<T>)?.$$kind === 'anthaathi/element') {
        return renderComponent($renderSchema);
      }

      if (($renderSchema as DynamicElement)?.$$kind === 'anthaathi/dynamic') {
        return apply(($renderSchema as DynamicElement).jsonLogic, {
          test: 'test',
        });
      }

      return $renderSchema as React.ReactNode;
    },
    [],
  );

  const element = useMemo(
    () => renderElements($renderSchema_) || null,
    [$renderSchema_],
  );

  return (
    <DataModelRegistry.Provider value={dataSchema}>
      <DataSchemaRegistry.Provider value={$dataSchema}>
        {element}
      </DataSchemaRegistry.Provider>
    </DataModelRegistry.Provider>
  );
}

export default Form;
