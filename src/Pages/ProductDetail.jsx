// src/Pages/ProductDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Bookmark, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const products = [
  {
    slug: "chakki-atta",
    title: "Chakki Atta (Wheat Flour)",
    desc: "Stone-ground for maximum nutrition.",
    img: "/Product/pd.png",
  },
  {
    slug: "grade-a-eggs",
    title: "Grade A Eggs",
    desc: "Fresh, clean, carefully graded.",
    img: "/Product/pd.png",
  },
  {
    slug: "wheat-grains",
    title: "Wheat Grains",
    desc: "Pure, healthy, ready for household or industrial use.",
    img: "/Product/pd.png",
  },
  {
    slug: "pulses-staples",
    title: "Pulses & Staples",
    desc: "Our network of growers provides consistent, premium-quality pulses that meet both domestic/institutional needs.",
    img: "/Product/pd.png",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 10, scale: 0.995 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: i * 0.08, type: "spring", stiffness: 120, damping: 14 },
  }),
  hover: { scale: 1.01, transition: { type: "tween", duration: 0.18 } },
};

const imageHover = { hover: { scale: 1.03, transition: { duration: 0.35 } } };
const badgeVariants = { hidden: { scale: 0.7, opacity: 0 }, visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 20 } } };
const buttonTap = { whileTap: { scale: 0.98 }, whileHover: { y: -2 } };

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug) || products[0];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header
        className="relative w-full h-[60vh] md:h-[72vh] flex items-center"
        style={{
          backgroundImage: `url('/Product/phero2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
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
          {[1, 2, 3, 4].map((n, idx) => (
            <motion.article
              key={n}
              className="rounded-2xl overflow-hidden"
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.12 }}
              variants={cardVariants}
              whileHover="hover"
            >
              {/* image block (bigger, rounded, strong shadow like image 1) */}
              <div className="relative">
                <motion.img
                  src={product.img}
                  alt={`${product.title} ${n}`}
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

              {/* transparent / minimal info area (no white card background) */}
              <div className="px-3 py-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase text-gray-400 tracking-wide">Flour</span>
                  <button
                    aria-label={`Save Wanher Flour ${n}`}
                    className="p-1 rounded-md text-gray-400 hover:text-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-200"
                  >
                    <Bookmark size={20} strokeWidth={1.75} />
                  </button>
                </div>

                <h3 className="mt-3 text-base md:text-lg font-semibold text-gray-900">{`Wanher Flour ${n}`}</h3>

                {/* size + centered big green button (stacked) */}
                <div className="mt-4 flex items-center gap-4">
                  <div className="relative">
                    <select
                      className="appearance-none border rounded-full px-4 py-2 pr-8 text-sm w-36 focus:outline-none"
                      aria-label={`Select size for Wanher Flour ${n}`}
                    >
                      <option>Medium</option>
                      <option>Small</option>
                      <option>Large</option>
                    </select>

                    <ChevronDown
                      size={18}
                      strokeWidth={2}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                      aria-hidden="true"
                    />
                  </div>

                  {/* center aligned button resembling image 1 */}
                  <div className="flex-1 flex justify-center">
                    <motion.button
                      className="inline-flex items-center justify-center gap-3 px-8 py-2 bg-emerald-700 text-white rounded-full shadow hover:bg-emerald-600 transition w-full md:w-72"
                      whileTap={buttonTap.whileTap}
                      whileHover={buttonTap.whileHover}
                      aria-label={`Contact about Wanher Flour ${n}`}
                    >
                      Contact Us
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
    </div>
  );
}
