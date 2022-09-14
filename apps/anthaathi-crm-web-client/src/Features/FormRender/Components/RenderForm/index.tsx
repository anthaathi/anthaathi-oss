import { Cell, Grid } from 'baseui/layout-grid';
import React, { useCallback, useContext, useEffect } from 'react';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Responsive } from 'baseui/block';
import { MarkdownEditor } from '../../../MarkdownEditor';
import { atom, useRecoilState } from 'recoil';

const formValueAtom = atom<Record<string, Record<string, object>>>({
  key: '_dynamicFormValues',
  default: {},
});

const FormKeyContext = React.createContext<string>(null as never as string);

export interface FormField {
  type: 'checkboxes' | 'dropdown' | 'input' | 'markdown' | 'textarea';
  id: string;
  // eslint-disable-next-line
  attributes?: Record<string, any>;
  // eslint-disable-next-line
  validations?: Record<string, any>;
  span?: Responsive<number>;
}

export interface MarkdownFormField {
  type: 'markdown';
  label: string;
  value?: string;
}

export interface TextareaFormField {
  type: 'textarea';
  label: string;
  description?: string;
  placeholder?: string;
  value?: string;
  validations?: Record<'required', boolean>;
}

export interface InputFormField {
  type: 'input';
  label: string;
  description?: string;
  placeholder?: string;
  value?: string;
  validations?: Record<'required', boolean>;
}

export interface DropdownFormField {
  type: 'dropdown';
  label: string;
  description?: string;
  multiple?: boolean;
  options?: string[];
  validations?: Record<'required', boolean>;
}

export interface CheckboxFormField {
  type: 'checkbox';
  label: string;
  description?: string;
  options?: string[];
  validations?: Record<'required', boolean>;
}

export interface DefaultFormField {
  type: 'hidden';
  // eslint-disable-next-line
  defaultValue: any;
}

export interface RenderFormProps {
  id: string;
  body: (FormField &
    (
      | MarkdownFormField
      | TextareaFormField
      | InputFormField
      | DropdownFormField
      | CheckboxFormField
      | DefaultFormField
    ))[];
}

export function RenderForm({ body, id }: RenderFormProps) {
  const [, setFormValue] = useRecoilState(formValueAtom);

  useEffect(() => {
    const result: Record<string, object> = {};

    body.forEach((res) => {
      // eslint-disable-next-line
      result[res.id] = (res as any).value;
    });

    setFormValue((prevValue) => ({
      ...prevValue,
      [id]: result,
    }));
  }, [id]);

  return (
    <FormKeyContext.Provider value={id}>
      <form>
        <Grid gridMaxWidth={0} gridMargins={0}>
          {body.map((field) => {
            let component: React.ReactNode;

            switch (field.type) {
              case 'input':
                component = <RenderInputField {...field} />;
                break;
              case 'markdown':
                component = <RenderMarkdownField {...field} />;
            }

            return (
              <Cell key={field.id} span={field.span || 12}>
                {component}
              </Cell>
            );
          })}
        </Grid>
      </form>
    </FormKeyContext.Provider>
  );
}

function useFormValue<T>(
  fieldId: string // eslint-disable-next-line no-unused-vars
): [T, (_: T) => void] {
  const formKey = useContext(FormKeyContext);

  if (!formKey) {
    throw new Error('Requires form key');
  }

  const [formValue, setFormValue] = useRecoilState(formValueAtom);

  const processedFormValue = formValue[formKey]?.[fieldId] as never as T;

  const onChangeValue = useCallback(
    (newValue: T) => {
      setFormValue((prevValue) => ({
        ...prevValue,
        [formKey]: {
          ...(prevValue[fieldId] || {}),
          [fieldId]: newValue as never,
        },
      }));
    },
    [formKey, fieldId]
  );

  return [processedFormValue, onChangeValue];
}

export function RenderInputField(props: InputFormField & FormField) {
  const [value, setValue] = useFormValue<string>(props.id);

  return (
    <FormControl label={props.label} htmlFor={'form' + props.id}>
      <Input
        placeholder={props.placeholder}
        id={'form' + props.id}
        value={value}
        onChange={(prev) => {
          setValue(prev.target.value);
        }}
        required={props.validations?.['required']}
      />
    </FormControl>
  );
}

export function RenderMarkdownField(props: MarkdownFormField & FormField) {
  const [value, setValue] = useFormValue<string>(props.id);

  return (
    <FormControl label={props.label} htmlFor={'form' + props.id}>
      <MarkdownEditor
        value={value}
        onChange={(_value) => {
          setValue(_value);
        }}
        id={'form' + props.id}
      />
    </FormControl>
  );
}
