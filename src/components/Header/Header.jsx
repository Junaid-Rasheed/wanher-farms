import { Menu, X, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
  
export default function Header() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 backdrop-blur-xl rounded-b-lg">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a href='/'>
          <img src="/logo3.png" alt="logo" className="h-16 w-16 object-contain" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav
          className={`hidden md:flex items-center gap-8 font-semibold transition-colors duration-300 ${isScrolled ? "text-green-600" : "text-white"}`}
        >
          <a href="/" className="hover:text-yellow-500">Home</a>
          <a href="/product" className="hover:text-yellow-500">Products</a>
          <a href="/about" className="hover:text-yellow-500">About us</a>
          <a href="/blogs" className="hover:text-yellow-500">Blogs</a>
        </nav>

        {/* Button */}
        <a
          href="#"
          className="hidden md:flex bg-[#1f6306] items-center hover:bg-green-800 text-white px-5 py-2 rounded-full"
        >
          Book a call now <ArrowRight className="ml-2 mt-1" size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          <Menu />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">
          {/* Solid green panel */}
          <div className="bg-[#11520b] h-full w-full text-white flex flex-col">
            {/* Top area with logo + close */}
            <div className="flex items-center justify-between px-6 pt-6">
              <div className="flex items-center gap-2">
                <img src="/logo3.png" alt="logo" className="h-16 w-16 object-contain rounded-full  p-1" />
              </div>

              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Menu label */}
            <div className="px-6 mt-2">
              <span className="text-sm opacity-80">Menu</span>
            </div>

            {/* Menu items container */}
            <nav className="px-6 mt-4">
              <ul className="space-y-4">
                <li className="pb-4 border-b border-green-700">
                  <a href="/" className="text-2xl font-semibold block">Home</a>
                </li>
                <li className="pb-4 border-b border-green-700">
                  <a href="/product" className="text-2xl font-semibold block">Products</a>
                </li>
                <li className="pb-4 border-b border-green-700">
                  <a href="/about" className="text-2xl font-semibold block">About Us</a>
                </li>
                <li className="pb-4 border-b border-green-700">
                  <a href="/blogs" className="text-2xl font-semibold block">Blogs</a>
                </li>

                {/* CTA — yellow outline pill */}
                <li className="pt-6">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-yellow-400 text-yellow-300 font-semibold w-full "
                  >
                    Book a call
                    <ArrowRight className="ml-3" size={16} />
                  </a>
                </li>
              </ul>
            </nav>

            {/* Contact & Social pinned to bottom — exact styling like screenshot */}
            <div className="px-6 pb-10 mt-auto">
              <div className="leading-snug">
                {/* Contact label (small) */}
                <div className="text-base font-medium mb-2">Contact</div>

                {/* Very large email line */}
                <a
                  href="mailto:info@wanherfarmspvtltd.com"
                  className="block text-xl sm:text-2xl font-light mb-6 break-words"
                >
                  info@wanherfarmspvtltd.com
                </a>

                {/* Social Media label */}
                <div className="text-base font-medium mb-3">Social Media</div>

                {/* Large social links stacked */}
                <div className="flex flex-col gap-3">
                  <a href="#" className="text-2xl sm:text-3xl font-light">Instagram</a>
                  <a href="#" className="text-2xl sm:text-3xl font-light">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
