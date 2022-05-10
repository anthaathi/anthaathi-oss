import * as React from 'react';
import {
  ClassType,
  ComponentClass,
  Dispatch,
  FunctionComponent,
  ReactHTML,
  ReactSVG,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { JSONSchema7 } from 'json-schema';
import { apply, RulesLogic } from 'json-logic-js';
import generateInitialJSON from '../../Utils/generate-initial-JSON';
import { FormComponentRegistry } from '../FormComponentRegistryProvider';

export interface Bindings {
  $ref: string;
  $paths: (string | number)[];
}

export type ElementType<T> =
  | UIElement<T>
  | UIElement<T>[]
  | DynamicElement
  | React.ReactNode
  | ModelAccess;

export type TypeComponent =
  | string
  | keyof ReactHTML
  | keyof ReactSVG
  | FunctionComponent
  | ClassType<any, any, any>
  | ComponentClass;

export interface UIElement<T> {
  $import?: string;
  $element: TypeComponent;
  $$kind: 'anthaathi/element';
  scope?: string;
  props?: Record<string, ElementType<T>>;
  binding?: Bindings;
  datasourceBinding?: string | string[];
}

export interface FormProps<T, W = any> {
  $dataSchema: JSONSchema7[];
  $renderSchema: ElementType<T>;
  $dataSources?: Record<string, W>;
}

export interface DynamicElement {
  $$kind: 'anthaathi/dynamic';
  jsonLogic: RulesLogic;
}

export interface ModelAccess {
  $$kind: 'anthaathi/model';
  $path: (string | number)[];
}

export const DataConfigContext = React.createContext<Bindings[]>([]);

export const DataSchemaRegistry = React.createContext<Record<string, any>>({});

export const ConfigProvider = React.createContext<UIElement<any> | null>(null);

export const DataModelRegistry = React.createContext<
  [Record<string, any>, Dispatch<SetStateAction<Record<string, any>>>]
>(null as never);

const useProvideDataSchema = ($dataSchema: JSONSchema7[]) => {
  const initialValues = useMemo(() => {
    const returnObject: Record<string, any> = {};

    $dataSchema.forEach((e) => {
      returnObject[e.$id!] = generateInitialJSON(e);
    });

    return returnObject;
  }, [$dataSchema]);

  return useState<Record<string, any>>(initialValues);
};

export const DataSourceContext = React.createContext<
  [Record<string, any>, Dispatch<SetStateAction<Record<string, any>>>]
>(null as never);

export function Form<T>({
  $dataSchema,
  $renderSchema: $renderSchema_,
  $dataSources = {},
}: FormProps<T>) {
  const state = useState($dataSources || {});
  const [, setDataSources] = state;

  useEffect(() => {
    setDataSources($dataSources);
  }, [$dataSources]);

  const dataSchema = useProvideDataSchema($dataSchema);

  const registry = useContext(FormComponentRegistry);

  const renderComponent = useCallback(
    ($renderSchema: ElementType<T>) => {
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
        ($renderSchema as UIElement<T>).$import
          ? registry[($renderSchema as UIElement<T>).$import as never].find(
              (res) =>
                res.$element === ($renderSchema as UIElement<T>).$element,
            )?.component
          : ($renderSchema as UIElement<T>).$element,
        props,
        children || null,
      );

      return (
        <DataConfigContext.Consumer
          key={($renderSchema as UIElement<T>)?.props?.key as string}
        >
          {(value) => (
            <DataConfigContext.Provider
              value={[
                ...(value || ([] as Bindings[])),
                ($renderSchema as UIElement<T>).binding!,
              ].filter(Boolean)}
            >
              <ConfigProvider.Provider value={$renderSchema as UIElement<T>}>
                {element}
              </ConfigProvider.Provider>
            </DataConfigContext.Provider>
          )}
        </DataConfigContext.Consumer>
      );
    },
    [$renderSchema_, $dataSchema, dataSchema[0]],
  );

  const renderElements = useCallback(
    ($renderSchema: ElementType<T>): React.ReactNode => {
      if (Array.isArray($renderSchema)) {
        return $renderSchema.map((res) => renderElements(res));
      }

      if (($renderSchema as UIElement<T>)?.$$kind === 'anthaathi/element') {
        return renderComponent($renderSchema);
      }

      if (($renderSchema as DynamicElement)?.$$kind === 'anthaathi/dynamic') {
        return apply(
          ($renderSchema as DynamicElement).jsonLogic,
          dataSchema[0],
        );
      }

      if (($renderSchema as ModelAccess)?.$$kind === 'anthaathi/model') {
        return ($renderSchema as ModelAccess).$path.reduce(
          (object, key) => (object || {})[key],
          dataSchema[0],
        ) as any;
      }

      return $renderSchema as React.ReactNode;
    },
    [dataSchema[0], renderComponent],
  );

  const elementToRender = useMemo(
    () => renderElements($renderSchema_) || null,
    [$renderSchema_, dataSchema[0], renderElements],
  );

  return (
    <DataSourceContext.Provider value={state}>
      <DataModelRegistry.Provider value={dataSchema}>
        <DataSchemaRegistry.Provider value={$dataSchema}>
          {elementToRender}
        </DataSchemaRegistry.Provider>
      </DataModelRegistry.Provider>
    </DataSourceContext.Provider>
  );
}

export default Form;
