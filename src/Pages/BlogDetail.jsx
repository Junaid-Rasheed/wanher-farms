// src/Pages/BlogDetail.jsx
import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import blogData from "../data/blogData";

export default function BlogDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const idx = blogData.findIndex((p) => p.slug === slug);
  const post = blogData[idx];

  // If no post found, show fallback
  if (!post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold">Post not found</h2>
          <Link
            to="/blog"
            className="mt-4 inline-flex items-center px-4 py-2 bg-emerald-600 text-white rounded-full"
          >
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  // compute previous/next indices (wrap around)
  const prevIdx = (idx - 1 + blogData.length) % blogData.length;
  const nextIdx = (idx + 1) % blogData.length;

  const handlePrev = () => navigate(`/blog/${blogData[prevIdx].slug}`);
  const handleNext = () => navigate(`/blog/${blogData[nextIdx].slug}`);

  // sidebar items: all posts except current
  const sidebarItems = blogData.filter((p) => p.slug !== post.slug);

  return (
    <article className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header
        className="relative w-full h-[42vh] md:h-[50vh] lg:h-[60vh] flex items-end pb-16"
        style={{
          backgroundImage: `url('${post.img}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#073806]/92 via-[#0b3f0b]/45 to-transparent"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <p className="text-sm text-white/90 mb-2">{post.date}</p>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-extrabold max-w-3xl leading-tight">
            {post.title}
          </h1>
        </div>
      </header>

      {/* MAIN GRID */}
      <main className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* MAIN ARTICLE */}
        <div className="lg:col-span-2">
      {/* Dynamic Top Heading */}
{post.heading && (
  <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6 text-gray-900">
    {post.heading}
  </h2>
)}


          <div
            className="space-y-6 text-gray-700 text-[15px] leading-relaxed"
            // if your blog content is HTML stored in post.content, use dangerouslySetInnerHTML
            // otherwise, render markdown or plain text here
          >
            {/* If post.content is HTML string */}
            {post.content ? (
              <div
                className="prose max-w-none text-gray-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <>
                <p>
                  Our Precision Farming solution empowers growers to monitor, plan,
                  and act with pinpoint accuracy, leading to improved productivity,
                  resource efficiency, and long-term sustainability.
                </p>

                <p>
                  Precision farming is at the heart of the agricultural transformation we're driving.
                  By combining technology, data, and deep agronomic insight, we help farmers manage
                  their fields at a micro level — making every seed, drop of water, and hour of labor
                  more effective than ever before.
                </p>
              </>
            )}
          </div>

          {/* inline image */}
          <div className="mt-10 rounded-xl overflow-hidden">
            <img
              src={post.inlineImg || "/blog/irrigation.jpg"}
              className="w-full h-auto object-cover"
              alt="article inline"
            />
          </div>

          {/* Benefits & Who it's for — if your post provides these, render them; otherwise use placeholders */}
          {post.benefits ? (
            <>
              <h3 className="text-2xl font-bold mt-14 mb-4">Benefits:</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1 text-[15px]">
                {post.benefits.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </>
          ) : null}

          {post.additionalParagraphs && (
            <div className="mt-8 space-y-6 text-gray-700 text-[15px] leading-relaxed">
              {post.additionalParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          )}

          <div className="mt-10 rounded-xl overflow-hidden">
            <img
              src={post.secondImg || "/blog/wheat-hand.jpg"}
              className="w-full h-auto object-cover"
              alt="article second"
            />
          </div>

          {post.whosFor ? (
            <>
              <h3 className="text-2xl font-bold mt-14 mb-4">Who it's for:</h3>
              <ul className="list-disc ml-5 text-gray-700 space-y-1 text-[15px]">
                {post.whosFor.map((w, i) => (
                  <li key={i}>{w}</li>
                ))}
              </ul>
            </>
          ) : null}

          {/* Prev / Next */}
          <div className="mt-16 flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-full text-sm"
              aria-label="Previous post"
            >
              ← Previous
            </button>

            <button
              onClick={handleNext}
              className="flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white rounded-full text-sm"
              aria-label="Next post"
            >
              Next →
            </button>
          </div>
        </div>

        {/* SIDEBAR */}
        <aside className="lg:col-span-1 space-y-6">
          <h3 className="text-xl font-semibold">What else do we offer?</h3>

          {sidebarItems.map((item) => {
            const isCurrent = item.slug === slug;
            return (
              <Link
                key={item.slug}
                to={`/blog/${item.slug}`}
                className={`flex gap-4 p-4 rounded-xl border ${
                  isCurrent ? "border-emerald-600 shadow-md" : "border-gray-100"
                } hover:shadow-lg transition`}
                aria-current={isCurrent ? "page" : undefined}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 rounded-lg object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-[14px] font-semibold leading-snug text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.excerpt || "Read more about this topic."}
                  </p>
                </div>
              </Link>
            );
          })}
        </aside>
      </main>
    </article>
  );
}
