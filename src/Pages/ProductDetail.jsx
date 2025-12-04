// src/Pages/ProductDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

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
    desc:
      "Our network of growers provides consistent, premium-quality pulses that meet both domestic/institutional needs.",
    img: "/products/pulses.jpg",
  },
];

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header
        className="relative w-full h-[44vh] md:h-[48vh] lg:h-[56vh] flex items-center"
        style={{
          backgroundImage: `url('${product.img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* left green glass overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#073806]/92 via-[#0b3f0b]/50 to-transparent" />

        <div className="relative max-w-7xl mx-auto w-full px-6">
          <div className="py-12 md:py-20 lg:py-24">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {product.title.replace(/\(.*\)/, "").trim()}
            </h1>

            <p className="mt-6 text-white/90 max-w-2xl text-sm md:text-base">
              Wanher Farms Pvt. Ltd. is a vertically integrated procurement,
              production, and distribution company dedicated to supplying
              premium agricultural commodities to local and international
              markets. Our operations reflect decades of agricultural expertise,
              uncompromising quality standards, and a deep respect for
              Pakistan’s fertile land.
            </p>
          </div>
        </div>
      </header>

      {/* CONTENT */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* top controls: back + sort */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Link
              to="/product"
              className="text-sm text-emerald-600 hover:underline inline-flex items-center"
            >
              ← Back to products
            </Link>
            <span className="text-xs text-gray-500 uppercase tracking-wide">Category: Flour</span>
          </div>

          <div className="flex items-center gap-4">
            <label className="text-sm text-gray-600 hidden md:block">Sort by</label>
            <select
              aria-label="Sort products"
              className="text-sm border rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-200"
            >
              <option value="popular">Popular</option>
              <option value="new">New</option>
              <option value="asc">Price: low to high</option>
              <option value="desc">Price: high to low</option>
            </select>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* example: 4 product variants as in the screenshot */}
          {[1, 2, 3, 4].map((n, i) => (
            <article
              key={n}
              className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={product.img}
                  alt={`${product.title} ${n}`}
                  className="w-full h-[300px] sm:h-[280px] md:h-[300px] object-cover"
                />

                {/* small NEW badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    New
                  </span>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-gray-400 tracking-wide">Flour</span>
                  {/* bookmark icon */}
                  <button
                    aria-label="Save product"
                    className="p-1 rounded-md text-gray-400 hover:text-emerald-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5v14l7-5 7 5V5a2 2 0 00-2-2H7a2 2 0 00-2 2z" />
                    </svg>
                  </button>
                </div>

                <h3 className="mt-3 text-lg font-semibold text-gray-900">{`Wanher Flour ${n}`}</h3>

                <div className="mt-4 flex items-center gap-4">
                  {/* size selector */}
                  <div className="relative">
                    <select
                      className="appearance-none border rounded-full px-4 py-2 pr-8 text-sm w-36 focus:outline-none"
                      aria-label="Select size"
                    >
                      <option>Medium</option>
                      <option>Small</option>
                      <option>Large</option>
                    </select>
                    <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.12 1L10.53 13a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* contact us button */}
                  <div className="flex-1">
                    <button className="w-full md:w-auto inline-flex items-center justify-center gap-3 px-6 py-2 bg-emerald-700 text-white rounded-full shadow hover:bg-emerald-600 transition">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
