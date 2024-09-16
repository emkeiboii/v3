import { useEffect, useState } from "react";
import About from "./About";
import "./styles/App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./ui/NavBar";
import Works from "./Works";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [scrollPosition, setScrollPosition] = useState({ y: 0, lastY: 0 });
  const [hideNav, setHideNav] = useState(true);
  const [hideLoading, setHideLoading] = useState(false);

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

  useEffect(() => {
    const handleAnimationEnd = (event) => {
      if (event.animationName === "delete") {
        setHideLoading(true);
      }
    };

    const loadingContainer = document.querySelector(".loading-container");
    loadingContainer.addEventListener("animationend", handleAnimationEnd);

    return () => {
      loadingContainer.removeEventListener("animationend", handleAnimationEnd);
    };
  }, []);

  return (
    <div className="app">
      {!hideLoading ? (
        <LoadingScreen />
      ) : (
        <>
          <div className={`navbar-container-layout ${hideNav && "hidenav"}`}>
            <NavBar scrollPosition={scrollPosition.y} />
          </div>
          <Hero />
          <About />
          <Works />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
