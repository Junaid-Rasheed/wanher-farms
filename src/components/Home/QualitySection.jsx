import React from "react";
import { Sprout } from "lucide-react";

export default function QualitySection() {
  return (
    <section className="relative py-24 px-6 md:px-12 lg:px-24 ">
      <div className="absolute inset-0 bg-[url('/Home/c.png')] bg-cover bg-center"></div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 text-green-100 mb-6">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">Commitment to Quality</span>
        </div>

        <h2 className="text-4xl md:text-6xl  font-bold text-white mb-8 leading-tight">
          Excellence is not an act, <br />it's a process.
        </h2>

        <p className="text-green-100 text-lg leading-relaxed mb-12 max-w-3xl mx-auto">
          Every grain, every egg, every product that leaves our facility
          carries the mark of care, consistency, and commitment. Our
          certifications and audits uphold our credibility as a trusted B2B
          supplier in the food production industry.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <img src="/Home/c2.png"/>
        </div>
      </div>
    </section>
  );
}
