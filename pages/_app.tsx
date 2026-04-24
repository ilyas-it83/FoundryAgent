// pages/_app.tsx
import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { useEffect } from 'react';
import registerServiceWorker from '../utils/registerServiceWorker';

function FootballFanApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    registerServiceWorker();
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default FootballFanApp;
