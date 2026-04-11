import { RiCodeLine, RiRocketLine, RiHeartLine } from "react-icons/ri";

const stats = [
  { value: "1+", label: "Year Learning", icon: <RiCodeLine /> },
  { value: "10+", label: "Projects Built", icon: <RiRocketLine /> },
  { value: "∞", label: "Passion for Code", icon: <RiHeartLine /> },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-800/30 to-transparent pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Label */}
        <div data-aos="fade-down" className="flex items-center gap-4 mb-16">
          <h2 className="font-display text-4xl font-bold text-white">
            About Me
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-brand-500/30 to-transparent" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div>
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-slate-300 text-lg leading-relaxed mb-6"
            >
              Hey there! I'm{" "}
              <span className="text-brand-400 font-semibold">
                Muhammad Umer
              </span>
              , a self-taught frontend developer with a genuine obsession for
              clean UI and seamless user experiences.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-slate-400 leading-relaxed mb-6"
            >
              Over the past year, I've immersed myself in modern web development mastering HTML, CSS, JS, TS, React, Tailwind CSS, and Supabase through a
              combination of structured learning and hands-on, real-world
              projects. Every project I build pushes my skills further.
            </p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-slate-400 leading-relaxed mb-10"
            >
              I love the intersection of design and engineering where pixel
              precision meets functional logic. When I'm not coding, I'm
              studying design systems or contributing to open-source.
            </p>

            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="flex flex-wrap gap-3"
            >
              {[
                "Problem Solver",
                "Detail-Oriented",
                "Fast Learner",
                "Team Player",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 text-xs font-mono bg-dark-700 border border-dark-500/60 text-brand-400 rounded-lg"
                >
                  #{tag.toLowerCase().replace(" ", "_")}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Stats + Card */}
          <div data-aos="fade-left" data-aos-delay="200">
            {/* Avatar placeholder */}
            <div className="relative mb-8">
              <div className="w-48 h-48 mx-auto rounded-2xl bg-gradient-to-br from-brand-500/20 to-teal-500/10 border border-brand-500/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/images/profile-img.jpg"
                  alt="Muhammad Umer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -right-3 w-20 h-20 bg-brand-500/10 border border-brand-500/20 rounded-xl flex items-center justify-center">
                <span className="text-3xl">⚡</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  data-aos="zoom-in"
                  data-aos-delay={300 + i * 100}
                  className="card-glass rounded-xl p-4 text-center hover:border-brand-500/40 transition-all group"
                >
                  <div className="text-brand-400 flex justify-center mb-2 text-xl group-hover:scale-110 transition-transform">
                    {s.icon}
                  </div>
                  <div className="font-display text-2xl font-bold text-white">
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
