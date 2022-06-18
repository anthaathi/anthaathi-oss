import {useIntl} from 'react-intl';

export function useDirection(): 'rtl' | 'ltr' {
  const intl = useIntl();

  return intl.locale.startsWith('ar') ? 'rtl' : 'ltr';
}
