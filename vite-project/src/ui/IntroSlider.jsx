import { useEffect, useState } from "react";

function IntroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideDuration = 3000; // 3 seconds for each slide
  const slides = ["Enough", "Kinda", "Sometimes", "Yes"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, slideDuration);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  return (
    <div className="intro">
      <div className="intro-row">
        Creative?
        <div className="v-slider-frame">
          <ul
            className="v-slides"
            style={{ transform: `translateY(${-currentIndex * 50}px)` }}
          >
            {slides.map((slide, index) => (
              <li key={index} className="v-slide">
                {slide}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IntroSlider;
