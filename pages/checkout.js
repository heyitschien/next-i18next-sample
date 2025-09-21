import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.cjs';

export default function Checkout() {
  const { t } = useTranslation(['checkout']);
  return (
    <section>
      <h1>{t('checkout:title')}</h1>
      <p>{t('checkout:subtitle')}</p>
      <form style={{ marginTop: 16, display: 'grid', gap: 12, maxWidth: 420 }}>
        <input placeholder={t('checkout:placeholders.name')} style={{ padding: 10, border: '1px solid #ccc', borderRadius: 6 }} />
        <input placeholder={t('checkout:placeholders.email')} style={{ padding: 10, border: '1px solid #ccc', borderRadius: 6 }} />
        <button type="button" style={{ padding: '10px 14px', borderRadius: 6, border: '1px solid #222', background: '#111', color: '#fff' }}>
          {t('checkout:pay')}
        </button>
      </form>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'checkout'], nextI18NextConfig))
    }
  };
}
