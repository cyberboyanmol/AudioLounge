import { Navigation } from "@/components";
import { useEffect } from "react";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import reduxStore, { persistor } from "@/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import MainLayout from "@/components/Layout/MainLayout";
import { useRouter } from "next/router";
import { PersistGate } from "redux-persist/integration/react";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={<h1>loading..</h1>} persistor={persistor}>
        <AnimatePresence>
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
          <ToastContainer />
        </AnimatePresence>
      </PersistGate>
    </Provider>
  );
}
