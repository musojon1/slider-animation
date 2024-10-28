"use client";
import { useEffect, useState } from "react";
import { Khand } from "next/font/google";
import IntroAnimation from "./components/IntroAnimation";
import Slider from "./components/Slider";

const openSans = Khand({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});
export default function Home() {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    // Trigger the animation when the component is mounted
    setStartAnimation(true);
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden relative bg-gray-100">
      <IntroAnimation />
      <Slider />
    </div>
  );
}
