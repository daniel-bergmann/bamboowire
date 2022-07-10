import "../styles/global.scss";
import Layout from "../components/layouts";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <body>
        <Component {...pageProps} />
      </body>
    </Layout>
  );
}

export default MyApp;
