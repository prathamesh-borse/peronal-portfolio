"use client";
import { GlobalProvider } from "./context/GlobalContext";
import Background from "./components/Background/Background";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/MyProjects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <GlobalProvider>
        <Background />
        <Navbar />
        <Main />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </GlobalProvider>
    </>
  );
}
