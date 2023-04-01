import LoadingSpinner from "@/Components/UI/LoadingSpinner";
import { request } from "@/config/api";
import "@/styles/globals.css";
import "@/styles/styles.css";
import "antd/dist/reset.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import React from "react";
import { SWRConfig } from "swr";

const fetcher = (url: string) => request.get(url).then((r) => r.data);
export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);
  return (
    <AnimatePresence
      mode="wait"
      initial={false}
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <SWRConfig value={{ fetcher }}>
        {loading ? <LoadingSpinner /> : <Component {...pageProps} />}
      </SWRConfig>
    </AnimatePresence>
  );
}
