import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.cjs';

export default function Products() {
  const { t } = useTranslation(['products']);
  const items = t('products:items', { returnObjects: true });
  const countText = t('products:items_count', { count: Array.isArray(items) ? items.length : 0 });
  return (
    <section>
      <h1 data-testid="products-title">{t('products:title')}</h1>
      <p data-testid="products-subtitle">{t('products:subtitle')}</p>

      <p data-testid="products-count" style={{ marginTop: 8 }}>{countText}</p>
      <p data-testid="products-hello" style={{ marginTop: 8 }}>{t('products:hello_name', { name: 'Ada' })}</p>

      <ul style={{ marginTop: 16 }}>
        {Array.isArray(items) && items.map((item, idx) => (
          <li key={idx} style={{ padding: '8px 0' }}>
            <strong>{item.name}</strong> — {item.price}
          </li>
        ))}
      </ul>

      <div data-testid="products-long" style={{ marginTop: 20, maxWidth: 220, border: '1px solid #eee', padding: 12 }}>
        {t('products:length_long')}
      </div>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'products'], nextI18NextConfig))
    }
  };
}
