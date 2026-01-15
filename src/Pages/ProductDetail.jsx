// src/Pages/ProductDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Bookmark, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

/* ------------------ DATA ------------------ */
const products = [
  {
    slug: "chakki-atta",
    title: "Jawahir Khalis Chakki Atta (Flour)",
    desc:
      "Jawahir Khalis Chakki Atta is made from the most fertile and organically sourced pure wheat grains. It is processed in modern, hygienic grinding units to preserve its natural fiber, nutritional integrity, aroma, and authentic taste—ensuring maximum health benefits and superior quality in every serving.",
    img: "/Product/pd.png",
    category: "Flour",
  },
  {
    slug: "grade-a-eggs",
    title: "Grade A Eggs",
    desc: "Jawahir Grade A Eggs are produced from the most trusted and reliable bird breeds, raised on high-quality, nutritionally balanced feed. Each egg is carefully sourced, graded as Category A, and packed under strict hygienic conditions to ensure freshness, safety, and maximum nutritional benefits.",
    img: "/Product/egg.jpg",
    category: "Eggs",
  },
  {
    slug: "wheat-grains",
    title: "Wheat Grains",
    desc: "Pure, healthy, ready for household or industrial use.",
    img: "/Product/pd.png",
    category: "Grains",
  },
    {
    slug: "kainat-rice",
    title: "Jawahir Kainat Basmati Rice 1121",
    desc: "Jawahir Kainat Basmati Rice 1121 is a premium long-grain basmati variety known for its extra-long length, aromatic fragrance, and fluffy texture after cooking. Carefully sourced from trusted farms and processed under stringent quality controls, this rice delivers exceptional taste, purity, and consistency—ideal for biryani, pulao, and everyday meals.",
    img: "/Product/rice.jpeg",
  },
];

/* ------------------ ANIMATIONS ------------------ */
const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.995 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      type: "spring",
      stiffness: 120,
      damping: 14,
    },
  }),
  hover: { scale: 1.01, transition: { duration: 0.18 } },
};

const imageHover = {
  hover: { scale: 1.03, transition: { duration: 0.35 } },
};

const badgeVariants = {
  hidden: { scale: 0.7, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 400, damping: 20 },
  },
};

const buttonTap = {
  whileTap: { scale: 0.98 },
  whileHover: { y: -2 },
};

/* ------------------ PAGE ------------------ */
export default function ProductDetail() {
  const { slug } = useParams();

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* ---------------- HERO ---------------- */}
      <header
        className="relative w-full h-[60vh] md:h-[72vh] flex items-center"
        style={{
          backgroundImage: "url('/Product/phero2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative max-w-7xl mx-auto w-full px-6">
          <div className="py-12 md:py-20 lg:py-24">
            <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              {product.title.replace(/\(.*?\)/, "").trim()}
            </h1>

            <p className="mt-6 text-white/90 max-w-2xl text-sm md:text-base">
              {product.desc}
            </p>
          </div>
        </div>
      </header>

      {/* ---------------- CONTENT ---------------- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* top bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Link
              to="/product"
              className="text-sm text-emerald-600 hover:underline"
            >
              ← Back to products
            </Link>

            <span className="text-xs text-gray-500 uppercase tracking-wide">
              Category: {product.category}
            </span>
          </div>
        </div>

        {/* ---------------- PRODUCT CARD ---------------- */}
        <section className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {[product].map((item, idx) => (
            <motion.article
              key={item.slug}
              className="rounded-2xl overflow-hidden"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* image */}
              <div className="relative">
                <motion.img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[320px] sm:h-[300px] md:h-[320px] object-cover rounded-xl shadow-2xl"
                  variants={imageHover}
                  whileHover="hover"
                  loading="lazy"
                />

                <motion.div
                  className="absolute top-4 right-4"
                  initial="hidden"
                  animate="visible"
                  variants={badgeVariants}
                >
                  <span className="bg-emerald-600 text-white text-xs px-3 py-1 rounded-full shadow">
                    New
                  </span>
                </motion.div>
              </div>

              {/* info */}
              <div className="px-3 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-gray-400 tracking-wide">
                    {item.category}
                  </span>

                  <button
                    aria-label={`Save ${item.title}`}
                    className="p-1 rounded-md text-gray-400 hover:text-emerald-600"
                  >
                    <Bookmark size={20} strokeWidth={1.75} />
                  </button>
                </div>

                <h3 className="mt-3 text-base md:text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                {/* size + CTA */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="relative">
                    <select
                      className="appearance-none border rounded-full px-4 py-2 pr-8 text-sm w-36"
                      aria-label={`Select size for ${item.title}`}
                    >
                      <option>Medium</option>
                      <option>Small</option>
                      <option>Large</option>
                    </select>

                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    />
                  </div>

                  <Link to="/contact" className="flex-1 flex justify-center">
                    <motion.button
                      className="px-8 py-2 bg-emerald-700 text-white rounded-full shadow hover:bg-emerald-600 w-full md:w-72"
                      whileTap={buttonTap.whileTap}
                      whileHover={buttonTap.whileHover}
                      aria-label={`Contact about ${item.title}`}
                    >
                      Contact Us
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
    </div>
  );
}
