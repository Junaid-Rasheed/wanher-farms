import React from "react";
import { Link } from "react-router-dom";   // ← REQUIRED import
import { motion } from "framer-motion";

const products = [
  {
    slug: "chakki-atta",
    title: "Jawahir Khalis Chakki Atta (Flour)",
    desc: "Jawahir Khalis Chakki Atta is made from the most fertile and organically sourced pure wheat grains. It is processed in modern, hygienic grinding units to preserve its natural fiber, nutritional integrity, aroma, and authentic taste—ensuring maximum health benefits and superior quality in every serving.",
    img: "/Product/p1.png",
  },
  {
    slug: "grade-a-eggs",
    title: "Grade A Eggs",
    desc: "Jawahir Grade A Eggs are produced from the most trusted and reliable bird breeds, raised on high-quality, nutritionally balanced feed. Each egg is carefully sourced, graded as Category A, and packed under strict hygienic conditions to ensure freshness, safety, and maximum nutritional benefits.",
    img: "/Product/egg.jpg",
  },
  {
    slug: "wheat-grains",
    title: "Wheat Grains",
    desc: "Pure, healthy, ready for household or industrial use.",
    img: "/Product/p3.png",
  },
  {
    slug: "kainat-rice",
    title: "Jawahir Kainat Basmati Rice 1121",
    desc: "Jawahir Kainat Basmati Rice 1121 is a premium long-grain basmati variety known for its extra-long length, aromatic fragrance, and fluffy texture after cooking. Carefully sourced from trusted farms and processed under stringent quality controls, this rice delivers exceptional taste, purity, and consistency—ideal for biryani, pulao, and everyday meals.",
    img: "/Product/rice.jpeg",
  },
];

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
