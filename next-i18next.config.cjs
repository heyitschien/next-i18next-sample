module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'vi']
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: './public/locales'
};
