import { AppProps } from "next/app";

// import "../styles/globals.css"; //global css

function Root({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default Root;
