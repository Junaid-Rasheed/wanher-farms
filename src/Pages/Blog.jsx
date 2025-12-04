// src/Pages/Blog.jsx
import React from "react";
import { Link } from "react-router-dom";
import blogData from "../data/blogData";

export default function Blog() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
 
            <section
        className="relative w-full h-[60vh] md:h-[72vh] flex items-center"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* green glass overlay to match the reference */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#053806]/85 via-[#083f08]/55 to-transparent"></div>

        <div className="relative max-w-6xl mx-auto w-full px-6">
          <div className="mt-12 md:mt-20 flex items-start">
            <div className="max-w-2xl">
              <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
            Insights & Updates
              </h1>
              <p className="mt-6 text-white/90 text-sm md:text-base max-w-xl">
                       Our blog shares tips, industry news, and insights about nutrition, food processing, organic diets, and sustainable agriculture.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((b) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              className="group block rounded-2xl overflow-hidden shadow-lg transform hover:scale-[1.01] transition"
            >
              <div className="relative w-full h-[220px] md:h-[260px] bg-gray-100">
                <img
                  src={b.img}
                  alt={b.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <div className="absolute left-6 bottom-6 right-6 text-white">
                  <h3 className="text-lg md:text-xl font-semibold leading-snug">{b.title}</h3>
                  <p className="mt-2 text-xs text-white/80">{b.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>
    </div>
  );
}
