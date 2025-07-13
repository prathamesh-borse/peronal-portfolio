"use client";
import { GlobalProvider } from "./context/GlobalContext";
import Background from "./components/Background/Background";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/MyProjects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home({ ...pageProps }) {
  return (
    <>
      <GlobalProvider>
        <Background />
        <Navbar {...pageProps} />
        <Main />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </GlobalProvider>
    </>
  );
}
