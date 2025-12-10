import React from "react";
import { Sprout } from "lucide-react";

export default function TestimonialsGrid() {
  const cards = [
    {
      title: "Effective Innovation",
      desc: "Years of proven international experience in delivering scalable agricultural solutions across diverse climates and regions.",
      image: "/Home/j2.png",
      bg: "bg-[#f4f2ef] text-gray-900",
    },
    {
      title: "Sustainable Practices",
      desc: "From pesticide-free farming to smart water use, we're committed to methods that respect the planet and generations.",
      image: "/Home/j3.png",
      bg: "bg-black text-white",
    },
    {
      title: "Trusted by Thousands",
      desc: "Farmers, distributors, and trusted partners worldwide rely on us for quality, reliability, and long-term success.",
      image: "/Home/j4.png",
      bg: "bg-[#196516] text-white",
    },
    {
      title: "Global Expertise",
      desc: "Years of international experience delivering scalable agricultural solutions across diverse climates and regions.",
      image: "/Home/j5.png",
      bg: "bg-[#F5F4F2] text-gray-900",
    },
  ];

  return (
    <section className="py-16 px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}

        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-gray-700 mb-6">
          <img src="/iconb.png" />
            <span className="text-sm font-medium">Testimonials</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
                Trusted by farmers & businesses worldwide.
              </h2>
            </div>

            <p className="text-gray-900 leading-relaxed ">
              At Wanher Farms, we handle core agricultural commodities that form
              the backbone of Pakistan's food economy. Each product reflects our
              rigorous standards of procurement, production, and quality
              assurance.
            </p>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* LEFT HERO IMAGE */}
          <div className="lg:col-span-1 lg:row-span-2 rounded-2xl overflow-hidden shadow-md h-[650px]">
            <img
              src="/About/Field2.png"
              alt="Hero"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT 2x2 GRID */}

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 h-[650px]">
            {cards.map((c, idx) => (
              <div
                key={idx}
                className={`${c.bg} rounded-xl p-6 shadow-sm h-[310px] flex flex-col`}
              >
                {/* thumbnail above title */}
                <div className="w-30 h-30 rounded-md overflow-hidden mb-4">
                  <img
                    src={c.image}
                    alt={`${c.title} thumbnail`}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* title */}
                <h3
                  className={`text-2xl font-semibold ${
                    c.bg.includes("black") || c.bg.includes("#196516")
                      ? "text-white"
                      : "text-gray-900"
                  }`}
                >
                  {c.title}
                </h3>

                {/* description under title */}
                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    c.bg.includes("black") || c.bg.includes("#196516")
                      ? "text-white/90"
                      : "text-gray-600"
                  }`}
                >
                  {c.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
