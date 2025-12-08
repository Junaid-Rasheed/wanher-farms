import {
  Sprout,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";
import { CTA } from "../CTA";
import { FAQ } from "../FAQ";
import { Testimonials } from "../Testimonials";
import { Insights } from "../Insights";

export function Footer() {
  return (
    <>
      <Testimonials />
      <Insights />
      <FAQ />
      <CTA />

      <footer className="bg-[#1f6306] text-white">
        <div className="mx-auto px-6 md:px-12 lg:px-24 py-6">
          {/* Top three columns - NOW 3 in a row even on small devices */}
          <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8 mb-8 pb-4 relative text-center">
            {/* LOCATION */}
            <div className="flex flex-col justify-between items-center min-h-[180px]">
              <div className="w-full hidden md:block border-t border-green-700 mb-4" />

              <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-0 mt-2">
                Location
              </h3>

              <p className="text-xs sm:text-sm text-green-100 leading-relaxed text-center self-center mb-2">
                Inc Plot no 11, Wanherfarms pvt ltd,
                <br className="hidden sm:block" />
                Main Rawat industrial Estate.
              </p>

              <div className="w-full hidden md:block border-t border-green-700 mt-4" />
            </div>

            {/* center logo */}
            <div className="flex justify-center items-center">
              <img
                src="/logo2.png"
                alt="Wanher Farms logo"
                className="w-24 md:w-56 h-auto"
              />
            </div>

            {/* CONTACT */}
            <div className="flex flex-col justify-between items-center min-h-[180px]">
              <div className="w-full hidden md:block border-t border-green-700 mb-4" />

              <h3 className="text-xs font-semibold uppercase tracking-widest text-white mt-2">
                Contact
              </h3>

              <div className="text-xs sm:text-sm text-green-100 text-center mb-2 space-y-1">
                <p>
                  051-6104061 <br className="hidden sm:block" />
                  info@wanherfarmspvtltd.com
                </p>
              </div>

              <div className="w-full hidden md:block border-t border-green-700 mt-4" />
            </div>
          </div>

          {/* DISCOVER/CATEGORY + LEGALS/SOCIAL */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-y-8 md:gap-x-32 mb-12 mx-0 md:mx-24">
            {/* LEFT GROUP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 w-full md:w-auto">
              {/* DISCOVER */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-3">
                  Discover
                </h3>
                <ul className="space-y-2 text-sm text-green-100">
                  <li>Home</li>
                  <li>Products</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </div>

              {/* CATEGORY */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-3">
                  Category
                </h3>
                <ul className="space-y-2 text-sm text-green-100">
                  <li>Rice</li>
                  <li>Wheat Flour</li>
                  <li>Eggs & Livestock</li>
                  <li>Pulses & Other Staples</li>
                </ul>
              </div>
            </div>

            {/* RIGHT GROUP */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-6 w-full md:w-auto">
              {/* LEGALS */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-3">
                  Legals
                </h3>
                <ul className="space-y-2 text-sm text-green-100">
                  <li>Privacy Policy</li>
                  <li>Terms and Conditions</li>
                  <li>Certifications & Accreditation</li>
                </ul>
              </div>

              {/* SOCIAL */}
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-white mb-3">
                  Social
                </h3>
                <ul className="space-y-2 text-sm text-green-100">
                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>LinkedIn</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div>
            <img src="/footer.png" className="mb-6" />

            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-green-100 gap-y-2">
              <p>&copy; 2025 Wanher Farms</p>
              <p className="text-center flex-1">All Rights Reserved</p>
              <p>Registered with SECP | Certified by PSQCA & Halal Pakistan</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
