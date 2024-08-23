import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    const { locale } = this.props.__NEXT_DATA__;
    return (
      <Html lang={locale}>
        <Head>
          {/* Tambahkan elemen link alternates untuk SEO */}
          <link rel="alternate" hrefLang="en" href="/en" />
          <link rel="alternate" hrefLang="id" href="/id" />
          <link rel="alternate" hrefLang="zh" href="/zh" />
          <link rel="alternate" hrefLang="x-default" href="/" />
          <link rel="icon" href="/favicon.png" />
          <Script
            id="tracking-api-key"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.trackingApiKey = 'mhHoCDQEPiYD7vU37K5AX0bKuP86a31wU2P8N86L';
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Script
            src="https://prahwa.net/tracking.js"
            strategy="afterInteractive"
            onLoad={() => {
              console.log('Tracking script loaded successfully.');
            }}
            onError={(e) => {
              console.error('Error loading tracking script:', e);
            }}
          />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
