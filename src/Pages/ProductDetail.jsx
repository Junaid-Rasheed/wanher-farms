
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import products from "../data/products"; // ✅ central data

/* ------------------ HERO ANIMATION ------------------ */
const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ------------------ ACCORDION ------------------ */
function Accordion({ title, items }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left"
      >
        <span className="font-semibold">{title}</span>
        <ChevronDown
          size={18}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="pb-4 text-sm text-gray-600 space-y-1"
          >
            {items.map((i) => (
              <p key={i}>• {i}</p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ------------------ PAGE ------------------ */
export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  const [activeImg, setActiveImg] = useState(
    product?.images?.[0] || ""
  );
  const [size, setSize] = useState("10kg");
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Product not found.</p>
      </div>
    );
  }

  return (
    <>
      {/* ------------------ HERO ------------------ */}
      <motion.section
        className="relative w-full h-[60vh] md:h-[72vh] flex items-center"
        style={{
          backgroundImage: "url('/Product/phero2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={heroVariants}
      >
        <div className="relative max-w-6xl mx-auto w-full px-6">
          <div className="mt-12 md:mt-20 flex items-start">
            <div className="max-w-2xl">
              <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
                {product.title}
              </h1>
              <p className="mt-6 text-white/90 text-sm md:text-base max-w-xl">
                {product.desc}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ------------------ CONTENT ------------------ */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <Link to="/product" className="text-sm text-emerald-600">
          ← Back to products
        </Link>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-14 mt-8">
          {/* LEFT: IMAGES */}
          <div className="flex gap-4">
            {product.images.length > 1 && (
              <div className="flex flex-col gap-3">
                {product.images.map((img) => (
                  <button
                    key={img}
                    onClick={() => setActiveImg(img)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border ${
                      activeImg === img
                        ? "border-emerald-600"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <div className="flex-1 bg-gray-50 rounded-xl shadow h-[520px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeImg}
                  src={activeImg}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="max-h-full max-w-full object-contain"
                  alt={product.title}
                />
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT: DETAILS */}
          <div className="space-y-6">
            <span className="inline-block text-xs px-3 py-1 rounded-full bg-emerald-50 text-emerald-700">
              New
            </span>

            <h2 className="text-3xl font-bold">{product.title}</h2>
            <p className="text-gray-600">{product.desc}</p>

            {/* SIZE */}
            <div>
              <p className="text-sm font-semibold mb-2">
                Select Sizing: <span className="font-normal">{size}</span>
              </p>
              <div className="flex gap-3 flex-wrap">
                {["10kg", "20kg", "30kg", "40kg"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`px-6 py-2 rounded-full text-sm font-medium transition ${
                      size === s
                        ? "bg-emerald-700 text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* QTY + CTA */}
            <div className="flex gap-4 items-center">
              <select
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                className="border rounded-full px-4 py-2 w-24"
              >
                {[1, 2, 3, 4, 5].map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>

              <Link to="/contact" className="flex-1">
                <button className="w-full bg-emerald-700 hover:bg-emerald-600 text-white py-3 rounded-full font-semibold">
                  Book a call now
                </button>
              </Link>
            </div>

            {/* NUTRITION */}
            {product.nutrition && (
              <div className="pt-6">
                <h3 className="text-lg font-semibold mb-2">
                  Nutritional Information
                </h3>

                <Accordion
                  title="Per 100 g"
                  items={product.nutrition.per100g}
                />
                {product?.nutrition?.perRoti ? 

                  <Accordion
                  title="Per Typical Serving"
                  items={product?.nutrition?.perRoti}
                  />
                  : ""
                }
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
}
