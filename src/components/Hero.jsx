import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-900 to-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 pt-24 pb-16 sm:px-8 md:px-12">
        <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">New • Spatial Audio</span>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl md:text-7xl">
          Sound. <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-sky-300">That Moves You.</span>
        </h1>
        <p className="max-w-xl text-sm/relaxed text-slate-300 sm:text-base md:text-lg">
          Experience next‑gen audio with premium materials, adaptive noise control, and immersive 3D interaction.
        </p>
        <div className="mt-2 flex gap-3">
          <a href="#catalog" className="rounded-full bg-white text-black px-5 py-2.5 text-sm font-medium hover:bg-slate-200 transition">Shop now</a>
          <a href="#features" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition">Learn more</a>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60" />
    </section>
  );
}
