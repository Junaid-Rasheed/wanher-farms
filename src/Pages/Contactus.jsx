import React from "react";
import {
  Phone,
  Printer,
  Mail,
  MapPin,
  ArrowRight,
  ChevronDown,
  ArrowUpRight,
} from "lucide-react";

// Single-file React component styled with Tailwind CSS
// Usage: place this component in a Next.js / CRA project with Tailwind + lucide-react installed.

export default function Contactus() {
  return (
    <section className="w-full">
      {/* HERO */}

      <section
        className="relative w-full h-[60vh] md:h-[72vh] flex items-center"
        style={{
          backgroundImage: "url('/Blog/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* green glass overlay to match the reference */}

        <div className="relative max-w-6xl mx-auto w-full px-6">
          <div className="mt-12 md:mt-20 flex items-start">
            <div className="max-w-2xl">
              <h1 className="text-white text-5xl md:text-6xl font-extrabold leading-tight">
                Contact Us{" "}
              </h1>
              <p className="mt-6 text-white/90 text-sm md:text-base max-w-xl">
                Wanher Farms Pvt. Ltd. is a vertically integrated procurement,
                production, and distribution company dedicated to supplying
                premium agricultural commodities to local and international
                markets.
              </p>
              <p className="mt-6 text-white/90 text-sm md:text-base max-w-xl">
                Our operations reflect decades of agricultural expertise,
                uncompromising quality standards, and a deep respect for
                Pakistan’s fertile land.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <div className="bg-[#f4f2ef]">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* left column - info */}
          <div className="space-y-6">
            <div className="prose max-w-none text-sm text-gray-700">
              <p>
                Wanher Farms Pvt. Ltd. is a vertically integrated procurement,
                production, and distribution company dedicated to supplying
                premium agricultural commodities to local and international
                markets.
              </p>
              <p>
                Our operations reflect decades of agricultural expertise,
                uncompromising quality standards, and a deep respect for
                Pakistan’s fertile land.
              </p>
            </div>

            <div className="mt-6 space-y-6">
              <ContactRow
                icon={<Phone size={18} />}
                title="051-6104061"
                subtitle="Mobile"
              />
              <div className="border-t" />
              <ContactRow
                icon={<Printer size={18} />}
                title="888-652-7137"
                subtitle="Fax"
              />
              <div className="border-t" />
              <ContactRow
                icon={<Mail size={18} />}
                title="info@wanherfarmspvtltd.com"
                subtitle="Email"
              />
              <div className="border-t" />
              <ContactRow
                icon={<MapPin size={18} />}
                title={`Inc Plot no 11, Wanherfarms pvt ltd, Main Rawat industrial Estate.`}
                subtitle="Mailing Address"
              />
            </div>
          </div>

          {/* right column - form */}
          <div>
            <div className="text-sm text-gray-700 mb-4">
              Fill out the form below and a representative will contact you by
              e-mail or phone within 24 business hours.
            </div>

            <form className="space-y-4">
              <input
                className="w-full rounded-lg bg-[#dfdcd9] border border-transparent py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Name"
                aria-label="Name"
              />

              <input
                className="w-full rounded-lg bg-[#dfdcd9] border border-transparent py-3 px-4 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700"
                placeholder="Email"
                aria-label="Email"
                type="email"
              />

              <div className="relative">
                <select
                  className="appearance-none w-full rounded-lg bg-[#dfdcd9] py-3 px-4 pr-10 border border-transparent focus:outline-none focus:ring-2 focus:ring-green-700"
                  aria-label="How can we help?"
                >
                  <option>How can we help?</option>
                  <option>General inquiry</option>
                  <option>Sales</option>
                  <option>Support</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <ChevronDown size={16} />
                </div>
              </div>

              <textarea
                className="w-full rounded-lg bg-[#dfdcd9] border border-transparent py-4 px-4 h-36 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-700 resize-none"
                placeholder="Type your message here..."
                aria-label="Message"
              />

              <div className="mt-2 flex justify-end">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-[#1f6306] hover:bg-green-800 text-white font-medium rounded-full px-6 py-3 shadow-md"
                >
                  Book Free Consultation<ArrowRight size={16} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({ icon, title, subtitle }) {
  return (
    <div className="flex items-start gap-4 py-0">
      <div className="p-2 rounded-md  flex items-center justify-center">
        <div className="text-green-700">{icon}</div>
      </div>
      <div className="flex-1">
        <div className="font-medium text-sm text-gray-800">{title}</div>
        <div className="text-xs text-gray-500 mt-1">{subtitle}</div>
      </div>
      <div className="ml-3 flex items-center text-gray-800">
        <ArrowUpRight size={16} />
      </div>
    </div>
  );
}
