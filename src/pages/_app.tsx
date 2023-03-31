import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import "@/styles/styles.css";
import { request } from "@/config/api";
import { SWRConfig } from "swr";

const fetcher = (url: string) => request.get(url).then((r) => r.data);
export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <Component {...pageProps} />;
    </SWRConfig>
  );
}
