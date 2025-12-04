import React from "react";
import HeroSection from "../components/Home/HeroSection";
import IntroSection from "../components/Home/IntroSection";
import ProductsSection from "../components/Home/ProductsSection";
import ProcessSection from "../components/Home/ProcessSection";
import QualitySection from "../components/Home/QualitySection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <IntroSection />
      <ProductsSection />
      <ProcessSection />
      <QualitySection />
    </div>
  );
}
