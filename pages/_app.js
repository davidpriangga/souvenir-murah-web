import "../styles/globals.css";
import Layout from "../components/Layout";
import { DataProvider } from "../store/GlobalState";
import { CartProvider } from "react-use-cart";

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <DataProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DataProvider>
    </CartProvider>
  );
}

export default MyApp;
