import React from "react";
import { ArrowRight, Sprout } from "lucide-react";

export default function ProductsSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#1f6306]">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-2 text-green-100 mb-6">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">What We Do</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-6">
          Products & Business Segments
        </h2>

        <p className="text-center text-green-100 max-w-3xl mx-auto mb-16 leading-relaxed">
          At Wanher Farms, we handle core agricultural commodities that form
          the backbone of Pakistan's food economy.
       Each product reflects our rigorous standards of procurement,
          production, and quality assurance.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 relative">
            <div className="h-[28rem] overflow-hidden">
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
              <h3 className="text-xl font-bold text-white mb-2">Grade A Eggs</h3>
              <p className="text-gray-200 text-sm max-w-xs">
                We maintain high biosecurity standards and animal welfare
                practices to ensure safe, fresh, and protein rich products.
              </p>
            </div>
          </div>

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
              <h3 className="text-xl font-bold text-white mb-2">Pulses & Staples</h3>
              <p className="text-gray-200 text-sm max-w-xs">
                Our network of growers provides consistent, premium-quality
                pulses that meet both domestic/institutional needs.
              </p>
            </div>
          </div>

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
              <h3 className="text-xl font-bold text-white mb-2">Wheat Grains</h3>
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
  );
}
