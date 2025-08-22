import React, { useState, useEffect } from "react";

const Slider = () => {
  const slides = [
    { color: "#FF5722" },
    { color: "#00BCD4" },
    { color: "#4CAF50" },
    { color: "#CDDC39" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-64 perspective-1000 flex justify-center items-center">
      {slides.map((slide, index) => {
        // Calculate position relative to current
        const offset = (index - current + slides.length) % slides.length;

        let transformStyle = "";
        if (offset === 0) transformStyle = "translateX(0px) scale(1) z-20";
        if (offset === 1) transformStyle = "translateX(60px) scale(0.9) z-10";
        if (offset === 2) transformStyle = "translateX(120px) scale(0.8) z-5";
        if (offset === slides.length - 1) transformStyle = "translateX(-60px) scale(0.9) z-10";

        return (
          <div
            key={index}
            className={`absolute w-64 h-40 rounded-xl shadow-xl transition-all duration-500`}
            style={{
              backgroundColor: slide.color,
              transform: transformStyle.replace(/\s/g, " "),
            }}
          ></div>
        );
      })}
    </div>
  );
};

export default Slider;
