import Document, { Html, Head, Main, NextScript } from 'next/document';

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
          <Script id="tracking-api-key" strategy="beforeInteractive">
            {`window.trackingApiKey = 'mhHoCDQEPiYD7vU37K5AX0bKuP86a31wU2P8N86L';`}
          </Script>
          <Script src="https://prahwa.net/tracking.js" strategy="beforeInteractive" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;