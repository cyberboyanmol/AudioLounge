import { Navigation } from "@/components";
import { useEffect } from "react";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import reduxStore from "@/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import MainLayout from "@/components/Layout/MainLayout";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={reduxStore}>
      <AnimatePresence>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
        <ToastContainer />
      </AnimatePresence>
    </Provider>
  );
}
