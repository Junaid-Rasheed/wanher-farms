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

      <footer className="bg-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-green-700">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-6">
                Location
              </h3>
              <p className="text-sm text-green-100 leading-relaxed">
                Inc Plot no 11, Wanherfarms pvt ltd,
                <br />
                Main Rawat industrial Estate.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="w-32 h-32 border-2 border-white rounded-full flex items-center justify-center">
                <div className="text-center">
                  <Sprout className="w-12 h-12 text-green-200 mx-auto mb-2" />
                  <p className="text-xs font-bold">WANHER FARMS</p>
                  <p className="text-xs text-green-200">Est. 2021</p>
                </div>
              </div>
            </div>

            <div className="text-right">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-6">
                Contact
              </h3>
              <div className="space-y-3 text-sm text-green-100">
                <div className="flex items-center justify-end gap-2">
                  <Phone className="w-4 h-4" />
                  <a
                    href="tel:051-6104061"
                    className="hover:text-white transition-colors"
                  >
                    051-6104061
                  </a>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:info@wanherfarmspvltd.com"
                    className="hover:text-white transition-colors"
                  >
                    info@wanherfarmspvltd.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-4">
                Discover
              </h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-4">
                Category
              </h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Rice
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Wheat Flour
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Eggs & Livestock
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pulses & Other Staples
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-4">
                Legals
              </h3>
              <ul className="space-y-2 text-sm text-green-100">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms and Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Certifications & Accreditation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-4">
                Socials
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-green-700 pt-8">
            <div className="mb-6">
              <h2 className="text-5xl md:text-6xl font-bold text-white tracking-wider">
                WANHER FARMS
              </h2>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-green-100">
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
