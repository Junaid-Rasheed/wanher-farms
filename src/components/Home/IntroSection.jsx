import React from "react";
import { ArrowRight, Sprout } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-10 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6 md:mb-20">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">Step into a new paradigm</span>
        </div>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-8 md:mb-16 max-w-5xl mx-auto leading-tight">
          Wanher Farms Pvt. Ltd. is a vertically integrated procurement,
          production, and distribution company dedicated to supplying premium
          agricultural commodities to local and international markets.
        </h2>

        {/* Cards - stacked on small screens, row on md+ */}
        <div className="relative flex flex-col md:flex-row justify-center items-stretch md:items-end gap-6 mb-12 px-2 md:px-6">
          {/* Card 1 */}
          <div className="relative w-full md:w-80 max-w-xl bg-black text-white p-6 md:p-8 rounded-lg transform md:rotate-14 md:hover:rotate-0 transition-transform duration-300 shadow-2xl md:-translate-y-6 z-10">
            <div className="absolute -top-6 left-6 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden ring-2 ring-white/20">
              <img
                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Plant in hands"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-10 md:mt-8 text-xl md:text-2xl font-bold mb-3">Who We Are</h3>
            <p className="text-gray-300 leading-relaxed text-sm">
              Welcome to Wanher Farms. Wanher Farms is a hybrid supply chain
              agribusiness dedicated to procuring, producing, packaging, and
              supplying high-quality food commodities, including eggs and wheat
              for flour.
            </p>
          </div>

          {/* Card 2 */}
          <div className="relative my-4 md:my-0 w-full md:w-80 max-w-xl bg-gray-50 p-6 md:p-8 rounded-lg transform md:rotate-1 md:hover:rotate-0 transition-transform duration-300 shadow-2xl md:translate-y-3 z-30">
            <div className="absolute -top-6 left-6 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden ring-2 ring-black/10">
              <img
                src="https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Wheat field"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-10 md:mt-8 text-xl md:text-2xl font-bold mb-3">Why Choose Us:</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>High-quality, safe, and nutritious products</li>
              <li>Meticulous grading, analysis, and packaging</li>
              <li>Direct delivery to homes and retail shelves</li>
              <li>Commitment to sustainable farming and organic diets</li>
            </ul>
          </div>

          {/* Card 3 */}
          <div className="relative w-full md:w-80 max-w-xl bg-green-700 text-white p-6 md:p-8 rounded-lg transform md:-rotate-14 md:hover:rotate-0 transition-transform duration-300 md:-translate-y-6 shadow-2xl z-20">
            <div className="absolute -top-6 left-6 w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden ring-2 ring-white/20">
              <img
                src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=300"
                alt="Farm irrigation"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-10 md:mt-8 text-xl md:text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-green-50 leading-relaxed text-sm">
              To be Pakistan's most trusted source of responsibly sourced, and
              consistently high-quality food commodities empowering healthier
              communities and a stronger agricultural economy.
            </p>
          </div>
        </div>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
          Our operations reflect decades of agricultural expertise,
          uncompromising quality standards, and a deep respect for Pakistan's
          fertile land.
        </p>

        <div className="flex justify-center px-6">
          <button className="w-full sm:w-auto border-2 border-green-700 text-green-700 px-6 py-3 rounded-full font-medium hover:bg-green-50 transition-all flex items-center gap-2 justify-center">
            <span>Explore Our Business</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
