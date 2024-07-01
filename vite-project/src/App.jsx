import { useEffect, useState } from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Works from "./Works";
function App() {
  const [scrollPosition, setScrollPosition] = useState({ y: 0, lastY: 0 });
  const [hideNav, setHideNav] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition((prevState) => {
        return { y: window.scrollY, lastY: prevState.y };
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const threshold = 50;
    if (
      scrollPosition.y > threshold &&
      scrollPosition.y > scrollPosition.lastY
    ) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [scrollPosition]);

  return (
    <div className="app">
      <div className={`navbar-container-layout ${hideNav && "hidenav"}`}>
        <NavBar scrollPosition={scrollPosition.y} />
      </div>
      <Hero />
      <About />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
