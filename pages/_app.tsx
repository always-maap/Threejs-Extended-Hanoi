import { AppProps } from "next/app";
import { GlobalStyles } from "../theme/globals";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
