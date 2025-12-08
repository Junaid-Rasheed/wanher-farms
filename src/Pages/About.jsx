// src/Pages/About.jsx
import React, { useState } from "react";
import {
  Users,
  Truck,
  Clock,
  Award,
  ArrowRight,
  Leaf,
  CheckCircle,
  Sprout,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProcessSection from "../components/Home/ProcessSection";
import TestimonialsGrid from "../components/About/TestimonialsGrid";
import HistorySection from "../components/About/HistorySection";
import QualitySection from "../components/Home/QualitySection";

const stats = [
  { value: "98%", label: "On-time delivery rate", icon: Clock },
  { value: "5+", label: "Years of Expertise", icon: Award },
  { value: "460+", label: "Happy Clients", icon: Users },
];

const processCards = [
  {
    title: "Procurement",
    text: "We source crops through direct partnerships with local farmers, ensuring fair trade and traceability.",
    img: "/about/procurement.jpg",
  },
  {
    title: "Production",
    text: "State-of-the-art milling, cleaning and grading facilities ensure consistent hygiene & quality.",
    img: "/about/production.jpg",
  },
  {
    title: "Quality Assurance",
    text: "Every batch is tested for moisture and purity to meet our strict nutritional profiling.",
    img: "/about/quality.jpg",
  },
  {
    title: "Distribution",
    text: "Robust logistics ensure timely delivery across Pakistan and selected export regions.",
    img: "/about/distribution.jpg",
  },
];

const testimonials = [
  {
    title: "Effective Innovation",
    text: "Years of international experience delivering scalable agricultural solutions.",
    bg: "/about/test1.jpg",
    theme: "light",
  },
  {
    title: "Sustainable Practices",
    text: "Committed to methods that respect planet and generations.",
    bg: "/about/test2.jpg",
    theme: "dark",
  },
  {
    title: "Trusted by Thousands",
    text: "Farmers and distributors rely on us for quality and long-term success.",
    bg: "/about/test3.jpg",
    theme: "green",
  },
  {
    title: "Global Expertise",
    text: "Decades of experience producing export-grade commodities.",
    bg: "/about/test4.jpg",
    theme: "light",
  },
];

export default function About() {
  const [year, setYear] = useState(2021);
  // product/images placeholders: replace paths with your real assets

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}

      <section
        className="relative w-full h-[60vh] md:h-[72vh] flex items-center"
        style={{
          backgroundImage: "url('/About/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* green glass overlay to match the reference */}

        <div className="relative max-w-6xl mx-auto w-full px-6">
          <div className="mt-12 md:mt-20 flex items-start">
            <div className="max-w-2xl">
              <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
                About us
              </h1>
              <p className="mt-6 text-white/90 text-sm md:text-base max-w-xl">
                Wanher Farms Pvt. Ltd. is a vertically integrated procurement,
                production, and distribution company dedicated to supplying
                premium agricultural commodities to local and international
                markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s, i) => (
            <div key={i} className="bg-[#f4f2ef] p-10 rounded-lg">
              {/* Green Leaf Icon */}
          <img src="/iconb.png" className="pb-4" />

              {/* Value */}
              <div className="text-4xl font-bold text-gray-900">{s.value}</div>

              {/* Label */}
              <div className="mt-2 text-sm font-medium text-gray-700">
                {s.label}
              </div>

              {/* Description */}
              <p className="mt-3 text-xs text-gray-500 leading-relaxed">
                Efficient distribution across regions, supporting supply chains
                with reliability and precision.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GREEN CTA STRIP */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div
          className="relative rounded-xl overflow-hidden shadow-lg"
          style={{
            backgroundImage: `url('/About/Field.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay */}

          {/* Content */}
          <div className="relative p-4 sm:p-10 md:p-12 text-white text-center max-w-4xl mx-auto">
            <p className="text-xs sm:text-sm uppercase tracking-widest opacity-90">
              * What We Do
            </p>

            <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mt-3 sm:mt-4 leading-snug">
              We are a team of agronomists,
              <br className="hidden sm:block" />
              technologists, sustainability experts.
            </h2>

            <p className="mt-4 text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl mx-auto">
              At Wanher Farms, we handle core agricultural commodities that form
              the backbone of Pakistan’s food economy. Each product reflects our
              rigorous standards of procurement, production, and quality
              assurance.
            </p>

            <div className="mt-6 sm:mt-8">
              <button className="inline-flex items-center gap-2 sm:gap-3 bg-[#1f6306] hover:bg-[#016630] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-medium shadow">
                Let's work together{" "}
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / SUPPLY CHAIN */}

      <ProcessSection />

      {/* TESTIMONIALS / GRID */}
      {/* TESTIMONIALS — replace previous testimonials section with this */}

      <TestimonialsGrid />

      {/* HISTORY / TIMELINE */}

      <HistorySection />
      {/* COMMITMENT HERO */}
      <QualitySection />
    </div>
  );
}
