import { Sprout, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: "What does Wanher Farms do?",
    answer: "Wanher Farms Pvt. Ltd. specializes in the procurement, production, and nationwide distribution of high quality food commodities including wheat flour, rice, eggs, and pulses. We ensure consistent quality from sourcing to final delivery.",
  },
  {
    id: 2,
    question: "Where are your products sourced from?",
    answer: "Our products are sourced directly from trusted local farmers and growers across Pakistan. We maintain direct partnerships to ensure fair trade practices and complete traceability at every stage of the supply chain.",
  },
  {
    id: 3,
    question: "Are your products certified?",
    answer: "Yes, all our products are certified and meet international quality standards. We hold Halal certification, PSQCA certification, and PFA certification, ensuring our products meet the highest quality and safety standards.",
  },
  {
    id: 4,
    question: "What makes Wanher Farms different from other suppliers?",
    answer: "We are vertically integrated with decades of agricultural expertise. Our commitment to sustainable farming, rigorous quality assurance, and direct farmer partnerships sets us apart in the industry.",
  },
  {
    id: 5,
    question: "What product categories do you offer?",
    answer: "We offer a comprehensive range of agricultural commodities including Chakki Atta (Wheat Flour), Grade A Eggs, Pulses & Staples, Rice, and Wheat Grains. Each product reflects our rigorous procurement and quality standards.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState(1);

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">FAQ's</span>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.id} className="border-b border-gray-300">
                <button
                  onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                  className="w-full flex items-center justify-between py-4 text-left hover:opacity-70 transition-opacity"
                >
                  <span className="font-semibold text-gray-900">
                    {faq.id}. {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-600 flex-shrink-0 transition-transform ${
                      openId === faq.id ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openId === faq.id && (
                  <div className="pb-4 text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
