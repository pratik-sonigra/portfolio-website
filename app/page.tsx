import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
