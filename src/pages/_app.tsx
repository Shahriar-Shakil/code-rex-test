import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "antd/dist/reset.css";
import "@/styles/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
