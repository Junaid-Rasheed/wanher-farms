import { ArrowRight, ChevronDown, Sprout } from "lucide-react";
import { Testimonials } from "../components/Testimonials";
import { Insights } from "../components/Insights";

function Home() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen bg-gradient-to-br from-green-900 via-green-800 to-amber-900 flex items-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-[url('/Home/Hero.png')] bg-cover bg-center "></div>

        <div className="relative z-10 px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2 text-white/90 mb-6">
            <Sprout className="w-5 h-5" />
            <span className="text-xl">Welcome to Wanher Farms</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl tracking-wide">
            Delivering <br /> Quality that <br />
            Speaks for Itself.
          </h1>

          <p className="text-white/90 text-sm max-w-md mb-10 leading-relaxed">
            Wanher Farms is a semi-integrated supply chain agribusiness
            dedicated to procuring, producing, packaging, and supplying
            high-quality food commodities, including eggs and wheat for flour.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/product"
              className="bg-[#1f6306] text-white px-8 rounded-full font-medium hover:bg-green-800 transition-all flex items-center gap-2 text-sm inline-flex"
            >
              Explore Our Business <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="/blogs"
              className="border-2 border-yellow-400 text-yellow-200 px-8 py-3.5 rounded-full font-medium hover:bg-yellow-400/10 transition-all flex items-center gap-2 text-sm inline-flex"
            >
              See all services <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-10 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2  mb-20">
            <Sprout className="w-5 h-5" />
            <span className="text-sm font-medium">
              Step into a new paradigm
            </span>
          </div>

          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center mb-16 max-w-5xl mx-auto leading-tight">
            Wanher Farms Pvt. Ltd. is a vertically integrated procurement,
            production, and distribution company dedicated to supplying premium
            agricultural commodities to local and international markets.
          </h2>
          {/* Overlapping, tilted cards like your image 1 */}
          <div className="relative flex justify-center items-end gap-2 mb-12 px-6">
            {/* Card 1 - left (behind) */}
            <div className="relative w-80 max-w-xs bg-black text-white p-8 rounded-lg transform rotate-14 hover:rotate-0 transition-transform duration-400 shadow-2xl -translate-y-6 z-10">
              <div className="absolute -top-6 left-6 w-20 h-20 rounded-lg overflow-hidden ring-2 ring-white/20">
                <img
                  src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Plant in hands"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-8 text-2xl font-bold mb-4">Who We Are</h3>
              <p className="text-gray-300 leading-relaxed text-sm">
                Welcome to Wanher Farms. Wanher Farms is a hybrid supply chain
                agribusiness dedicated to procuring, producing, packaging, and
                supplying high-quality food commodities, including eggs and
                wheat for flour.
              </p>
            </div>

            {/* Card 2 - center (front) */}
            <div className="relative w-80 max-w-xs bg-gray-50 p-8 rounded-lg transform rotate-1 hover:rotate-0 transition-transform duration-400 shadow-2xl translate-y-3 z-30">
              <div className="absolute -top-6 left-6 w-20 h-20 rounded-lg overflow-hidden ring-2 ring-black/10">
                <img
                  src="https://images.pexels.com/photos/326082/pexels-photo-326082.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Wheat field"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-8 text-2xl font-bold mb-4">Why Choose Us:</h3>
              <ul className="space-y-2 text-gray-700 text-sm">
                <li>High-quality, safe, and nutritious products</li>
                <li>Meticulous grading, analysis, and packaging</li>
                <li>Direct delivery to homes and retail shelves</li>
                <li>Commitment to sustainable farming and organic diets</li>
              </ul>
            </div>

            {/* Card 3 - right (behind) */}
            <div className="relative w-80 max-w-xs bg-green-700 text-white p-8 rounded-lg transform -rotate-14 hover:rotate-0 transition-transform duration-400 -translate-y-6 shadow-2xl z-20">
              <div className="absolute -top-6 left-6 w-20 h-20 rounded-lg overflow-hidden ring-2 ring-white/20">
                <img
                  src="https://images.pexels.com/photos/1459505/pexels-photo-1459505.jpeg?auto=compress&cs=tinysrgb&w=300"
                  alt="Farm irrigation"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="mt-8 text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-green-50 leading-relaxed text-sm">
                To be the Pakistan's most trusted source of responsibly sourced,
                and consistently high-quality food commodities empowering
                healthier communities and a stronger agricultural economy.
              </p>
            </div>
          </div>

          <p className="text-center text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
            Our operations reflect decades of agricultural expertise,
            uncompromising quality standards, and a deep respect for Pakistan's
            fertile land.
          </p>

          <div className="flex justify-center">
            <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-all flex items-center gap-2">
              Explore Our Business <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#1f6306]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 text-green-100 mb-6">
            <Sprout className="w-5 h-5" />

            <span className="text-sm font-medium">What We Do</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-6">
            Products & Business Segments
          </h2>

          <p className="text-center text-green-100 max-w-4xl mx-auto mb-16 leading-relaxed">
            At Wanher Farms, we handle core agricultural commodities that form
            the backbone of Pakistan's food economy.
            <br /> Each product reflects our rigorous standards of procurement,
            production, and quality assurance.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {/* Card 1 */}
            <div className="rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 relative">
              <div className="h-[28rem] overflow-hidden">
                {" "}
                {/* <-- increased height here */}
                <img
                  src="/Home/h1.png"
                  alt="Flour"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-4 bottom-6 pr-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Chakki Atta (Wheat Flour)
                </h3>
                <p className="text-gray-200  text-sm max-w-xs">
                  Our wheat flour is milled under controlled conditions to
                  maintain natural nutrition, texture, and taste.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 relative">
              <div className="h-[28rem] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Eggs"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-6 bottom-6 pr-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Grade A Eggs
                </h3>
                <p className="text-gray-200 text-sm max-w-xs">
                  We maintain high biosecurity standards and animal welfare
                  practices to ensure safe, fresh, and protein rich products.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 relative">
              <div className="h-[28rem] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1313643/pexels-photo-1313643.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Pulses"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-6 bottom-6 pr-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Pulses & Staples
                </h3>
                <p className="text-gray-200 text-sm max-w-xs">
                  Our network of growers provides consistent, premium-quality
                  pulses that meet both domestic/institutional needs.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 relative">
              <div className="h-[28rem] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/265216/pexels-photo-265216.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Wheat"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute left-6 bottom-6 pr-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  Wheat Grains
                </h3>
                <p className="text-gray-200 text-sm max-w-xs">
                  Our wheat flour is milled under controlled conditions to
                  maintain natural nutrition, texture, and taste.
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <button className="border-2 border-yellow-400 text-yellow-200 px-8 py-3 rounded-full font-medium hover:bg-yellow-400/10 transition-all flex items-center gap-2">
              See all products <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT SIDE */}
            <div className="sticky top-24">
              <div className="flex items-center gap-2 text-gray-700 mb-6">
                <Sprout className="w-5 h-5" />
                <span className="text-sm font-medium">What We Do</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
                Our Process / <br  />Supply Chain
              </h2>

              <p className="text-gray-700 leading-relaxed mb-8">
                At Wanher Farms, we handle core agricultural commodities that
                form the backbone of Pakistan's food economy. Each product
                reflects our rigorous standards of procurement, production, and
                quality assurance.
              </p>

              <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-all flex items-center gap-2">
                Lets work together <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* RIGHT SIDE – UPDATED CARDS LIKE IMAGE */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* PROCUREMENT */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2132171/pexels-photo-2132171.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Procurement</h3>
                  <p className="text-sm leading-relaxed">
                    Our journey begins in the field, with trusted local farmers
                    and growers. We source crops through direct partnerships,
                    ensuring fair trade and traceability at every stage.
                  </p>
                </div>
              </div>

              {/* PRODUCTION */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/2933243/pexels-photo-2933243.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Production</h3>
                  <p className="text-sm leading-relaxed">
                    Equipped with state-of-the-art milling, cleaning, and
                    grading facilities, Wanher Farms ensures every commodity
                    meets rigorous hygiene, consistency, and safety standards.
                  </p>
                </div>
              </div>

              {/* QUALITY ASSURANCE */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/5029862/pexels-photo-5029862.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Quality Assurance</h3>
                  <p className="text-sm leading-relaxed">
                    Every batch undergoes multi-stage testing, from moisture and
                    purity checks to nutritional profiling ensuring excellence.
                  </p>
                </div>
              </div>

              {/* DISTRIBUTION */}
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/8828487/pexels-photo-8828487.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black/50"></div>

                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Distribution</h3>
                  <p className="text-sm leading-relaxed">
                    With a robust logistics network, we ensure timely delivery
                    across Pakistan and selected export regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-green-900 via-green-800 to-green-900">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-30"></div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 text-green-100 mb-6">
            <Sprout className="w-5 h-5" />
            <span className="text-sm font-medium">Commitment to Quality</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Excellence is not an act, it's a process.
          </h2>

          <p className="text-green-100 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
            Every grain, every egg, every product that leaves our facility
            carries the mark of care, consistency, and commitment. Our
            certifications and audits uphold our credibility as a trusted B2B
            supplier in the food production industry.
          </p>

          <div className="flex flex-wrap justify-center gap-8">
            <div className="bg-white rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Sprout className="w-8 h-8 text-green-700" />
              </div>
              <span className="text-xs font-semibold text-gray-800">
                Halal Certified
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Sprout className="w-8 h-8 text-green-700" />
              </div>
              <span className="text-xs font-semibold text-gray-800">
                PSQCA Certified
              </span>
            </div>

            <div className="bg-white rounded-2xl p-6 w-32 h-32 flex flex-col items-center justify-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                <Sprout className="w-8 h-8 text-green-700" />
              </div>
              <span className="text-xs font-semibold text-gray-800">
                PFA Certified
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
