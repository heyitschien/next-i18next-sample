import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import nextI18NextConfig from '../next-i18next.config.cjs';

export default function Home() {
  const { t } = useTranslation(['home', 'common']);
  return (
    <section>
      <h1>{t('home:title')}</h1>
      <p>{t('home:subtitle')}</p>
      <p style={{marginTop: 24}}>{t('common:cta_explore')}</p>
    </section>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'], nextI18NextConfig))
    }
  };
}
