import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}

export default appWithTranslation(App);
