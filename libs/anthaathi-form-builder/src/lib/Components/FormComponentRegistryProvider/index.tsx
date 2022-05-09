import * as React from 'react';
import { TypeComponent } from '../Form';

export const FormComponentRegistry = React.createContext<
  Record<string, Registry[]>
>({});

export interface Registry {
  component: TypeComponent;
  $element: string;
}

export interface FormComponentRegistryProviderProps {
  children: React.ReactNode;
  registry: Record<string, Registry[]>;
}

export function FormComponentRegistryProvider({
  children,
  registry,
}: FormComponentRegistryProviderProps) {
  return (
    <FormComponentRegistry.Provider value={registry}>
      {children}
    </FormComponentRegistry.Provider>
  );
}

export default FormComponentRegistryProvider;
