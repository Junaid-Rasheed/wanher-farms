import React from "react";
import { Link } from "react-router-dom";   // ← REQUIRED import

const products = [
  {
    slug: "chakki-atta",
    title: "Chakki Atta (Wheat Flour)",
    desc: "Stone-ground for maximum nutrition.",
    img: "/products/chakki.jpg",
  },
  {
    slug: "grade-a-eggs",
    title: "Grade A Eggs",
    desc: "Fresh, clean, carefully graded.",
    img: "/products/eggs.jpg",
  },
  {
    slug: "wheat-grains",
    title: "Wheat Grains",
    desc: "Pure, healthy, ready for household or industrial use.",
    img: "/products/wheat.jpg",
  },
  {
    slug: "pulses-staples",
    title: "Pulses & Staples",
    desc: "Our network of growers provides consistent, premium-quality pulses that meet both domestic/institutional needs.",
    img: "/products/pulses.jpg",
  },
];
// NOTE: per your request header/navigation is handled separately — this component only implements
// the hero and product grid to match screenshots 3 & 4. Replace image paths as needed.
export default function Product() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO - no nav included per request */}
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
                Our Products
              </h1>
              <p className="mt-6 text-white/90 text-sm md:text-base max-w-xl">
                Wanher Farms provides a growing line-up of high standard
                agricultural &amp; food commodities trusted by retailers,
                wholesalers, and households across Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            // Link to the product detail page
            <Link
              to={`/product/${p.slug}`}
              key={p.slug}
              className="block rounded-2xl overflow-hidden shadow-xl group bg-white"
            >
              <div className="w-full h-[320px] md:h-[360px] lg:h-[360px] bg-gray-100 relative">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent/10 to-transparent pointer-events-none"></div>

                {i === 0 && (
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
                    <div className="w-12 h-12 rounded-full border-4 border-white overflow-hidden shadow-md">
                      <img
                        src="/avatar.jpg"
                        alt="avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}

                <div className="absolute left-6 bottom-6 right-6 text-white">
                  <h3 className="text-2xl md:text-3xl font-semibold leading-tight drop-shadow">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-white/90 text-sm md:text-sm max-w-prose">
                    {p.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
