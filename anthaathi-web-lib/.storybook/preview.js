import './reset.css';
import { reactIntl } from './react-intl';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  reactIntl,
  locale: reactIntl.defaultLocale,
  locales: {
    'en-US': 'English',
  },
};
