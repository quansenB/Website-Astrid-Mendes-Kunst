import Image from "next/image";
import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="prose max-w-6xl m-auto">
      <Hero />
      <Portfolio />
      <Contact />
      <Footer/>
    </main>
  );
}
