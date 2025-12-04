import React from "react";
import { ArrowRight, Sprout } from "lucide-react";

export default function ProcessSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-16 items-start">
          
          {/* LEFT SIDE — 1/3 WIDTH */}
          <div className="lg:col-span-1 lg:self-start">
            <div className="flex items-center gap-2 text-gray-700 mb-6">
              <Sprout className="w-5 h-5" />
              <span className="text-sm font-medium">What We Do</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Our Process / Supply Chain
            </h2>

            <p className="text-gray-700 leading-relaxed mb-8 ">
              At Wanher Farms, we handle core agricultural commodities that
              form the backbone of Pakistan's food economy. Each product
              reflects our rigorous standards of procurement, production, and
              quality assurance.
            </p>

            <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-all flex items-center gap-2">
              Lets work together <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* RIGHT SIDE — 2/3 WIDTH */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Item 1 */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/Home/s1.png"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 "></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Procurement</h3>
                <p className="text-sm">
                  Our journey begins in the field, with trusted local farmers
                  and growers. We source crops through direct partnerships,
                  ensuring fair trade and traceability at every stage.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/Home/s2.png"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 "></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Production</h3>
                <p className="text-sm  ">
                  Equipped with state-of-the-art milling, cleaning, and
                  grading facilities, Wanher Farms ensures every commodity
                  meets rigorous hygiene, consistency, and safety standards.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/Home/s3.png"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 "></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Quality Assurance</h3>
                <p className="text-sm ">
                  Every batch undergoes multi-stage testing, from moisture and
                  purity checks to nutritional profiling ensuring excellence.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/Home/s4.png"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 "></div>

              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Distribution</h3>
                <p className="text-sm ">
                  With a robust logistics network, we ensure timely delivery
                  across Pakistan and selected export regions.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
