import React from "react";

const Feature = () => {
  const features = [
    { icon: "⚡", title: "Fast Delivery", text: "Same-day on select items" },
    { icon: "🛡️", title: "Secure Payments", text: "100% encrypted checkout" },
    { icon: "🏷️", title: "Best Prices", text: "Price-match guarantee" },
  ];

  return (
    <section className="grid gap-4 rounded-4xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 md:grid-cols-3 sm:p-8">
      {features.map((feature) => (
        <div key={feature.title} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-300">
            {feature.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">{feature.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{feature.text}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Feature;
