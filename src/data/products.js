// src/data/products.js

const products = [
  {
    slug: "chakki-atta",
    title: "Jawahir Khalis Chakki Atta",
    desc: "Is made from the most fertile and organically sourced pure wheat grains. It is processed in modern, hygienic grinding units to preserve its natural fiber.",
    category: "Flour",
    images: [
      "/Product/pd.png",
      "/Product/p1.png",
      "/Product/p3.png",
      "/test/e4.jpeg"
    ],
    cardImage: "/Home/p5.png",
    nutrition: {
      per100g: [
        "Carbohydrates: ~72–75 g",
        "Protein: ~12–13 g",
        "Fat: ~1.5–2.5 g",
        "Dietary Fiber: ~10–12 g",
        "Energy: ~340 kcal",
      ],
      perRoti: [
        "Carbohydrates: ~22–23 g",
        "Protein: ~3.5–4 g",
        "Fat: ~0.5–0.7 g",
        "Fiber: ~3–4 g",
        "Energy: ~100–105 kcal",
      ],
    },
  },

  {
    slug: "grade-a-eggs",
    title: "Jawahir Eggs",
    desc: "Jawahir Grade A Eggs are produced from the most trusted and reliable bird breeds, raised on high-quality, nutritionally balanced feed.",
    category: "Eggs",
    images: ["/test/e1.jpeg", "/test/e2.jpeg", "/test/e3.jpeg","/test/e6.jpeg"],
    cardImage: "/Home/p6.png",
    nutrition: {
      per100g: [
        "Protein: ~13 g",
        "Fat: ~11 g",
        "Carbohydrates: ~1 g",
        "Cholesterol: ~370 mg",
        "Energy: ~155 kcal",
      ],
    },
  },

  {
    slug: "kainat-rice",
    title: "Jawahir Kainat Basmati Rice",
    desc: "Jawahir Kainat Basmati Rice is a premium long-grain basmati variety known for its extra-long length, aromatic fragrance, and fluffy texture after cooking.",
    category: "Rice",
    images: ["/Product/rice.jpeg",  "/test/e6.jpeg"],
    cardImage: "/Home/p7.png",
    nutrition: {
      per100g: [
        "Carbohydrates: ~77 g",
        "Protein: ~7.5 g",
        "Fat: ~0.7 g",
        "Dietary Fiber: ~1 g",
        "Energy: ~360 kcal",
      ],
    },
  },

  {
    slug: "wanher-meat",
    title: "Wanher Meat",
    desc: "Premium-quality meat products handled under strict hygiene standards to ensure freshness, safety, and superior taste.",
    category: "Meat",
    images: ["/test/e6.jpeg"],
    cardImage: "/Home/p8.png",
    nutrition: {
      per100g: [
        "Protein: ~26 g",
        "Fat: ~15 g",
        "Iron: ~2.6 mg",
        "Cholesterol: ~90 mg",
        "Energy: ~250 kcal",
      ],
    },
  },
];

export default products;
