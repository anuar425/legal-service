import About from "@/components/about";
import Application from "@/components/application";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Reviews from "@/components/reviews";
import Sertificate from "@/components/sertificate";
import Services from "@/components/services";
import { AnimatePresence } from "framer-motion";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <About />
      <Sertificate />
      <Reviews />
      <Application />
      <Footer />
    </>
  );
}
