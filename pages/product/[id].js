import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import nextI18NextConfig from '../../next-i18next.config.cjs';

export default function ProductDetail({ id }) {
  const { t } = useTranslation(['product']);
  return (
    <section>
      <h1>{t('product:title', { id })}</h1>
      <p>{t('product:description')}</p>
      <div style={{marginTop: 16}}>
        <strong>{t('product:price_label')}</strong> {t('product:price_value', { price: '$29' })}
      </div>
    </section>
  );
}

export async function getStaticPaths() {
  // Minimal samples for detectors and demos
  const ids = ['123', '456'];
  return {
    paths: ids.map((id) => ({ params: { id } })),
    fallback: 'blocking'
  };
}

export async function getStaticProps({ params, locale }) {
  const id = params?.id ?? '123';
  return {
    props: {
      id,
      ...(await serverSideTranslations(locale, ['common', 'product'], nextI18NextConfig))
    }
  };
}
