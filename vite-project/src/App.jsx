import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Works from "./pages/Works";
import About from "./pages/About";
import LoadingScreen from "./LoadingScreen";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleAnimationEnd = (event) => {
      if (event.animationName === "delete") {
        setIsLoading(false);
      }
    };

    const loadingContainer = document.querySelector(".loading-container");
    if (loadingContainer) {
      loadingContainer.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (loadingContainer) {
        loadingContainer.removeEventListener(
          "animationend",
          handleAnimationEnd
        );
      }
    };
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/works" element={<Works />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
