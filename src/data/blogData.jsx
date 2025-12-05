// src/data/blogData.js
const blogData = [
  {
    slug: "from-field-to-flour",
    title: "From Field to Flour — The Effort Behind Every Bag",
    date: "September 14, 2024",
      heading: "Smarter decisions.5455Healthier crops. Greater yields.",

    excerpt:
      "A look at our journey from farms to finished flour — quality checks, milling, and distribution.",
    img: "/Home/j1.png",           // <-- use public path
        inlineImg: "/Home/j2.png",           // <-- use public path

    secondImg: "/blog/wheat-hand.jpg",
    content: `
      <p>Wanher Farms works closely with local farmers to ensure the best wheat is procured. We follow strict guidelines for harvest timing and post-harvest handling to preserve quality.</p>
      <p>Our mills use modern equipment to gently grind wheat so nutrients are preserved while achieving consistent particle size.</p>
      <p>Quality assurance teams run tests on moisture, purity and particle size. This ensures consistent baking performance and shelf stability.</p>
    `,
    benefits: [
      "Reduce input costs through targeted application",
      "Improve yields by addressing crop needs at the right time",
      "Save water and energy with optimized irrigation",
      "Minimize environmental impact through responsible resource management",
      "Increase profitability and long-term resilience",
    ],
    whosFor: [
      "Commercial farms looking to scale up sustainably",
      "Smallholder farmers adopting smarter tools",
      "Agri-cooperatives seeking coordination and insights",
      "Organizations aiming for data-backed agricultural transformation",
    ],
    additionalParagraphs: [
      "Our extension teams run training and field trials to demonstrate best practices across crop cycles.",
      "We partner with technology providers to integrate remote sensing and IoT telemetry for actionable field intel.",
    ],
  },

  {
    slug: "benefits-of-chakki-atta",
    title: "Benefits of Chakki Atta",
      heading: "Smarter decisions. Healthier crops. Greater yields.",

    date: "September 14, 2024",
    excerpt:
      "Why stone-ground atta remains the preferred choice for nutrition-conscious households.",
    img: "/Home/j2.png",           // <-- use public path
        inlineImg: "/Home/j4.png",           // <-- use public path

    secondImg: "/blog/atta-bags.jpg",
    content: `
      <p>Chakki atta, produced using traditional stone milling, retains bran and germ which preserves fiber and micronutrients essential for nutrition.</p>
      <p>Stone-ground flour has a distinct texture and flavor that many households prefer for traditional breads and rotis.</p>
    `,
    benefits: [
      "Higher fiber and micronutrient retention",
      "Better texture for traditional flatbreads",
      "Minimal processing helps preserve natural flavors",
    ],
    whosFor: [
      "Households looking for nutritious flour",
      "Bakeries wanting traditional texture",
      "Nutrition-focused supply programs",
    ],
    additionalParagraphs: [
      "We mill in small batches to preserve freshness and avoid overheating the flour.",
    ],
  },

  {
    slug: "sustainability-in-food-sector",
    title: "Sustainability in Pakistan’s Food Sector",
      heading: "Smarter decisions. Healthier crops. Greater yields.",

    date: "September 14, 2024",
    excerpt:
      "How sustainable farming and traceability are reshaping the food supply chain.",
    img: "/Home/j3.png",           // <-- use public path
        inlineImg: "/Home/j1.png",           // <-- use public path

    secondImg: "/blog/sustainability-2.jpg",
    content: `
      <p>Sustainability starts at the farm level: water-smart irrigation, soil health programs and regenerative practices are core to our approach.</p>
      <p>Traceability across procurement and packing gives buyers confidence in origin, handling and quality standards.</p>
    `,
    benefits: [
      "Reduced water use through precision irrigation",
      "Improved soil health and farm resilience",
      "Better market access for farmers through traceability",
    ],
    whosFor: [
      "Exporters and institutional buyers",
      "Grower groups seeking higher-value markets",
      "Policy partners and NGOs",
    ],
    additionalParagraphs: [
      "We document provenance and testing results for each batch to support transparency and compliance.",
    ],
  },

  {
    slug: "procurement-integrity-1",
    title: "How Procurement Integrity Builds Market Trust",
    date: "September 14, 2024",
      heading: "Smarter decisions. Healthier crops. Greater yields.",

    excerpt: "Our procurement practices that promote fairness and traceability.",
    img: "/Home/j4.png",           // <-- use public path
   
       inlineImg: "/Home/j5.png",           // <-- use public path
    secondImg: "/blog/procurement-2.jpg",
    content: `
      <p>Traceability and fair procurement protect both farmer and buyer. Our processes include grading at origin, electronic receipts, and secure payments.</p>
    `,
    benefits: [
      "Fair pricing for growers",
      "Reduced disputes through clear grading",
      "Faster payment cycles",
    ],
    whosFor: [
      "Farmer groups and aggregators",
      "Buyers needing verified supply chains",
    ],
    additionalParagraphs: [
      "We maintain long-term contracts with trusted suppliers and run ongoing audits to keep standards high.",
    ],
  },

  {
    slug: "procurement-integrity-2",
      heading: "Smarter decisions. Healthier crops. Greater yields.",

    title: "How Procurement Integrity Builds Market Trust (Part 2)",
    date: "September 14, 2024",
    excerpt: "Continuation: logistics, storage and standards.",
    img: "/Home/j5.png",           // <-- use public path
        inlineImg: "/Home/j2.png",           // <-- use public path
    secondImg: "/blog/packaging.jpg",
    content: `
      <p>In part two, we cover storage, logistics and consumer-grade packaging that ensures product safety and traceability all the way to the shelf.</p>
    `,
    benefits: [
      "Better warehouse hygiene",
      "Optimized logistics reducing transit time",
      "Packaging that maintains freshness and traceability",
    ],
    whosFor: [
      "Logistics partners",
      "Retail and institutional buyers",
    ],
    additionalParagraphs: [
      "Our cold-chain and humidity control systems help extend shelf life for perishable grains and pulses.",
    ],
  },
];

export default blogData;
