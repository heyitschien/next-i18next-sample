# next-i18next-sample (ICP/MVS)

A minimal Next.js (Pages Router) + next-i18next repo matching our ICP/MVS:
- Standard `public/locales/<lang>/<namespace>.json` structure
- Locales: `en`, `fr`, `vi`
- Pages: `/`, `/products`, `/checkout`

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3001
```

## Notes
- Next.js i18n routing is enabled in `next.config.mjs` (locales & defaultLocale).
- `next-i18next.config.js` sets `localePath` to `public/locales`.
- Each page loads its namespaces via `serverSideTranslations(locale, [..])`.
- Language switcher is in `pages/_app.js`.

## Why Pages Router?
- It keeps the sample simple, stable, and fully aligned with next-i18next defaults.
- Our worker autodetection will also cover App Router repos via route scanning.
