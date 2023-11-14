import store from "@redux/store";
import "@styles/global.css";
import Layout from "@components/Layout";

import "antd/dist/antd.css";
import { AppProps } from "next/app";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <Provider store={store}>
      <Layout>
        <div className="PageContent">
          <Component {...pageProps} />
        </div>
      </Layout>
    </Provider>
  );
}

export default MyApp;
