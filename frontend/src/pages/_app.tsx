import { Navigation } from "@/components";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import reduxStore from "@/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={reduxStore}>
      <AnimatePresence>
        <Navigation />
        <Component {...pageProps} />
      </AnimatePresence>
    </Provider>
  );
}
