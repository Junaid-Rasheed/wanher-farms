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
} from "lucide-react";
import { Link } from "react-router-dom";

const stats = [
  { value: "98%", label: "On-time delivery rate", icon: Clock },
  { value: "5+", label: "Years of Expertise", icon: Award },
  { value: "460+", label: "Happy Clients", icon: Users },
];

const processCards = [
  {
    title: "Procurement",
    text:
      "We source crops through direct partnerships with local farmers, ensuring fair trade and traceability.",
    img: "/about/procurement.jpg",
  },
  {
    title: "Production",
    text:
      "State-of-the-art milling, cleaning and grading facilities ensure consistent hygiene & quality.",
    img: "/about/production.jpg",
  },
  {
    title: "Quality Assurance",
    text:
      "Every batch is tested for moisture and purity to meet our strict nutritional profiling.",
    img: "/about/quality.jpg",
  },
  {
    title: "Distribution",
    text:
      "Robust logistics ensure timely delivery across Pakistan and selected export regions.",
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
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* green glass overlay to match the reference */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#053806]/85 via-[#083f08]/55 to-transparent"></div>

        <div className="relative max-w-6xl mx-auto w-full px-6">
          <div className="mt-12 md:mt-20 flex items-start">
            <div className="max-w-2xl">
              <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
            About us
              </h1>
              <p className="mt-6 text-white/90 text-sm md:text-base max-w-xl">
               Wanher Farms Pvt. Ltd. is a vertically integrated procurement,
            production, and distribution company dedicated to supplying premium
            agricultural commodities to local and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={i}
                className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white rounded-md shadow-sm">
                    <Icon className="w-6 h-6 text-emerald-700" />
                  </div>
                  <div>
                    <div className="text-3xl font-extrabold">{s.value}</div>
                    <div className="mt-2 text-sm text-gray-600">{s.label}</div>
                    <p className="mt-2 text-xs text-gray-500">
                      Efficient distribution across regions, supporting supply
                      chains with reliability and precision.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* GREEN CTA STRIP */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="rounded-xl overflow-hidden bg-green-800 text-white p-12 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm uppercase tracking-widest opacity-80">* What We Do</p>
            <h2 className="text-2xl md:text-4xl font-extrabold mt-4">
              We are a team of agronomists, technologists, sustainability experts.
            </h2>
            <p className="mt-4 text-sm md:text-base text-white/90">
              At Wanher Farms, we handle core agricultural commodities that form
              the backbone of Pakistan’s food economy. Each product reflects our
              rigorous standards of procurement, production, and quality assurance.
            </p>

            <div className="mt-8">
              <button className="inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-500 px-5 py-2 rounded-full font-medium shadow">
                Lets work together <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS / SUPPLY CHAIN */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <p className="text-sm text-emerald-700 mb-2 flex items-center gap-2">
              <Leaf className="w-4 h-4" />
              What We Do
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Process / Supply Chain</h3>
            <p className="text-gray-600 mb-6">
              At Wanher Farms, we handle core agricultural commodities that
              form the backbone of Pakistan's food economy. Each product reflects
              our rigorous standards of procurement, production, and quality assurance.
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-emerald-600 text-emerald-600 px-4 py-2 rounded-full"
            >
              Lets work together <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {processCards.map((c) => (
              <div
                key={c.title}
                className="relative rounded-xl overflow-hidden shadow-md bg-white border border-gray-50"
              >
                <div
                  className="h-40 sm:h-36 bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(to top, rgba(2,6,23,0.6), rgba(2,6,23,0.05)), url('${c.img}')`,
                  }}
                />
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-gray-900">{c.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / GRID */}
     {/* TESTIMONIALS — replace previous testimonials section with this */}
<section className="max-w-7xl mx-auto px-6 py-12">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
    {/* Left column: heading + intro (aligned to start) */}
    <div className="lg:col-span-1">
      <p className="text-sm text-emerald-700 mb-2">Testimonials</p>
      <h3 className="text-3xl md:text-4xl font-bold mb-4 text-left">
        Trusted by farmers & businesses worldwide.
      </h3>
      <p className="text-gray-600 max-w-md text-left">
        We handle core agricultural commodities that form the backbone of
        Pakistan’s food economy. Each product reflects our rigorous standards
        of procurement, production, and quality assurance.
      </p>
    </div>

    {/* Right side: large left image + 2x2 cards on the right.
        We create a nested grid where the large image sits as the first cell (col-1),
        and the card-grid occupies the remaining two columns on large screens. */}
    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
      {/* Large image occupying first two rows visually by setting it as a tall element */}
      <div className="md:col-span-1">
        <div className="rounded-lg overflow-hidden h-full">
          <img
            src="/about/large-aerial.jpg"
            alt="Aerial"
            className="w-full h-full object-cover rounded-lg"
            style={{ minHeight: 420 }} // ensures it's visually taller on wide screens
          />
        </div>
      </div>

      {/* Cards container: make a 2x2 layout inside the remaining space on md+ */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Card 1: Effective Innovation (light card) */}
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-start gap-4">
            <img src="/about/thumb1.jpg" alt="thumb" className="w-14 h-14 rounded-md object-cover flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Effective Innovation</h4>
              <p className="mt-2 text-sm text-gray-600">
                Years of proven international experience in delivering scalable agricultural solutions across diverse climates and regions.
              </p>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400">— Wanher Farms</div>
        </div>

        {/* Card 2: Sustainable Practices (dark card) */}
        <div className="bg-black text-white rounded-lg p-6 flex flex-col justify-between shadow-lg">
          <div className="flex items-start gap-4">
            <img src="/about/thumb2.jpg" alt="thumb" className="w-14 h-14 rounded-md object-cover flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold">Sustainable Practices</h4>
              <p className="mt-2 text-sm text-white/90">
                From pesticide-free farming to smart water use, we're committed to methods that respect the planet and generations.
              </p>
            </div>
          </div>
          <div className="mt-4 text-xs text-white/80">— Wanher Farms</div>
        </div>

        {/* Card 3: Trusted by Thousands (green card) */}
        <div className="bg-emerald-800 text-white rounded-lg p-6 flex flex-col justify-between shadow-lg">
          <div className="flex items-start gap-4">
            <img src="/about/thumb3.jpg" alt="thumb" className="w-14 h-14 rounded-md object-cover flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold">Trusted by Thousands</h4>
              <p className="mt-2 text-sm text-white/90">
                Farmers, distributors, and trusted partners worldwide rely on us for quality, reliability, and long-term success.
              </p>
            </div>
          </div>
          <div className="mt-4 text-xs text-white/80">— Wanher Farms</div>
        </div>

        {/* Card 4: Global Expertise (light card) */}
        <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 flex flex-col justify-between shadow-sm">
          <div className="flex items-start gap-4">
            <img src="/about/thumb4.jpg" alt="thumb" className="w-14 h-14 rounded-md object-cover flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Global Expertise</h4>
              <p className="mt-2 text-sm text-gray-600">
                Years of international experience producing export-grade commodities.
              </p>
            </div>
          </div>
          <div className="mt-4 text-xs text-gray-400">— Wanher Farms</div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* HISTORY / TIMELINE */}
      <section className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 rounded-lg">
        <div className="text-center mb-8">
          <p className="text-sm text-emerald-700 mb-2">Our History</p>
          <h3 className="text-3xl font-bold">From humble roots to a global vision.</h3>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            At Wanher Farms, we handle core agricultural commodities that form the backbone of Pakistan’s food economy.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            {[2021, 2022, 2023, 2024, 2025].map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={`px-4 py-2 rounded-full text-sm ${year === y ? "bg-emerald-700 text-white" : "bg-white border"}`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h4 className="text-xl font-semibold mb-3">
              Agricultural Group is founded with a mission to support sustainable farming.
            </h4>
            <p className="text-gray-600 mb-6">
              Agricultural Group was founded with a clear purpose: to make farming more sustainable,
              efficient, and accessible. What began as a local initiative focused on soil restoration and water conservation quickly gained traction.
            </p>
            <button className="inline-flex items-center gap-2 px-4 py-2 border border-emerald-700 text-emerald-700 rounded-full">
              Read more <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="rounded-xl overflow-hidden">
            <img src="/about/history.jpg" alt="history" className="w-full h-full object-cover rounded-xl" />
          </div>
        </div>
      </section>

      {/* COMMITMENT HERO */}
      <section
        className="mt-12"
        style={{
          backgroundImage: "url('/about/commitment.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-gradient-to-r from-[#073806]/90 to-transparent py-20">
          <div className="max-w-7xl mx-auto px-6 text-center text-white">
            <p className="text-sm uppercase tracking-widest mb-4">Commitment to Quality</p>
            <h3 className="text-3xl md:text-5xl font-extrabold mb-6">Excellence is not an act, it's a process.</h3>
            <p className="max-w-2xl mx-auto text-sm md:text-base text-white/90 mb-8">
              Every grain, every egg, every product that leaves our facility carries the mark of care, consistency, and commitment.
            </p>

            <div className="flex items-center justify-center gap-6">
              {/* Replace src with your certification logos */}
              <div className="bg-white p-4 rounded-lg shadow">
                <img src="/about/cert1.png" alt="cert1" className="w-28" />
                <div className="text-xs text-white/90 mt-2 text-center">Halal Certified</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <img src="/about/cert2.png" alt="cert2" className="w-28" />
                <div className="text-xs text-white/90 mt-2 text-center">PSQCA Certified</div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <img src="/about/cert3.png" alt="cert3" className="w-28" />
                <div className="text-xs text-white/90 mt-2 text-center">PFA Certified</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-7xl mx-auto px-6 py-12 text-center text-gray-500">
        © {new Date().getFullYear()} Wanher Farms. All rights reserved.
      </footer>
    </div>
  );
}
