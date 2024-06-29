import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Footer from "./Footer";
import Hero from "./Hero";
import NavBar from "./NavBar";
import Works from "./Works";

function App() {
  return (
    <div className="app">
      <div className="navbar-container-layout">
        <NavBar />
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
