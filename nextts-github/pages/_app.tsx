import { AppProps } from "next/app";
import { CssBaseline } from "@material-ui/core";

function Root({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default Root;
