"use client";
import dynamic from "next/dynamic";
import Script from "next/script";
const Background = dynamic(() => import("./components/Background/Background"), {
  ssr: false,
});
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/MyProjects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

export default function Home({ ...pageProps }) {
  return (
    <>
      <Script id="ld-json-person" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Prathamesh Borse",
          url: "https://your-domain.example/",
          jobTitle: "Full Stack Developer",
          sameAs: [
            "https://github.com/prathamesh-borse",
            "https://www.linkedin.com/in/prathameshborse/",
            "https://x.com/imprathamesh01",
            "https://medium.com/@prathameshborse",
          ],
          image: "/favicon_2.png",
        })}
      </Script>
      <Background />
      <Navbar {...pageProps} />
      <Main />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
