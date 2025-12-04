import { ArrowRight, Sprout } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "Maintaining Quality Consistency in Bulk Commodities",
    date: "September 14, 2024",
    image: "/Home/j1.png",
  },
  {
    id: 2,
    title: "From Field to Flour, The Effort Behind Every Bag",
    date: "September 14, 2024",
    image: "/Home/j2.png",
  },
  {
    id: 3,
    title: "How Procurement Integrity Builds Market Trust",
    date: "September 14, 2024",
    image: "/Home/j3.png",
  },
  {
    id: 4,
    title: "How Procurement Integrity Builds Market Trust",
    date: "September 14, 2024",
    image: "/Home/j4.png",
  },
  {
    id: 5,
    title: "Sustainability in Pakistan's Food Sector",
    date: "September 14, 2024",
    image: "/Home/j5.png",
  },
];

export function Insights() {
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
          {/* LEFT FEATURE CARD — 1/3 width, tall */}
          <div className="lg:col-span-1 lg:row-span-2 lg:h-[720px] relative rounded-[24px] overflow-hidden group shadow-xl">
            <img
              src={insights[0].image}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt={insights[0].title}
            />


            <div className="absolute bottom-0 left-0 p-4">
              <h3 className="text-2xl font-semibold text-white">
                {insights[0].title}
              </h3>
              <p className="text-yellow-300 my-2 text-sm">{insights[0].date}</p>
            </div>
          </div>

          {/* RIGHT SIDE — 2/3 width, 2×2 grid that matches left card height */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr h-full lg:h-[720px]">
            {insights.slice(1).map((insight) => (
              <div
                key={insight.id}
                className="relative h-full rounded-[20px] overflow-hidden group shadow-lg"
              >
                <img
                  src={insight.image}
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
