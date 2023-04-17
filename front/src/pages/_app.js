import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <AnimatePresence initial={true} mode="sync">
      <Component {...pageProps} />
    </AnimatePresence>
  );
}
