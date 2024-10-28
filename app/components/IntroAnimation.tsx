import { Khand } from "next/font/google";

const openSans = Khand({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function IntroAnimation() {
  return (
    <div className="absolute z-20 flex justify-center items-center overflow-hidden top-0 bottom-0 left-0 right-0">
      <span className="absolute top-full w-px h-32 bg-black animate-verticalLine1"></span>
      <span className="absolute bottom-full w-px h-32 bg-black animate-verticalLine2"></span>

      <span className="absolute left-0 top-full w-px h-[800px] bg-black rotate-[-45deg] animate-semiHorizontalLine1"></span>
      <span className="absolute right-0 bottom-full w-px h-[200px] bg-black rotate-[-45deg] animate-semiHorizontalLine2"></span>

      <span className="absolute top-[110%] left-[28%] w-12 h-12 bg-black rounded-full animate-circle"></span>

      <span className="absolute right-[95%] bottom-[90%] w-[300px] h-[300px] bg-black animate-rectangular"></span>
      <div
        className={
          openSans.className + " text text-9xl font-medium text-black mt-64"
        }
      >
        <span className="image-text">LIT</span>
        <span>E</span>
      </div>
      <span className="single-letter">E</span>
      {/* Subtext */}
      <p
        className={`${openSans.className} animate-subtext opacity-0 text-6xl font-medium text-black mt-64`}
      >
        Design & Development
      </p>
    </div>
  );
}
