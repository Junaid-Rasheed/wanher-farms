import React from "react";
import { Link } from "react-router-dom";   // ← REQUIRED import
import { motion } from "framer-motion";

const products = [
  {
    slug: "chakki-atta",
    title: "Chakki Atta (Wheat Flour)",
    desc: "Stone-ground for maximum nutrition.",
    img: "/Product/p1.png",
  },
  {
    slug: "grade-a-eggs",
    title: "Grade A Eggs",
    desc: "Fresh, clean, carefully graded.",
    img: "/Product/p2.png",
  },
  {
    slug: "wheat-grains",
    title: "Wheat Grains",
    desc: "Pure, healthy, ready for household or industrial use.",
    img: "/Product/p3.png",
  },
  {
    slug: "pulses-staples",
    title: "Pulses & Staples",
    desc: "Our network of growers provides consistent, premium-quality pulses that meet both domestic/institutional needs.",
    img: "/Product/p4.png",
  },
];
// NOTE: per your request header/navigation is handled separately — this component only implements
// the hero and product grid to match screenshots 3 & 4. Replace image paths as needed.

// Framer motion variants (kept minimal so original styling isn't changed)
const heroVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.995 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
  hover: { scale: 1.02 },
};

export default function Product() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO - no nav included per request */}
      <motion.section
        className="relative w-full h-[60vh] md:h-[72vh] flex items-center"
        style={{
          backgroundImage: "url('/Product/phero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={heroVariants}
      >
        {/* green glass overlay to match the reference */}
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
      </motion.section>

      {/* PRODUCTS GRID */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((p, i) => (
            // Motion wrapper added but original Link styling kept exactly as provided
            <motion.div
              key={p.slug}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* Link to the product detail page */}
              <Link
                to={`/product/${p.slug}`}
                key={p.slug}
                className="block rounded-xl overflow-hidden shadow-xl group bg-white"
              >
                <div className="w-full h-[320px] md:h-[420px]  bg-gray-100 relative">
                  <img
                    src={p.img}
                    alt={p.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent/10 to-transparent pointer-events-none"></div>


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
            </motion.div>
          ))}
        </section>
      </main>
    </div>
  );
}
