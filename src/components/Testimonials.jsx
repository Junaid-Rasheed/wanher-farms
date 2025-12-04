import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Sprout } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote:
      "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: true,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
  },
  {
    id: 2,
    quote:
      "The difference in taste and quality is clear when you buy from this farm. The produce is not only delicious but also packed with nutrients, thanks to their organic practices.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 3,
    quote:
      "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 4,
    quote:
      "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 5,
    quote:
      "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 6,
    quote:
      "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 7,
    quote:
      "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 8,
    quote:
      "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 9,
    quote:
      "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
];

export function Testimonials() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    function calculate() {
      const container = containerRef.current;
      const content = contentRef.current;
      if (!container || !content) return;
      const scrollable = content.scrollWidth - container.offsetWidth;
      setMaxScroll(scrollable > 0 ? scrollable : 0);
    }

    calculate();
    window.addEventListener("resize", calculate);
    const t = setTimeout(calculate, 300);
    return () => {
      window.removeEventListener("resize", calculate);
      clearTimeout(t);
    };
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">Testimonials</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-semibold mb-8 leading-tight">
              Trusted by farmers & businesses worldwide.
            </h2>
          </div>

          <p className="text-gray-900 leading-relaxed max-w-4/5">
            At Wanher Farms, we handle core agricultural commodities that form
            the backbone of Pakistan's food economy. Each product reflects our
            rigorous standards of procurement, production, and quality
            assurance.
          </p>
        </div>
      </div>

      {/* Full-bleed carousel wrapper */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
        }}
        className="overflow-hidden mb-12 pb-4 cursor-grab active:cursor-grabbing"
      >
        <motion.div
          ref={contentRef}
          drag="x"
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.12}
          className="flex gap-6 min-w-max select-none snap-x snap-mandatory no-scrollbar px-6"
          style={{ touchAction: "pan-y" }}
        >
        {testimonials.map((testimonial, index) => {
  const isFirst = index === 0; // ONLY the first card is green

  return (
    <div
      key={testimonial.id}
      className={`
        relative
        flex-shrink-0
        snap-start
        rounded-2xl
        p-8
        w-80
        min-h-[260px]
        flex flex-col justify-between
        ${isFirst ? "bg-[#1f6306] text-white" : "bg-[#f4f2ef] text-gray-900"}
      `}
    >
      {/* Quote */}
      <p
        className={`${
          isFirst
            ? "text-[16px] leading-7 font-medium max-w-[18rem]"
            : "text-sm leading-relaxed max-w-[19rem]"
        }`}
      >
        “{testimonial.quote}”
      </p>

      {/* Bottom avatar + name — STICK TO BOTTOM FOR ALL CARDS */}
      <div className="flex items-center gap-3 mt-auto">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.author}
            className={`${
              isFirst ? "w-12 h-12" : "w-10 h-10"
            } rounded-full object-cover shadow-sm ${
              isFirst ? "border-2 border-white" : ""
            }`}
          />
        ) : (
          <div
            className={`${
              isFirst ? "w-12 h-12" : "w-10 h-10"
            } rounded-full flex items-center justify-center font-bold ${
              isFirst ? "bg-green-600 text-white" : "bg-gray-300 text-gray-700"
            }`}
          >
            {testimonial.initial}
          </div>
        )}

        <span
          className={`text-sm font-medium ${
            isFirst ? "text-white" : "text-gray-700"
          }`}
        >
          {testimonial.author}
        </span>
      </div>
    </div>
  );
})}

        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center">
          <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-all flex items-center gap-2">
            Read all testimonials <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
