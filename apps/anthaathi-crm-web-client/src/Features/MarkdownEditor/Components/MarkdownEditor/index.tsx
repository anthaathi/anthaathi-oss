import { Textarea } from 'baseui/textarea';
import { useStyletron } from 'baseui';
import { Button, KIND, SIZE } from 'baseui/button';
import React, { useCallback, useRef } from 'react';
import { Icon } from '../../../Core/Components/Icon';
import { expandBorderStyles } from 'baseui/styles';

export interface MarkdownEditorProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange(_value: string): void;
  id?: string;
}

export function MarkdownEditor({ value, onChange, id }: MarkdownEditorProps) {
  const [css, $theme] = useStyletron();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const insertText = useCallback(
    (start: string, end = '') => {
      if (!textareaRef.current) {
        return;
      }

      const { selectionStart, selectionEnd, value } = textareaRef.current;

      const startingText = value.substring(0, selectionStart);
      const endingText = value.substring(selectionEnd);

      const selectedText = value.substring(selectionStart, selectionEnd);

      if (
        startingText.endsWith(start) &&
        (!end || endingText.startsWith(end))
      ) {
        const newStartingText = startingText.substring(
          0,
          startingText.length - start.length
        );

        const newEndingText = endingText.substring(
          endingText.length + end.length
        );

        onChange(newStartingText + selectedText + newEndingText);

        setTimeout(() => {
          textareaRef.current?.setSelectionRange(
            newStartingText.length,
            selectedText.length + newEndingText.length
          );
          textareaRef.current?.focus();
        });
      } else {
        onChange(startingText + start + selectedText + end + endingText);

        setTimeout(() => {
          textareaRef.current?.setSelectionRange(
            (startingText + start).length,
            (startingText + start + selectedText).length
          );
          textareaRef.current?.focus();
        }, 0);
      }
    },
    [textareaRef]
  );

  const insertAtStart = useCallback(
    (contentToInsert: string) => {
      if (!textareaRef.current) {
        return;
      }

      console.log(contentToInsert);
    },
    [textareaRef]
  );

  const insertURL = useCallback(() => {}, [textareaRef]);

  return (
    <div
      className={css({
        ...expandBorderStyles($theme.borders.border200),
        borderRadius: $theme.borders.inputBorderRadius,
      })}
    >
      <div
        className={css({
          display: 'flex',
          backgroundColor: $theme.colors.backgroundTertiary,
          padding: $theme.sizing.scale200,
          borderBottomColor: $theme.borders.border200.borderColor,
          borderBottomWidth: $theme.borders.border200.borderWidth,
          borderBottomStyle: $theme.borders.border200.borderStyle as never,
          borderTopRightRadius: $theme.borders.inputBorderRadius,
          borderTopLeftRadius: $theme.borders.inputBorderRadius,
        })}
      >
        <ActionButton onClick={() => insertAtStart('### ')}>
          <Icon icon="header" />
        </ActionButton>

        <ActionButton onClick={() => insertText('**', '**')}>
          <Icon icon="bold" />
        </ActionButton>

        <ActionButton onClick={() => insertText('_', '_')}>
          <Icon icon="italic" />
        </ActionButton>

        <ActionButton onClick={() => insertAtStart('> ')}>
          <Icon icon="quote-left" />
        </ActionButton>

        <ActionButton onClick={() => insertURL()}>
          <Icon icon="link" />
        </ActionButton>

        <ActionButton onClick={() => insertAtStart('-')}>
          <Icon icon="list-ul" />
        </ActionButton>

        <ActionButton onClick={() => insertAtStart('- []')}>
          <Icon icon="check-square-o" />
        </ActionButton>

        <ActionButton onClick={() => insertText('@')}>
          <Icon icon="at" />
        </ActionButton>

        <ActionButton>
          <Icon icon="upload" />
        </ActionButton>
      </div>

      <Textarea
        inputRef={textareaRef}
        id={id}
        onChange={(e) => {
          onChange((e.target as never as HTMLInputElement).value);
        }}
        value={value}
      />
    </div>
  );
}

export interface ActionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function ActionButton({ children, onClick }: ActionButtonProps) {
  return (
    <Button
      kind={KIND.secondary}
      size={SIZE.mini}
      onClick={onClick}
      type="button"
    >
      {children}
    </Button>
  );
}
