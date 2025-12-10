import React, { useState } from "react";
import { ArrowRight, Sprout } from "lucide-react";

// Usage notes:
// 1) Install lucide-react: `npm install lucide-react`
// 2) Ensure TailwindCSS is configured in your project.
// 3) Place the provided images in your public folder and update paths if needed.

const contentByYear = {
  2021: {
    title:
      "Agricultural Group is founded with a mission to support sustainable farming.",
    body: "In 2021 we focused on soil restoration pilots, working with smallholders to prove water-efficient techniques that boost yields while conserving resources.",
    img: "/About/Field3.png",
    cta: { label: "Read more", href: "#" },
  },
  2022: {
    title: "Scaling regenerative practices across regions.",
    body: "2022 was about scale — we trained hundreds of farmers on regenerative methods and started partnerships for seed improvements to improve resilience.",
    img: "/About/Field3.png",
    cta: { label: "Explore 2022", href: "#" },
  },
  2023: {
    title: "Supply chain investments and quality assurance.",
    body: "In 2023 we invested in post-harvest infrastructure and launched stricter QA protocols to bring consistent, high-quality produce to national and export markets.",
    img: "/About/Field3.png",
    cta: { label: "View initiatives", href: "#" },
  },
  2024: {
    title: "Technology integration for smarter farming.",
    body: "We rolled out soil sensors and advisory apps in 2024, enabling data-driven decisions at the farm level and reducing input waste.",
    img: "/About/Field3.png",
    cta: { label: "See technology", href: "#" },
  },
  2025: {
    title: "Towards a global vision — exports and partnerships.",
    body: "By 2025 we expanded export channels and entered international quality programs to bring our sustainably-grown commodities to new markets.",
    img: "/About/Field3.png",
    cta: { label: "Our global story", href: "#" },
  },
};

export default function HistorySection() {
  const [year, setYear] = useState(2021);
  const years = [2021, 2022, 2023, 2024, 2025];

  // guard in case content missing
  const content = contentByYear[year] || contentByYear[2021];
  const imgSrc = content.img || "/About/Field3.png";

  // Simple heuristic to slightly reduce font-size when content is long.
  // Thresholds chosen to be subtle — tune if you want stronger/smaller sizes.
  const combinedLength =
    (content.title?.length || 0) + (content.body?.length || 0);
  // classes for the title and body; default are your original sizes
  let titleSizeClass = "text-3xl";
  let bodySizeClass = "text-sm";

  if (combinedLength > 300 && combinedLength <= 420) {
    // moderate reduction
    titleSizeClass = "text-2xl";
    bodySizeClass = "text-sm";
  } else if (combinedLength > 420) {
    // more reduction for very long content
    titleSizeClass = "text-2xl";
    bodySizeClass = "text-xs";
  }

  return (
    // Full width background
    <section className="w-full bg-[#f4f2ef] py-16">
      {/* Centered white content container */}
      <div className="max-w-7xl mx-auto px-6 py-12  ">
        <div className="text-center mb-8">
          <p className="text-sm  mb-2 flex items-center justify-center gap-2">
          <img src="/iconb.png" />
            Our History
          </p>

          <h3 className="text-3xl font-semibold">
            From humble roots to a global vision.
          </h3>

          <div className="mt-6 flex justify-center gap-3">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                aria-pressed={year === y}
                className={`px-6 py-1 rounded-full text-sm transition-shadow duration-150 focus:outline-none focus:ring-2 focus:ring-emerald-600 ${
                  year === y
                    ? "bg-[#1f6306] text-white shadow"
                    : "bg-white border border-gray-200"
                }`}
              >
                {y}
              </button>
            ))}
          </div>

          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
            At Wanher Farms, we handle core agricultural commodities that form
            the backbone of Pakistan’s food economy. Each product reflects our
            rigorous standards of procurement, production, and quality
            assurance.
          </p>
        </div>

        {/* items-stretch ensures both children stretch to same height */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Dynamic content card */}
          <div className="bg-white p-8 rounded-lg shadow-sm h-full flex flex-col">
            {/* <Sprout className="w-6 h-6 text-[#1f6306] mb-4" /> */}
          <img src="/iconb.png" className="w-4 mb-4" />

            {/* title pulled from contentByYear */}
            <h4 className={`${titleSizeClass} font-semibold mb-3`}>
              {content.title}
            </h4>

            {/* body pulled from contentByYear; flex-grow keeps layout even */}
            <p className={`${bodySizeClass} text-gray-600 mb-6 flex-grow`}>
              {content.body}
            </p>

            {/* CTA uses contentByYear cta label (href is placeholder) */}
            <a
              href={content.cta?.href || "#"}
              className="inline-flex w-fit items-center gap-2 px-4 py-2 border border-emerald-700 text-emerald-700 rounded-full hover:shadow-sm transition"
              aria-label={`Read more about ${year}`}
            >
              {content.cta?.label || "Read more"}
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Image — same image for all years (as requested) */}
          <div className="rounded-lg overflow-hidden shadow-md h-full">
            <img
              src={imgSrc}
              alt={`history ${year}`}
              className="w-full h-full object-cover rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
