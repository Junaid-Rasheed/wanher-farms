import { ArrowRight, Sprout } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-amber-900 flex items-center">
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-[url('/Home/Hero.png')] bg-cover bg-center "></div>

      <div className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-white/90 mb-6">
          {/* <Sprout className="w-5 h-5" /> */}
          <img src="/icon.png" />
          <span className="text-xl">Welcome to Wanher Farms</span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-6 max-w-2xl tracking-wide">
          Delivering <br className="hidden lg:block" />
          Quality that <br className="hidden lg:block" />
          Speaks for Itself.{" "}
        </h1>

        <p className="mt-6 text-white/90 text-sm md:text-base max-w-xl">
          Wanher Farms is a semi-hybrid supply chain agribusiness dedicated to
          procuring, producing, packaging, and supplying high-quality food
          commodities, including eggs and wheat for flour.
        </p>
        <div className="flex flex-wrap gap-4 py-4">
          <a
            href="/product"
            className="bg-[#1f6306] text-white px-6 py-3 rounded-full font-medium hover:bg-green-800 transition-all flex items-center gap-2 text-sm inline-flex"
          >
            Explore Our Business <ArrowRight className="w-4 h-4" />
          </a>

          {/* <a
            href="/blogs"
            className="border-2 border-yellow-400 text-yellow-200 px-8 py-3.5 rounded-full font-medium hover:bg-yellow-400/10 transition-all flex items-center gap-2 text-sm inline-flex"
          >
            See all services <ArrowRight className="w-4 h-4" />
          </a> */}
        </div>
      </div>
    </section>
  );
}
