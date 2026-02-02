import {
  Phone,
  MapPin,
} from "lucide-react";
import { CTA } from "../CTA";
import { FAQ } from "../FAQ";
import { Testimonials } from "../Testimonials";
import { Insights } from "../Insights";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <>
      <Testimonials />
      <Insights />
      <FAQ />
      <CTA />

  <footer className="bg-[#1f6306] text-white">
      <div className="mx-auto px-6 md:px-12 lg:px-24 py-6">

        {/* =========================
            MOBILE TOP SECTION
        ========================= */}
        <div className="md:hidden mb-8 pb-4">
          <div className="flex justify-center items-center mb-6">
            <img src="/logo2.png" alt="Wanher Farms logo" className="w-32 h-auto" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Location */}
            <div className="bg-[#166014] rounded-lg p-4 border border-green-800/40">
              <div className="flex items-start gap-2">
                <MapPin size={18} />
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide">
                    Location
                  </h4>
                  <p className="mt-1 text-xs leading-5 text-green-100">
                    Inc Plot no 11, Wanherfarms pvt ltd,<br />
                    Main Rawat industrial Estate.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact */}
            <div className="bg-[#166014] rounded-lg p-4 border border-green-800/40">
              <div className="flex items-start gap-2">
                <Phone size={18} />
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wide">
                    Contact
                  </h4>
                  <p className="mt-1 text-xs text-green-100">
                    <a href="tel:0516104061" className="block hover:underline">
                      051-6104061
                    </a>
                    <a
                      href="mailto:info@wanherfarmspvtltd.com"
                      className="block break-words hover:underline"
                    >
                      info@wanherfarmspvtltd.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================
            DESKTOP TOP SECTION
        ========================= */}
        <div className="hidden md:grid grid-cols-3 gap-8 mb-8 pb-4 text-center">
          {/* Location */}
          <div className="flex flex-col justify-between items-center min-h-[180px]">
            <div className="w-full border-t border-green-700 mb-4" />
            <h3 className="text-xs font-semibold uppercase tracking-widest">
              Location
            </h3>
            <p className="text-sm text-green-100 leading-relaxed">
              Inc Plot no 11, Wanherfarms pvt ltd,<br />
              Main Rawat industrial Estate.
            </p>
            <div className="w-full border-t border-green-700 mt-4" />
          </div>

          {/* Logo */}
          <div className="flex justify-center items-center">
            <img src="/logo2.png" alt="Wanher Farms logo" className="w-56" />
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-between items-center min-h-[180px]">
            <div className="w-full border-t border-green-700 mb-4" />
            <h3 className="text-xs font-semibold uppercase tracking-widest">
              Contact
            </h3>
            <p className="text-sm text-green-100">
              <a href="tel:0516104061" className="hover:underline">
                051-6104061
              </a>
              <br />
              <a
                href="mailto:info@wanherfarmspvtltd.com"
                className="hover:underline"
              >
                info@wanherfarmspvtltd.com
              </a>
            </p>
            <div className="w-full border-t border-green-700 mt-4" />
          </div>
        </div>

        {/* =========================
            LINKS SECTION
        ========================= */}
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-12 md:px-24">
          {/* Discover */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3">
              Discover
            </h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/product" className="hover:underline">Products</a></li>
              <li><a href="/about" className="hover:underline">About</a></li>
              <li><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Category */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3">
              Category
            </h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li><a href="/product/chakki-atta">Flour</a></li>
              <li><a href="/product/kainat-rice">Rice</a></li>
              <li><a href="/product/grade-a-eggs">Eggs</a></li>
              <li><a href="/product/wanher-meat">Meat</a></li>
            </ul>
          </div>

          {/* Legals */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3">
              Legals
            </h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
              <li><a href="/certifications">Certifications & Accreditation</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest mb-3">
              Social
            </h3>
            <ul className="space-y-2 text-sm text-green-100">
              <li><a href="https://www.instagram.com/wanherfarms.pvtltd/" target="_blank">Instagram</a></li>
              {/* <li><a href="https://facebook.com" target="_blank">Facebook</a></li>
              <li><a href="https://linkedin.com" target="_blank">LinkedIn</a></li> */}
            </ul>
          </div>
        </div>

        {/* =========================
            BOTTOM BAR
        ========================= */}
        <div>
          <img src="/footer.png" className="mb-6 w-full" alt="" />

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-green-100 gap-2">
            <p>© 2025 Wanher Farms</p>
            <p>All Rights Reserved</p>
            <p>Registered with SECP | Certified by PSQCA & Halal Pakistan</p>
          </div>
        </div>

      </div>
    </footer>

    </>
  );
}
