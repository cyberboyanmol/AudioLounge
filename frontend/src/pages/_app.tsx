import MainLayout from "@/components/layouts/mainlayout";
import reduxStore, { persistor } from "@/store";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={reduxStore}>
      <PersistGate loading={<div>loading...</div>} persistor={persistor}>
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
