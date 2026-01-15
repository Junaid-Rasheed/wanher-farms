import React, { useRef, useEffect, useState } from "react";
import { ArrowRight, Sprout } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    quote: "Excellent quality atta that makes very soft rotis with a great taste.",
    author: "Ahmed Khan",
    initial: "A",
    featured: true,
  },
  {
    id: 2,
    quote: "Jawahir eggs are always fresh and very well packed.",
    author: "Ayesha Malik",
    initial: "A",
    featured: false,
  },
  {
    id: 3,
    quote: "Basmati rice cooks perfectly every time, highly recommended.",
    author: "Usman Ali",
    initial: "U",
    featured: false,
  },
  {
    id: 4,
    quote: "Consistent quality across all products, a very reliable brand.",
    author: "Fatima Noor",
    initial: "F",
    featured: false,
  },
  {
    id: 5,
    quote: "Loved the natural aroma and smooth texture of the chakki atta.",
    author: "Hassan Raza",
    initial: "H",
    featured: false,
  },
  {
    id: 6,
    quote: "Eggs are clean, hygienic, and properly graded.",
    author: "Sana Iqbal",
    initial: "S",
    featured: false,
  },
  {
    id: 7,
    quote: "Rice grains are long, separate, and non-sticky after cooking.",
    author: "Bilal Ahmed",
    initial: "B",
    featured: false,
  },
  {
    id: 8,
    quote: "Strong packaging keeps the product fresh and protected.",
    author: "Nida Hussain",
    initial: "N",
    featured: false,
  },
  {
    id: 9,
    quote: "Great value for money with premium-quality products.",
    author: "Saad Farooq",
    initial: "S",
    featured: false,
  },
  {
    id: 10,
    quote: "Taste and nutrition are both top-class.",
    author: "Maryam Aslam",
    initial: "M",
    featured: false,
  },
  {
    id: 11,
    quote: "The atta feels pure and natural with no artificial smell.",
    author: "Zain Abbas",
    initial: "Z",
    featured: false,
  },
  {
    id: 12,
    quote: "Egg yolks are rich in color and clearly very fresh.",
    author: "Hira Shah",
    initial: "H",
    featured: false,
  },
  {
    id: 13,
    quote: "Perfect rice for both special occasions and daily use.",
    author: "Kamran Siddiqui",
    initial: "K",
    featured: false,
  },
  {
    id: 14,
    quote: "Very satisfied with Jawahir food commodities overall.",
    author: "Anum Khalid",
    initial: "A",
    featured: false,
  },
  {
    id: 15,
    quote: "The brand feels professional, trustworthy, and reliable.",
    author: "Imran Qureshi",
    initial: "I",
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
          <img src="/iconb.png" />
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
        p-4
        w-80
        min-h-[260px]
        flex flex-col justify-between
        ${isFirst ? "bg-[#1f6306] text-white" : "bg-[#f4f2ef] text-gray-900"}
      `}
              >
                {/* Quote */}
                <p
                  className={"text-[16px] leading-7 font-medium max-w-[18rem]"}
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
                        isFirst
                          ? "bg-green-600 text-white"
                          : "bg-gray-300 text-gray-700"
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
    </section>
  );
}

export default Testimonials;
