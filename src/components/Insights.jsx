
import { ArrowRight, Sprout } from "lucide-react";

const insights = [
  {
    id: 1,
    title: "Maintaining Quality Consistency in Bulk Commodities",
    date: "September 14, 2024",
    image:
      "https://images.pexels.com/photos/3721540/pexels-photo-3721540.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    title: "From Field to Flour, The Effort Behind Every Bag",
    date: "September 14, 2024",
    image:
      "https://images.pexels.com/photos/1574260/pexels-photo-1574260.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "How Procurement Integrity Builds Market Trust",
    date: "September 14, 2024",
    image:
      "https://images.pexels.com/photos/1450736/pexels-photo-1450736.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 4,
    title: "How Procurement Integrity Builds Market Trust",
    date: "September 14, 2024",
    image:
      "https://images.pexels.com/photos/3725515/pexels-photo-3725515.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 5,
    title: "Sustainability in Pakistan's Food Sector",
    date: "September 14, 2024",
    image:
      "https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800",
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

        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Inside Wanher Farms
        </h2>

        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-16 leading-relaxed">
          At Wanher Farms, we handle core agricultural commodities that form the backbone
          of Pakistan's food economy. Each product reflects our rigorous standards of
          procurement, production, and quality assurance.
        </p>

        {/* GRID EXACT LIKE IMAGE 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-stretch">
          {insights.map((insight, index) => {
            const isFeatured = index === 0;

            return (
              <div
                key={insight.id}
                className={`relative rounded-[24px] overflow-hidden group cursor-pointer shadow-lg transition-all 
                
                ${isFeatured ? "lg:row-span-2 min-h-[520px]" : "h-64"}`}
              >
                {/* IMAGE */}
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0">
                  {/* Bottom fade (greenish) */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-emerald-900/80 to-transparent"></div>

                  {/* Slight dark layer */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all"></div>
                </div>

                {/* TEXT ON BOTTOM LEFT */}
                <div className="absolute bottom-0 left-0 p-6">
                  <h3
                    className={`font-bold text-white drop-shadow-md ${
                      isFeatured ? "text-2xl md:text-3xl" : "text-lg"
                    }`}
                  >
                    {insight.title}
                  </h3>
                  <p className="text-yellow-300 text-sm mt-2 drop-shadow-sm">
                    {insight.date}
                  </p>
                </div>
              </div>
            );
          })}
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
