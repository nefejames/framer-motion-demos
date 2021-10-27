import GlobalStyles from "../styles/GlobalStyles";
import Layout from "../layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Framer Motion</title>
      </Head>

      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
