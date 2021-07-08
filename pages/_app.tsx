import { AppProps } from "next/app";
import { GlobalStyles } from "../theme/globals";
import { createContext, useState } from "react";

export const HanoiContext = createContext([]);

function MyApp({ Component, pageProps }: AppProps) {
  const [hanoiHistory, setHanoiHistory] = useState([]);

  return (
    <HanoiContext.Provider value={[hanoiHistory, setHanoiHistory]}>
      <GlobalStyles />
      <Component {...pageProps} />
    </HanoiContext.Provider>
  );
}

export default MyApp;
