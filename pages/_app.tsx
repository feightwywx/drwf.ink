import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
