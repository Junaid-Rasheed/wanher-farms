
import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ ADD THIS
import products from "../../data/products";

/* ------------------ CARD ------------------ */
function ProductCard({ title, desc, img, alt }) {
  return (
    <div className="rounded-2xl overflow-hidden group cursor-pointer transform transition-all hover:scale-105 relative">
      <div className="h-[28rem] overflow-hidden">
        <img
          src={img}
          alt={alt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      <div className="absolute left-6 bottom-6 pr-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-200 text-sm max-w-xs">{desc}</p>
      </div>
    </div>
  );
}

/* ------------------ SECTION ------------------ */
export default function ProductsSection() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-[#1f6306]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-center gap-2 text-green-100 mb-6">
          <img src="/icon.png" alt="Icon" />
          <span className="text-sm font-medium">What We Do</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-center text-white mb-6">
          Products & Business Segments
        </h2>

        <p className="text-center text-green-100 max-w-3xl mx-auto mb-16 leading-relaxed">
          At Wanher Farms, we handle core agricultural commodities that form the
          backbone of Pakistan&apos;s food economy. Each product reflects our
          rigorous standards of procurement, production, and quality assurance.
        </p>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {products.map((product) => (
            <Link
              key={product.slug}
              to={`/product/${product.slug}`} // ✅ DETAIL PAGE LINK
              className="block"
            >
              <ProductCard
                title={product.title}
                desc={product.desc}
                img={product.cardImage}
                alt={product.category}
              />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <Link to="/product">
            <button className="border-2 border-yellow-400 text-yellow-200 px-8 py-3 rounded-full font-medium hover:bg-yellow-400/10 transition-all flex items-center gap-2">
              See all products <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
