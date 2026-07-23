import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-8 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="font-semibold text-slate-200">SkyMart</p>
          <p>Crafted for fast, enjoyable shopping.</p>
        </div>
        <p>© 2026 SkyMart • Built with React • Jayant Kushwah</p>
      </div>
    </footer>
  );
};

export default Footer;
