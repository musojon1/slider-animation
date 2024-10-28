import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    url: "/images/slide1.png",
    title: "Image 1",
    description:
      "Tailwind lets you conditionally apply utility classes in different states using variant modifiers. For example, use hover:delay-300 to only apply the delay-300 utility on hover.",
  },
  {
    id: 2,
    url: "/images/slide2.png",
    title: "Image 2",
    description:
      "You can also use variant modifiers to target media queries like responsive breakpoints, dark mode, prefers-reduced-motion, and more. For example, use md:delay-300 to apply the delay-300 utility at only medium screen sizes and above.",
  },
  {
    id: 3,
    url: "/images/slide3.png",
    title: "Image 3",
    description:
      "To learn more, check out the documentation on Responsive Design, Dark Mode and other media query modifiers.",
  },
];

const Slider = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const activeSlide = slides[activeIndex];
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 2000); // Adjust the interval as needed

    return () => clearInterval(interval);
  }, [slides]);

  return (
    <div className="absolute top-0 bottom-0 left-0 right-0">
      <div className="absolute flex-row w-[250px] right-10 top-10 gap-4 animate-slideTextIn">
        <p className="text-center">0{activeIndex + 1}</p>
        <p className="text-purple-600 text-center my-4">{activeSlide.title}</p>
        <p>{activeSlide.description}</p>
      </div>
      <div className="slider absolute bottom-2/3 w-[800px] animate-slideIn delay-500">
        {slides.map((slide, index) => {
          const isActive = index === activeIndex;
          const prevIndex =
            activeIndex === 0 ? slides.length - 1 : activeIndex - 1;
          const nextIndex =
            activeIndex === slides.length - 1 ? 0 : activeIndex + 1;

          // Determine the classes for each image
          let left = "0";

          if (index === prevIndex) {
            left = "left-full"; // Move left (small)
          } else if (isActive) {
            left = "left-1/2"; // Active center (large)
          } else if (index === nextIndex) {
            left = "left-0"; // Move right (small)
          }

          return (
            <div
              key={slide.id}
              className={`slide !absolute bg-red-400 duration-200 w-[400px] h-[500px] delay-100	${
                index === activeIndex ? "z-10 scale-200" : "scale-50"
              } ${left} ${
                index === 2 ? " animate-activeSlide" : " animate-inActive"
              }`}
            >
              <Image
                src={slide.url}
                alt={`Slide ${index + 1}`}
                layout="fill"
                objectFit="cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
