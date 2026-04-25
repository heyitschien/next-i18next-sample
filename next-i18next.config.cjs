module.exports = {
  i18n: {
    defaultLocale: 'en',
    // Must include zz-pseudo so next-i18next loads worker-generated pseudo files (matches next.config.mjs)
    locales: ['en', 'fr', 'vi', 'zz-pseudo']
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  localePath: './public/locales'
};
