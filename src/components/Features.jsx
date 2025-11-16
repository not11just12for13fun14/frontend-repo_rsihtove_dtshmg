import { Shield, Sparkles, Bluetooth, Cpu } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'Spatial Audio', desc: 'Immersive 360° sound that adapts to your movement.' },
  { icon: Shield, title: 'Active Noise Cancel', desc: 'Block out distractions with adaptive noise control.' },
  { icon: Bluetooth, title: 'Seamless Pairing', desc: 'One-tap connect across phone, tablet, and laptop.' },
  { icon: Cpu, title: 'Adaptive EQ', desc: 'Custom-tuned for your ears with every song.' },
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-white py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 sm:grid-cols-2 md:grid-cols-4">
        {features.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-xl transition">
            <div className="mb-4 inline-flex rounded-xl bg-slate-100 p-3 text-slate-700 group-hover:bg-black group-hover:text-white transition">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mb-1 text-base font-semibold">{title}</h3>
            <p className="text-sm text-slate-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
