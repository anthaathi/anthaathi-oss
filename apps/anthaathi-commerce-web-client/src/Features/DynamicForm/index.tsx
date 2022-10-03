import type { Responsive } from 'baseui/block';
import { createContext, createEffect, For, useContext } from 'solid-js';
import { FormControl } from '~/Features/Core/Components/FormControl';
import { Grid } from '~/Features/Core/Components/Grid';
import { Input } from '~/Features/Core/Components/Input';
import { createStore } from 'solid-js/store';
import { useStyletron } from '@anthaathi/solid-styletron';

const formValueAtom = createStore<Record<string, Record<string, object>>>({
  default: {},
});

const FormKeyContext = createContext<string>(null as never as string);

export interface FormField {
  type: 'checkboxes' | 'dropdown' | 'input' | 'textarea';
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
  const [, setFormValue] = formValueAtom;

  const [css, $theme] = useStyletron();

  createEffect(() => {
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
        <Grid>
          {body.map((field) => {
            // TODO: Fix type
            let component: any;

            switch (field.type) {
              case 'input':
                component = <RenderInputField {...field} />;
                break;
              case 'dropdown':
                component = <RenderDropdown {...field} />;
                break;
              default:
                component = () => <div />;
            }

            return (
              <div
                class={css({
                  gridColumn: '1 / 5',
                  paddingLeft: $theme.sizing.scale500,
                  paddingRight: $theme.sizing.scale500,
                })}
              >
                {component}
              </div>
            );
          })}
        </Grid>
      </form>
    </FormKeyContext.Provider>
  );
}

function useFormValue<T>(
  fieldId: string, // eslint-disable-next-line no-unused-vars
): [T, (_: T) => void] {
  const formKey = useContext(FormKeyContext);

  if (!formKey) {
    throw new Error('Requires form key');
  }

  const [formValue, setFormValue] = formValueAtom;

  const processedFormValue = formValue[formKey]?.[fieldId] as never as T;

  const onChangeValue = (newValue: T) => {
    setFormValue((prevValue) => ({
      ...prevValue,
      [formKey]: {
        ...(prevValue[fieldId] || {}),
        [fieldId]: newValue as never,
      },
    }));
  };

  return [processedFormValue, onChangeValue];
}

export function RenderInputField(props: InputFormField & FormField) {
  const [value, setValue] = useFormValue<string>(props.id);

  return (
    <FormControl label={props.label} for={'form' + props.id}>
      <Input
        placeholder={props.placeholder}
        id={'form' + props.id}
        value={value}
        onChange={(prev) => {
          setValue((prev.target as HTMLInputElement).value);
        }}
        required={props.validations?.['required']}
      />
    </FormControl>
  );
}

export function RenderDropdown(props: FormField & DropdownFormField) {
  const [value, setValue] = useFormValue<string>(props.id);
  const [css] = useStyletron();

  console.log(value);

  return (
    <>
      <select
        class={css({ width: '100%' })}
        value={value}
        onChange={(value) => {
          setValue(value.target.value);
        }}
      >
        <For each={props.options}>
          {(option) => {
            return <option id={option}>{option}</option>;
          }}
        </For>
      </select>
    </>
  );
}
