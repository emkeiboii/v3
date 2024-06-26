import "./App.css";
import Hero from "./Hero";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="app">
      <div className="navbar-container">
        <NavBar />
      </div>
      <Hero />
    </div>
  );
}

export default App;
