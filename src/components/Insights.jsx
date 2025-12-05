// src/components/Insights.jsx  (or wherever you keep this component)
import React from "react";
import { ArrowRight, Sprout } from "lucide-react";
import blogData from "../data/blogData";

/**
 * If some blog items don't include an image, this fallback path should
 * exist in public/, e.g. public/Home/fallback.png
 */
const FALLBACK_IMAGE = "/Home/fallback.png";

export function Insights() {
  // Convert blogData into the shape the UI expects. Limit to first 5.
  const items = blogData.slice(0, 5).map((b, index) => ({
    id: index + 1,
    title: b.title,
    date: b.date,
    // prefer b.img, but allow inlineImg or secondImg — fall back to a default
    image: b.img || b.inlineImg || b.secondImg || FALLBACK_IMAGE,
    slug: b.slug,
  }));

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* header */}
        <div className="flex items-center justify-center gap-2 text-gray-700 mb-6">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">Insights</span>
        </div>

        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-6">
          Inside Wanher Farms
        </h2>

        <p className="text-center text-gray-700 max-w-3xl mx-auto mb-16 leading-relaxed">
          At Wanher Farms, we handle core agricultural commodities that form the
          backbone of Pakistan's food economy. Each product reflects our
          rigorous standards of procurement, production, and quality assurance.
        </p>

        {/* GRID: featured left, two-column stack on right like Image 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* LEFT FEATURE CARD — use the first item if exists */}
          {items[0] && (
            <div className="lg:col-span-1 lg:row-span-2 lg:h-[720px] relative rounded-[24px] overflow-hidden group shadow-xl">
              <img
                src={items[0].image}
                onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                alt={items[0].title}
              />

              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="text-2xl font-semibold text-white">
                  {items[0].title}
                </h3>
                <p className="text-yellow-300 my-2 text-sm">{items[0].date}</p>
              </div>
            </div>
          )}

          {/* RIGHT SIDE — use remaining items */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr h-full lg:h-[720px]">
            {items.slice(1).map((insight) => (
              <div
                key={insight.id}
                className="relative h-full rounded-[20px] overflow-hidden group shadow-lg"
              >
                <img
                  src={insight.image}
                  onError={(e) => (e.currentTarget.src = FALLBACK_IMAGE)}
                  alt={insight.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-white text-2xl font-semibold leading-snug">
                    {insight.title}
                  </h3>
                  <p className="text-yellow-300 text-sm my-2">{insight.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center">
          <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-all flex items-center gap-2">
            Read more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
