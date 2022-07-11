import type { AppProps } from "next/app";
import NextNProgress from "nextjs-progressbar";
import { Toaster } from "react-hot-toast";

import "@css/globals.css";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress
        color="#77ACF1"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
        showOnShallow
      />
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
        }}
      />
    </>
  );
}

export default MyApp;
