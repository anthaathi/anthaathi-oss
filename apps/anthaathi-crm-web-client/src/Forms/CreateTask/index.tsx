import {Cell, Grid} from 'baseui/layout-grid';
import {FormControl} from 'baseui/form-control';
import {Input} from 'baseui/input';
import {Datepicker} from 'baseui/datepicker';
import {Select} from 'baseui/select';
import * as React from 'react';
import {useStyletron} from 'baseui';
import dynamic from 'next/dynamic';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
const CKEditor = dynamic(
  () => import('@ckeditor/ckeditor5-react').then((docs) => docs.CKEditor),
  {
    ssr: false,
  },
);

export function CreateTask() {
  const [css] = useStyletron();

  return (
    <form className={css({flexGrow: 1})}>
      <Grid gridMaxWidth={0} gridGaps={0} gridMargins={0}>
        <Cell span={12}>
          <FormControl label="Summary">
            <Input value="omkar" placeholder="" />
          </FormControl>
        </Cell>

        <Cell span={12}>
          <FormControl label="Description">
            <CKEditor
              editor={ClassicEditor}
              data="<p>Hello from CKEditor 5!</p>"
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                console.log({event, editor, data});
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Focus.', editor);
              }}
            />
          </FormControl>
        </Cell>

        <Cell span={4}>
          <FormControl label="Due date">
            <Datepicker />
          </FormControl>
        </Cell>

        <Cell span={4}>
          <FormControl label="Priority">
            <Select options={[{label: 'Highest', id: 0}]} />
          </FormControl>
        </Cell>

        <Cell span={4}>
          <FormControl label="Priority">
            <Select options={[{label: 'Highest', id: 0}]} />
          </FormControl>
        </Cell>
      </Grid>
    </form>
  );
}
