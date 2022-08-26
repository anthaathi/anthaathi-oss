import { Cell, Grid } from 'baseui/layout-grid';
import React from 'react';
import { FormControl } from 'baseui/form-control';
import { Input } from 'baseui/input';
import { Responsive } from 'baseui/block';
import { MarkdownEditor } from '../../../MarkdownEditor';

export interface FormField {
  type: 'checkboxes' | 'dropdown' | 'input' | 'markdown' | 'textarea';
  id: string;
  attributes?: Record<string, any>;
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
  defaultValue: any;
}

export interface RenderFormProps {
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

export function RenderForm({ body }: RenderFormProps) {
  return (
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

          return <Cell span={field.span || 12}>{component}</Cell>;
        })}
      </Grid>
    </form>
  );
}

export function RenderInputField(props: InputFormField & FormField) {
  return (
    <FormControl label={props.label} htmlFor={'form' + props.id}>
      <Input
        placeholder={props.placeholder}
        id={'form' + props.id}
        required={props.validations?.['required']}
      />
    </FormControl>
  );
}

export function RenderMarkdownField(props: MarkdownFormField & FormField) {
  return (
    <FormControl label={props.label} htmlFor={'form' + props.id}>
      <MarkdownEditor value="" onChange={() => {}} id={'form' + props.id} />
    </FormControl>
  );
}
