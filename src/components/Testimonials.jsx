import { ArrowRight, Sprout, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote: "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: true,
  },
  {
    id: 2,
    quote: "The difference in taste and quality is clear when you buy from this farm. The produce is not only delicious but also packed with nutrients, thanks to their organic practices.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 3,
    quote: "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 4,
    quote: "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
  {
    id: 5,
    quote: "Their team brings not only expertise but real care for the land and the farmers.",
    author: "Lisa Rhouther",
    initial: "L",
    featured: false,
  },
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">Testimonials</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12 items-start">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              Trusted by farmers & businesses worldwide.
            </h2>
          </div>

          <p className="text-gray-700 leading-relaxed">
            At Wanher Farms, we handle core agricultural commodities that form the backbone of Pakistan's food economy. Each product reflects our rigorous standards of procurement, production, and quality assurance.
          </p>
        </div>

        <div className="overflow-x-auto mb-12 pb-4">
          <div className="flex gap-6 min-w-max">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`flex-shrink-0 rounded-2xl p-8 w-80 ${
                  index === 0
                    ? 'bg-green-700 text-white'
                    : 'bg-gray-100 text-gray-900'
                }`}
              >
                <p className={`text-sm leading-relaxed mb-6 ${
                  index === 0 ? 'text-green-50' : 'text-gray-700'
                }`}>
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${
                    index === 0
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-300 text-gray-700'
                  }`}>
                    {testimonial.initial}
                  </div>
                  <span className={`text-sm font-medium ${
                    index === 0 ? 'text-green-100' : 'text-gray-600'
                  }`}>
                    {testimonial.author}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <button className="border-2 border-green-700 text-green-700 px-8 py-3 rounded-full font-medium hover:bg-green-50 transition-all flex items-center gap-2">
            Read all testimonials <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
