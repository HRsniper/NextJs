import { AppProps } from "next/app";

import "normalize.css/normalize.css";
import "../styles/global.css";

function Root({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default Root;
