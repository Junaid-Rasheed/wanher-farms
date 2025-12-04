import React, { useState } from 'react';
import { Sprout, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * FAQ component with two layout variants:
 *  - layout="twoThirds" (default) -> right column is 2/3 width
 *  - layout="half" -> right column is 1/2 width (equal columns)
 *
 * Usage:
 * <FAQ layout="twoThirds" /> or <FAQ layout="half" />
 *
 * Note: ensure `framer-motion` is installed: `npm i framer-motion` or `yarn add framer-motion`
 */

const faqs = [
  {
    id: 1,
    question: "What does Wanher Farms do?",
    answer:
      "Wanher Farms Pvt. Ltd. specializes in the procurement, production, and nationwide distribution of high quality food commodities including wheat flour, rice, eggs, and pulses. We ensure consistent quality from sourcing to final delivery.",
  },
  {
    id: 2,
    question: "Where are your products sourced from?",
    answer:
      "Our products are sourced directly from trusted local farmers and growers across Pakistan. We maintain direct partnerships to ensure fair trade practices and complete traceability at every stage of the supply chain.",
  },
  {
    id: 3,
    question: "Are your products certified?",
    answer:
      "Yes, all our products are certified and meet international quality standards. We hold Halal certification, PSQCA certification, and PFA certification, ensuring our products meet the highest quality and safety standards.",
  },
  {
    id: 4,
    question: "What makes Wanher Farms different from other suppliers?",
    answer:
      "We are vertically integrated with decades of agricultural expertise. Our commitment to sustainable farming, rigorous quality assurance, and direct farmer partnerships sets us apart in the industry.",
  },
  {
    id: 5,
    question: "What product categories do you offer?",
    answer:
      "We offer a comprehensive range of agricultural commodities including Chakki Atta (Wheat Flour), Grade A Eggs, Pulses & Staples, Rice, and Wheat Grains. Each product reflects our rigorous procurement and quality standards.",
  },
];

export function FAQ({ layout = 'twoThirds' }) {
  // layout: 'twoThirds' | 'half'
  const [openId, setOpenId] = useState(1);

  const isHalf = layout === 'half';
  const leftClass = isHalf ? 'md:w-1/2' : 'md:w-1/3';
  const rightClass = isHalf ? 'md:w-1/2' : 'md:w-2/3';

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-gray-700 mb-6">
          <Sprout className="w-5 h-5" />
          <span className="text-sm font-medium">FAQ's</span>
        </div>

        {/* Responsive layout using flex so we can control exact widths */}
        <div className="md:flex md:items-start gap-12">
          <div className={`${leftClass} mb-8 md:mb-0`}>
            <h2 className="text-4xl  font-semibold leading-tight">
              Frequently Asked Questions
            </h2>

          </div>

          <div className={`${rightClass} space-y-6 pl-20`}>
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="border-b border-gray-300">
                  <button
                    id={`faq-button-${faq.id}`}
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${faq.id}`}
                    className="w-full flex items-center justify-between py-4 text-left hover:opacity-90 transition-opacity focus:outline-none"
                  >
                    <span className="font-semibold text-gray-900">
                      {faq.id}. {faq.question}
                    </span>

                    {/* Animated chevron */}
                    <motion.span
                      aria-hidden="true"
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key={`panel-${faq.id}`}
                        id={`faq-panel-${faq.id}`}
                        role="region"
                        aria-labelledby={`faq-button-${faq.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                        className="text-gray-700 leading-relaxed"
                      >
                        <div className="py-4 px-0">{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
