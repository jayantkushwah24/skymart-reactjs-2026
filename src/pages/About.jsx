import React from "react";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { icon: "📦", value: "20K+", label: "Products" },
    { icon: "👤", value: "50K+", label: "Happy Customers" },
    { icon: "☆", value: "4.9", label: "Avg. Rating" },
    { icon: "🚚", value: "99%", label: "On-time Delivery" },
  ];

  const pillars = [
    { icon: "🤝", title: "Trust", text: "Every product is verified for quality and authenticity before listing." },
    { icon: "🚚", title: "Speed", text: "We obsess over delivery times so your orders arrive when promised." },
    { icon: "👥", title: "Community", text: "Built around real customer feedback, not just business metrics." },
    { icon: "✨", title: "Quality", text: "We curate the best — no filler, no junk, just great products." },
  ];

  const team = [
    { initials: "D", name: "Devendra Kushwah", role: "Founder & CEO" },
    { initials: "H", name: "Hemlata Kushwah", role: "Head of Product" },
    { initials: "J", name: "Jayant Kushwah", role: "Lead Engineer" },
    { initials: "M", name: "Mahishita Kushwah", role: "Design Director" },
  ];

  return (
    <div className="space-y-8">
      <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/30 sm:p-10">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">
          ⚡
        </div>
        <h1 className="mt-6 text-3xl font-semibold text-white sm:text-4xl">About SkyMart</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
          SkyMart is a next-generation e-commerce experience built to make online shopping fast, fair, and enjoyable for everyone.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="text-2xl text-cyan-300">{item.icon}</div>
              <h2 className="mt-3 text-2xl font-semibold text-white">{item.value}</h2>
              <p className="mt-1 text-sm text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/30">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Our story</p>
          <h2 className="mt-3 text-2xl font-semibold text-white">Built for better shopping</h2>
          <div className="mt-5 space-y-4 text-slate-300">
            <p>SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences.</p>
            <p>Three years later, SkyMart serves over 50,000 customers across the country with electronics, fashion, jewelry, and everyday essentials.</p>
            <p>We are still the same team at heart: obsessed with speed, clarity, and making each purchase feel rewarding.</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/30">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">What we stand for</p>
          <div className="mt-5 space-y-4">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-500/10 text-xl text-cyan-300">{pillar.icon}</div>
                  <h3 className="text-lg font-semibold text-white">{pillar.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-slate-950/30">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Meet the team</p>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 text-xl font-semibold text-slate-950">
                {member.initials}
              </div>
              <h3 className="mt-4 font-semibold text-white">{member.name}</h3>
              <p className="mt-1 text-sm text-slate-400">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[2rem] border border-cyan-400/20 bg-cyan-500/10 p-8 text-center shadow-xl shadow-cyan-950/20">
        <h2 className="text-2xl font-semibold text-white">Ready to shop?</h2>
        <p className="mt-2 text-slate-300">Explore thousands of products at unbeatable prices.</p>
        <button onClick={() => navigate("/products")} className="mt-6 rounded-full bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
          Browse Products →
        </button>
      </section>
    </div>
  );
};

export default About;
