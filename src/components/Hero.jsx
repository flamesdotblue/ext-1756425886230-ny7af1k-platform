import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[78vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#030611]/70 via-[#06122a]/40 to-[#081736]/90" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="backdrop-blur-sm bg-black/20 border border-white/10 rounded-2xl p-6 sm:p-10 max-w-3xl">
            <div className="flex items-center gap-3 text-sky-300">
              <Rocket className="h-5 w-5" />
              <span className="uppercase tracking-widest text-xs">Join the mission</span>
            </div>
            <h1 className="mt-3 text-4xl sm:text-6xl font-semibold tracking-tight">bloq Careers</h1>
            <p className="mt-4 text-sky-100/80 text-lg">
              Quantum-native systems. Planet-scale impact. Explore roles and take an assignment to show us how you think.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="#open-roles"
                className="inline-flex items-center justify-center rounded-xl bg-sky-500/90 hover:bg-sky-400 text-white px-5 py-3 font-medium shadow-lg shadow-sky-500/30 transition"
              >
                View Open Roles
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 hover:bg-white/20 text-white px-5 py-3 font-medium transition"
              >
                Why bloq
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
