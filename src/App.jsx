// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLayoutEffect, useRef } from "react";

// gsap.registerPlugin(ScrollTrigger);

// export default function App() {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const descRef = useRef(null);
//   const btnRef = useRef(null);

//   const featureRef = useRef(null);
//   const aboutRef = useRef(null);
//   const testRef = useRef(null);
//   const ctaRef = useRef(null);

//   useLayoutEffect(() => {
//     const ctx = gsap.context(() => {
//       // ================= HERO =================
//       const tl = gsap.timeline();

//       tl.from(titleRef.current, {
//         y: 60,
//         opacity: 0,
//         duration: 1,
//         ease: "power3.out",
//       })
//         .from(descRef.current, {
//           y: 40,
//           opacity: 0,
//           duration: 0.8,
//         })
//         .fromTo(
//           btnRef.current,
//           { scale: 0.5, opacity: 0 },
//           { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
//         );

//       // ================= FEATURES =================
//       gsap.fromTo(
//         featureRef.current.children,
//         { y: 80, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.2,
//           duration: 1,
//           scrollTrigger: {
//             trigger: featureRef.current,
//             start: "top 80%",
//           },
//         },
//       );

//       // ================= ABOUT =================
//       gsap.from(aboutRef.current, {
//         x: -100,
//         opacity: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: aboutRef.current,
//           start: "top 80%",
//         },
//       });

//       // ================= TESTIMONIAL =================
//       gsap.fromTo(
//         testRef.current.children,
//         { scale: 0.8, opacity: 0 },
//         {
//           scale: 1,
//           opacity: 1,
//           stagger: 0.2,
//           duration: 1,
//           scrollTrigger: {
//             trigger: testRef.current,
//             start: "top 80%",
//           },
//         },
//       );

//       // ================= CTA =================
//       gsap.from(ctaRef.current, {
//         scale: 0.9,
//         opacity: 0,
//         duration: 1,
//         scrollTrigger: {
//           trigger: ctaRef.current,
//           start: "top 85%",
//         },
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div className="bg-gray-950 text-white">
//       {/* ================= HERO ================= */}
//       <section
//         ref={heroRef}
//         className="h-screen flex flex-col justify-center items-center text-center px-6"
//       >
//         <h1
//           ref={titleRef}
//           className="text-5xl md:text-7xl font-bold leading-tight"
//         >
//           Build Beautiful Websites
//         </h1>

//         <p ref={descRef} className="mt-6 text-gray-400 max-w-xl">
//           Modern GSAP animations with React + Tailwind.
//         </p>

//         <button
//           ref={btnRef}
//           className="mt-8 px-6 py-3 bg-white text-black rounded-full"
//         >
//           Get Started
//         </button>
//       </section>

//       {/* ================= FEATURES ================= */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-14">Features</h2>

//         <div
//           ref={featureRef}
//           className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
//         >
//           <div className="p-6 bg-gray-900 rounded-2xl">⚡ Fast</div>
//           <div className="p-6 bg-gray-900 rounded-2xl">🎨 Modern</div>
//           <div className="p-6 bg-gray-900 rounded-2xl">📱 Responsive</div>
//         </div>
//       </section>

//       {/* ================= ABOUT ================= */}
//       <section
//         ref={aboutRef}
//         className="py-20 px-6 max-w-4xl mx-auto text-center"
//       >
//         <h2 className="text-4xl font-bold mb-6">About Us</h2>
//         <p className="text-gray-400">
//           We build modern animated websites using GSAP, React, and Tailwind CSS.
//           Our goal is to create smooth, interactive user experiences.
//         </p>
//       </section>

//       {/* ================= TESTIMONIALS ================= */}
//       <section className="py-20 px-6">
//         <h2 className="text-4xl font-bold text-center mb-14">Testimonials</h2>

//         <div
//           ref={testRef}
//           className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
//         >
//           <div className="p-6 bg-gray-900 rounded-2xl">"Amazing work!"</div>

//           <div className="p-6 bg-gray-900 rounded-2xl">
//             "Super smooth animations."
//           </div>

//           <div className="p-6 bg-gray-900 rounded-2xl">
//             "Looks professional!"
//           </div>
//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section
//         ref={ctaRef}
//         className="py-20 text-center bg-gray-900 mx-6 rounded-2xl"
//       >
//         <h2 className="text-4xl font-bold mb-4">Ready to start?</h2>

//         <button className="px-6 py-3 bg-white text-black rounded-full">
//           Join Now
//         </button>
//       </section>

//       {/* ================= FOOTER ================= */}
//       <footer className="py-10 text-center text-gray-500">
//         © 2026 GSAP Landing Page. All rights reserved.
//       </footer>
//     </div>
//   );
// }
// ------------------------
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnRef = useRef(null);

  const featureRef = useRef(null);
  const aboutRef = useRef(null);
  const testRef = useRef(null);
  const ctaRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // ================= HERO =================
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(descRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
        })
        .fromTo(
          btnRef.current,
          { scale: 0.5, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.8, ease: "power3.out" },
        );

      // ================= FEATURES =================
      gsap.fromTo(
        featureRef.current.children,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: featureRef.current,
            start: "top 85%",
          },
        },
      );

      // ================= ABOUT =================
      gsap.from(aboutRef.current, {
        x: -80,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 85%",
        },
      });

      // ================= TESTIMONIALS =================
      gsap.fromTo(
        testRef.current.children,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          scrollTrigger: {
            trigger: testRef.current,
            start: "top 85%",
          },
        },
      );

      // ================= CTA =================
      gsap.from(ctaRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-gray-950 text-white">
      {/* ================= HERO (FIXED) ================= */}
      <section
        ref={heroRef}
        className="min-h-[80vh] flex flex-col justify-center items-center text-center px-6 py-20"
      >
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold leading-tight"
        >
          Build Beautiful Websites
        </h1>

        <p ref={descRef} className="mt-6 text-gray-400 max-w-xl text-lg">
          Modern GSAP animations with React + Tailwind for smooth UI
          experiences.
        </p>

        <button
          ref={btnRef}
          className="mt-8 px-6 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition"
        >
          Get Started
        </button>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-16 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Features</h2>

        <div
          ref={featureRef}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <div className="p-6 bg-gray-900 rounded-2xl">⚡ Fast</div>
          <div className="p-6 bg-gray-900 rounded-2xl">🎨 Modern</div>
          <div className="p-6 bg-gray-900 rounded-2xl">📱 Responsive</div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section
        ref={aboutRef}
        className="py-20 px-6 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl font-bold mb-6">About Us</h2>
        <p className="text-gray-400">
          We create modern animated websites using GSAP, React, and Tailwind
          CSS.
        </p>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">Testimonials</h2>

        <div
          ref={testRef}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <div className="p-6 bg-gray-900 rounded-2xl">"Amazing!"</div>
          <div className="p-6 bg-gray-900 rounded-2xl">"Super smooth UI"</div>
          <div className="p-6 bg-gray-900 rounded-2xl">"Very professional"</div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section
        ref={ctaRef}
        className="py-20 text-center bg-gray-900 mx-6 rounded-2xl"
      >
        <h2 className="text-4xl font-bold mb-4">Ready to start?</h2>

        <button className="px-6 py-3 bg-white text-black rounded-full">
          Join Now
        </button>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-gray-500">
        © 2026 GSAP Landing Page
      </footer>
    </div>
  );
}
