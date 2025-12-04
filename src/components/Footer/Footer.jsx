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
        <div className=" mx-auto px-6 md:px-12 lg:px-24 pt-16 pb-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16 pb-16 border-b border-green-700">
            {/* LOCATION - updated to match image 1 (heading top center, address bottom center) */}
            <div className="flex flex-col justify-between items-center min-h-[220px]">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-0 mt-2">
                Location
              </h3>

              {/* spacer will push the address to the bottom due to justify-between */}
              <p className="text-sm text-green-100 leading-relaxed text-center self-center mb-2">
                Inc Plot no 11, Wanherfarms pvt ltd,
                <br />
                Main Rawat industrial Estate.
              </p>
            </div>

            <div className="flex justify-center">
              <img src="/logo2.png" className="w-56 h-56" />
            </div>

            <div className="flex flex-col justify-between items-center min-h-[220px]">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mt-2">
                Contact
              </h3>

              <div className="text-sm text-green-100 text-center mb-2 space-y-1">
                <p>051-6104061</p>
                <p>info@wanherfarmspvtltd.com</p>
              </div>
            </div>
          </div>

         {/* FINAL — EXACT IMAGE-1 LAYOUT */}
<div className="grid grid-cols-4 gap-x-20 mb-12">

  {/* DISCOVER */}
  <div>
    <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-3">
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
    <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-3">
      Category
    </h3>
    <ul className="space-y-2 text-sm text-green-100">
      <li>Rice</li>
      <li>Wheat Flour</li>
      <li>Eggs & Livestock</li>
      <li>Pulses & Other Staples</li>
    </ul>
  </div>

  {/* LEGALS */}
  <div>
    <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-3">
      Legals
    </h3>
    <ul className="space-y-2 text-sm text-green-100">
      <li>Privacy Policy</li>
      <li>Terms and Conditions</li>
      <li>Certifications & Accreditation</li>
    </ul>
  </div>

  {/* SOCIALS */}
    <div>
    <h3 className="text-xs font-semibold uppercase tracking-widest text-green-100 mb-3">
      Social
    </h3>
    <ul className="space-y-2 text-sm text-green-100">
      <li>Privacy Policy</li>
      <li>Terms and Conditions</li>
      <li>Certifications & Accreditation</li>
    </ul>
  </div>

</div>

          <div className="border-t border-green-700 pt-8">
            <div className="mb-6 flex justify-center w-full">
              <h2
                className="font-extrabold tracking-tight text-white text-center"
                style={{
                  fontSize: "clamp(4rem, 15vw, 14rem)", // Bigger than before
                  lineHeight: 0.85,
                  letterSpacing: "-0.015em",
                }}
              >
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
