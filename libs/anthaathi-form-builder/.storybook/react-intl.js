const locales = ['en-US'];

const messages = locales.reduce(
  (acc, lang) => ({
    ...acc,
    [lang]: import(`../locales/compiled-locales/${lang}.json`), // whatever the relative path to your messages json is
  }),
  {},
);

const formats = {};

export const reactIntl = {
  defaultLocale: 'en-US',
  locales,
  messages,
  formats,
};
