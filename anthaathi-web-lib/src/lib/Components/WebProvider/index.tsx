import * as React from 'react';
import { IntlProvider } from 'react-intl';
import type { MessageFormatElement } from '@formatjs/icu-messageformat-parser';
import { useMemo } from 'react';
import enUS from '../../../../locales/compiled-locales/en-US.json';

export interface WebProviderProps {
  lang: string;
  children: React.ReactNode;
  messages?: Record<string, string> | Record<string, MessageFormatElement[]>;
}

export function WebProvider({ lang, children, messages }: WebProviderProps) {
  const defaultMessages: object | undefined = useMemo(
    () => ({ 'en-US': enUS }[lang]),
    [lang],
  );

  return (
    <IntlProvider
      locale={lang}
      messages={{
        ...(defaultMessages || {}),
        ...(messages || {}),
      }}
    >
      {children}
    </IntlProvider>
  );
}

export default WebProvider;
