import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Siblings from "./components/Siblings";
import Paradox from "./components/Paradox";
import Footer from "./components/Footer";

export default function Home() {
  return (

    <>
      <Header/>
      <Hero/>
      <Siblings/>
      <Paradox/>
      <Footer/>
    </>
  );
}
