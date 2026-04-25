import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import nextI18NextConfig from '../next-i18next.config.cjs';

function Nav() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { locale, locales: allLocales = ['en', 'fr', 'vi'], asPath } = router;
  const locales = allLocales.filter((l) => l !== 'zz-pseudo');

  return (
    <header
      style={{
        padding: '12px 16px',
        borderBottom: '1px solid #eee',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <nav style={{ display: 'flex', gap: 12 }} aria-label={t('nav_aria')}>
        <Link href="/" locale={locale}>
          {t('nav_home')}
        </Link>
        <Link href="/products" locale={locale}>
          {t('nav_products')}
        </Link>
        <Link href="/checkout" locale={locale}>
          {t('nav_checkout')}
        </Link>
      </nav>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontSize: 12, color: '#555' }}>{t('switch_locale')}</span>
        <div style={{ display: 'flex', gap: 8 }} role="group" aria-label={t('switch_locale')}>
          {locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => router.push(asPath, asPath, { locale: l })}
              style={{
                padding: '6px 10px',
                borderRadius: 6,
                border: '1px solid #ddd',
                background: l === locale ? '#111' : '#fff',
                color: l === locale ? '#fff' : '#111',
                cursor: 'pointer',
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}

function App({ Component, pageProps }) {
  return (
    <>
      <Nav />
      <main style={{padding: 24}}>
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
