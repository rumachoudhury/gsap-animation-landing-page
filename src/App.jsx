import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Activity, ShieldCheck, Star, Zap } from "lucide-react";
import { useLayoutEffect, useRef } from "react";
import Hero from "./component/Hero";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const navRef = useRef(null);

  const logoRef = useRef(null); //create a ref for the logo container in the trust section

  const teamRef = useRef(null);
  const contactRef = useRef(null);

  // const heroRef = useRef(null);
  // const titleRef = useRef(null);
  // const descRef = useRef(null);
  // const btnRef = useRef(null);

  const workflowRef = useRef(null); //create a ref for the workflow section

  const featureRef = useRef(null);
  const statsRef = useRef(null);
  const testimonialRef = useRef(null);
  const ctaRef = useRef(null);

  // ================= TESTIMONIAL DATA =================
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Product Manager",
      review:
        "FlowSpace completely transformed how our team manages projects and deadlines.",
      avatar: "S",
      gradient: "from-cyan-400 to-blue-500",
    },

    {
      id: 2,
      name: "David Lee",
      role: "Startup Founder",
      review:
        "The UI feels incredibly smooth and professional. Our users loved the experience.",
      avatar: "D",
      gradient: "from-pink-400 to-purple-500",
    },

    {
      id: 3,
      name: "Emma Brown",
      role: "Marketing Lead",
      review:
        "We improved collaboration and productivity within the first week of using FlowSpace.",
      avatar: "E",
      gradient: "from-green-400 to-emerald-500",
    },
  ];

  useLayoutEffect(() => {
    let lastScrollY = window.scrollY;

    // ================= NAVBAR HIDE/SHOW =================
    const handleScroll = () => {
      const currentY = window.scrollY;

      if (currentY > lastScrollY) {
        gsap.to(navRef.current, {
          y: -100,
          duration: 0.4,
          ease: "power3.out",
        });
      } else {
        gsap.to(navRef.current, {
          y: 0,
          duration: 0.4,
          ease: "power3.out",
        });
      }

      lastScrollY = currentY;
    };

    window.addEventListener("scroll", handleScroll);

    const ctx = gsap.context(() => {
      // ================= HERO =================
      // const tl = gsap.timeline();

      // tl.from(titleRef.current, {
      //   y: 80,
      //   opacity: 0,
      //   duration: 1,
      //   ease: "power4.out",
      // })
      //   .from(
      //     descRef.current,
      //     {
      //       y: 40,
      //       opacity: 0,
      //       duration: 0.8,
      //     },
      //     "-=0.5",
      //   )
      //   .fromTo(
      //     btnRef.current,
      //     {
      //       scale: 0.8,
      //       opacity: 0,
      //     },
      //     {
      //       scale: 1,
      //       opacity: 1,
      //       duration: 0.8,
      //       ease: "power3.out",
      //     },
      //     "-=0.3",
      //   );

      // ================  Trust =======================

      if (logoRef.current) {
        gsap.to(logoRef.current, {
          x: "-50%",
          duration: 10,
          repeat: -1,
          ease: "linear",
        });
      }

      //  ============= Simple 3-step workflow ==========

      if (workflowRef.current) {
        gsap.from(workflowRef.current.children, {
          y: 80,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: workflowRef.current,
            start: "top 80%",
          },
        });
      }

      // ================= FEATURES =================
      gsap.fromTo(
        featureRef.current.children,
        {
          y: 80,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featureRef.current,
            start: "top 85%",
          },
        },
      );

      // ================= STATS =================
      gsap.from(statsRef.current.children, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 85%",
        },
      });

      // ================= TESTIMONIALS ===============
      gsap.fromTo(
        testimonialRef.current.children,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: "top 85%",
          },
        },
      );

      // ================= TEAM =================
      // if (teamRef.current) {
      //   gsap.from(teamRef.current.children, {
      //     y: 80,
      //     opacity: 0,
      //     stagger: 0.2,
      //     duration: 1,
      //     ease: "power3.out",
      //     scrollTrigger: {
      //       trigger: teamRef.current,
      //       start: "top 80%",
      //     },
      //   });
      // }

      if (teamRef.current) {
        gsap.from(teamRef.current.querySelectorAll("div"), {
          y: 80,
          opacity: 0,
          stagger: 0.2,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: teamRef.current,
            start: "top 80%",
          },
        });
      }

      // ================= CONTACT =================

      if (contactRef.current) {
        gsap.fromTo(
          contactRef.current.children,
          {
            y: 50,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: contactRef.current,
              start: "top 85%",
            },
          },
        );
      }

      // ================= CTA =================
      gsap.from(ctaRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 85%",
        },
      });
    });

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-[#050816] text-white overflow-hidden">
      {/* ================= NAVBAR ================= */}
      <nav
        ref={navRef}
        className="fixed top-0 left-0 w-full z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-wide">FlowSpace</h1>

          <div className="hidden md:flex items-center gap-8 text-gray-300">
            <a href="#home" className="hover:text-white transition">
              Home
            </a>

            <a href="#features" className="hover:text-white transition">
              Features
            </a>

            <a href="#stats" className="hover:text-white transition">
              Stats
            </a>

            <a href="#testimonials" className="hover:text-white transition">
              Reviews
            </a>

            <button className="px-5 py-2 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
              Start Free
            </button>
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
      {/* <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block px-4 py-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 text-sm mb-8">
            Trusted by 10,000+ teams worldwide
          </div>

          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Manage Projects Faster
            <span className="block text-cyan-400">with FlowSpace</span>
          </h1>

          <p
            ref={descRef}
            className="mt-8 text-lg text-gray-400 max-w-2xl mx-auto leading-8"
          >
            Streamline collaboration, organize tasks, and improve productivity
            with one modern workspace designed for fast-growing teams.
          </p>

          <div
            ref={btnRef}
            className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
          >
            <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
              Start Free Trial
            </button>

            <button className="px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition">
              Watch Demo
            </button>
          </div>
        </div>
      </section> */}

      <Hero />

      {/*=================== Trust ===================*/}
      {/* without animation */}
      {/* <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px]">
          <div className="rounded-[40px] bg-[#0B1120] text-center px-8 py-16">
            <p className="text-gray-400 mb-10">
              Trusted by teams from leading companies
            </p>

            <div className="flex flex-wrap justify-center gap-10 text-gray-300 text-lg">
              <span>Google</span>
              <span>Microsoft</span>
              <span>Amazon</span>
              <span>Stripe</span>
              <span>Notion</span>
            </div>
          </div>
        </div>
      </section> */}

      {/* with animation */}
      <section className="py-20 px-6 overflow-hidden border-y border-white/10">
        <p className="text-center text-gray-500 mb-10">
          Trusted by teams from leading companies
        </p>

        {/* SCROLL WRAPPER */}
        <div className="relative">
          <div ref={logoRef} className="flex gap-16 whitespace-nowrap">
            <span className="text-gray-300 text-xl">Google</span>
            <span className="text-gray-300 text-xl">Microsoft</span>
            <span className="text-gray-300 text-xl">Amazon</span>
            <span className="text-gray-300 text-xl">Stripe</span>
            <span className="text-gray-300 text-xl">Notion</span>

            {/* duplicate for smooth loop */}
            <span className="text-gray-300 text-xl">Google</span>
            <span className="text-gray-300 text-xl">Microsoft</span>
            <span className="text-gray-300 text-xl">Amazon</span>
            <span className="text-gray-300 text-xl">Stripe</span>
            <span className="text-gray-300 text-xl">Notion</span>
          </div>
        </div>
      </section>

      {/*============= Simple 3-step workflow ===========*/}

      <section className="py-24 px-6">
        <div className="text-center mb-16">
          <p className="text-cyan-400 font-medium mb-3">HOW IT WORKS</p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Simple 3-step workflow
          </h2>
        </div>

        <div
          ref={workflowRef}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-4">01</div>
            <h3 className="text-xl font-semibold mb-3">Create Project</h3>
            <p className="text-gray-400">
              Start by creating a workspace and adding your team.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-4">02</div>
            <h3 className="text-xl font-semibold mb-3">Assign Tasks</h3>
            <p className="text-gray-400">
              Organize tasks, set deadlines, and track progress.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="text-3xl font-bold text-cyan-400 mb-4">03</div>
            <h3 className="text-xl font-semibold mb-3">Collaborate</h3>
            <p className="text-gray-400">
              Work together in real time and complete projects faster.
            </p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section id="features" className="py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium mb-3">FEATURES</p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Everything your team needs
            </h2>
          </div>

          <div ref={featureRef} className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition">
              <Zap className="w-12 h-12 text-cyan-400 mb-6 transition-transform duration-300 hover:scale-110" />

              <h3 className="text-2xl font-semibold mb-4">
                Real-time Collaboration
              </h3>

              <p className="text-gray-400 leading-7">
                Work together instantly with shared tasks, live updates, and
                seamless communication.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition">
              <Activity className="w-12 h-12 text-cyan-400 mb-6 transition-transform duration-300 hover:scale-110" />

              <h3 className="text-2xl font-semibold mb-4">
                Real-time Decision Making
              </h3>

              <p className="text-gray-400 leading-7">
                Make faster, data-driven decisions with live insights into team
                performance and project progress.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition">
              {/* <ShieldCheck className="w-12 h-12 text-cyan-400 mb-6" /> */}
              <ShieldCheck className="w-12 h-12 text-cyan-400 mb-6 transition-transform duration-300 hover:scale-110" />

              <h3 className="text-2xl font-semibold mb-4">Secure Workspace</h3>

              <p className="text-gray-400 leading-7">
                Enterprise-grade security keeps your data safe, protected, and
                accessible anytime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS ================= */}
      <section id="stats" className="py-24 px-6">
        <div
          ref={statsRef}
          className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center"
        >
          <div className="p-8 rounded-3xl bg-cyan-400 text-black">
            <h3 className="text-5xl font-bold">10K+</h3>
            <p className="mt-3 font-medium">Active Teams</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-5xl font-bold">99.9%</h3>
            <p className="mt-3 text-gray-400">System Uptime</p>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
            <h3 className="text-5xl font-bold">4.9/5</h3>
            <p className="mt-3 text-gray-400">Customer Rating</p>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium mb-3">TESTIMONIALS</p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Loved by modern teams
            </h2>
          </div>

          <div ref={testimonialRef} className="grid md:grid-cols-3 gap-8">
            {testimonials.map((user) => (
              <div
                key={user.id}
                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-cyan-400/30 transition"
              >
                {/* USER */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${user.gradient} flex items-center justify-center text-xl font-bold text-black`}
                  >
                    {user.avatar}
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">{user.name}</h4>

                    <p className="text-gray-500 text-sm">{user.role}</p>
                  </div>
                </div>

                {/* STARS */}
                <div className="flex gap-1 mb-5">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                {/* REVIEW */}
                <p className="text-gray-300 leading-7">"{user.review}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}

      <section id="faq" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div text-center mb-16>
            <p className="text-cyan-400 font-medium mb-3">FAQ</p>
            <h2 className="text-4xlmd-text-5xl font-bold">
              Frequently Asked Question
            </h2>
          </div>

          <div className="space-y-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
              <h3 className="text-xl font-semibold mb-3">
                What is FlowSpace used for?
              </h3>
              <p className="text-gray-400 leading-7">
                {" "}
                FlowSpace is a project management tool that helps teams organize
                tasks, collaborate in real time, and improve productivity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-24 px-6">
        <div ref={teamRef} className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium mb-3">OUR TEAM</p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Meet the people behind FlowSpace
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="w-24 h-24 rounded-full bg-cyan-400 mx-auto mb-6"></div>

              <h3 className="text-2xl font-semibold">Sarah Johnson</h3>

              <p className="text-cyan-400 mt-2">UI Designer</p>

              <p className="text-gray-400 mt-4">
                Creates beautiful and modern user experiences.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="w-24 h-24 rounded-full bg-pink-400 mx-auto mb-6"></div>

              <h3 className="text-2xl font-semibold">David Lee</h3>

              <p className="text-cyan-400 mt-2">Frontend Developer</p>

              <p className="text-gray-400 mt-4">
                Builds smooth and interactive web applications.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 text-center">
              <div className="w-24 h-24 rounded-full bg-green-400 mx-auto mb-6"></div>

              <h3 className="text-2xl font-semibold">Emma Brown</h3>

              <p className="text-cyan-400 mt-2">Project Manager</p>

              <p className="text-gray-400 mt-4">
                Keeps projects organized and teams productive.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-cyan-400 font-medium mb-3">CONTACT</p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Get in touch with us
            </h2>
          </div>

          <form ref={contactRef} className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 outline-none"
            ></textarea>

            <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 px-6">
        <div
          ref={ctaRef}
          className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px]"
        >
          <div className="rounded-[40px] bg-[#0B1120] text-center px-8 py-20">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready to simplify your workflow?
            </h2>

            <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
              Join thousands of teams already using FlowSpace to manage projects
              and collaborate better.
            </p>

            <button
              // className="mt-10 px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition"

              className="mt-10 px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold hover:scale-105 transition shadow-lg shadow-cyan-500/30"
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-white/10 py-10 text-center text-gray-500">
        © 2026 FlowSpace. All rights reserved.
      </footer>
    </div>
  );
}
