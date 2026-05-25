import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const shapeRef = useRef(null);

  useLayoutEffect(() => {
    gsap.to(shapeRef.current, {
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      attr: {
        d: "M420,200Q320,380,200,300Q80,220,180,120Q280,20,420,200Z",
      },
    });
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden bg-[#050816]"
    >
      {/* BACKGROUND SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <svg width="600" height="600" viewBox="0 0 400 400">
          <path
            ref={shapeRef}
            fill="#22d3ee"
            d="M300,200Q300,300,200,300Q100,300,100,200Q100,100,200,100Q300,100,300,200Z"
          />
        </svg>
      </div>

      {/* HERO CONTENT */}
      <div className="relative z-10 text-center max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
          Build Modern Websites
          <span className="block text-cyan-400">with Smooth Animation</span>
        </h1>

        <p className="mt-6 text-gray-400 text-lg">
          A clean GSAP-powered landing page with React and Tailwind CSS.
        </p>

        <div className="mt-10 flex gap-4 justify-center">
          <button className="px-8 py-4 bg-cyan-400 text-black font-semibold rounded-full hover:scale-105 transition">
            Get Started
          </button>

          <button className="px-8 py-4 border border-white/20 rounded-full hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
