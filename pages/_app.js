import "@/styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";

export default function App({ Component, pageProps }) {
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
