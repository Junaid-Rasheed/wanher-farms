import React from "react";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    title: "Sourcing",
    text: "We source crops directly from trusted local farmers, ensuring traceability and fair trade practices.",
    variant: "light",
  },
  {
    title: "Hygienic Processing",
    text: "State-of-the-art facilities ensure clean, safe, and standardized processing at every stage.",
    variant: "green",
  },
  {
    title: "Quality Testing",
    text: "Each batch undergoes rigorous quality and safety testing before approval.",
    variant: "light",
  },
  {
    title: "Packaging",
    text: "Products are packaged using food-grade materials to preserve freshness and quality.",
    variant: "dark",
  },
  {
    title: "Distribution",
    text: "A reliable logistics network ensures timely delivery across Pakistan and export regions.",
    variant: "light",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#f6f5f2]">
      <div className="max-w-7xl mx-auto text-center">

        {/* TOP LABEL */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <img src="/iconb.png" className="w-5 h-5" />
          <span className="text-sm font-medium text-gray-700">
            What We Do
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Our Process / Supply Chain
        </h2>

        {/* DESCRIPTION */}
        <p className="max-w-3xl mx-auto text-gray-700 leading-relaxed mb-16">
          At Wanher Farms, we handle core agricultural commodities that form the
          backbone of Pakistan’s food economy. Each product reflects our rigorous
          standards of procurement, production, and quality assurance.
        </p>

        {/* PROCESS CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {steps.map((step, i) => {
            const base =
              "rounded-2xl p-8 min-h-[240px] flex flex-col text-left";
            const variants = {
              light: "bg-white text-gray-800",
              green: "bg-green-800 text-white",
              dark: "bg-black text-white",
            };

            return (
              <div key={i} className={`${base} ${variants[step.variant]}`}>
                <span className="inline-block text-sm px-4 py-1 rounded-full border border-current mb-6 w-fit">
                  {step.title}
                </span>
                <p className="text-sm leading-relaxed opacity-90">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <a href="/contact">
          <button className="border-2 border-green-700 text-green-700 px-10 py-4 rounded-full font-medium hover:bg-green-50 transition-all inline-flex items-center gap-2">
            Lets work together <ArrowRight className="w-4 h-4" />
          </button>
        </a>

      </div>
    </section>
  );
}
