// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/icon-192.png" sizes="192x192" />
        <meta name="theme-color" content="#22c55e" />
        <meta name="description" content="FootballFan - The ultimate football fan website!" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
