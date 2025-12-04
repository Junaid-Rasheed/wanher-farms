import { Menu,ArrowRight } from "lucide-react";
import { useState ,useEffect} from "react";

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
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4 backdrop-blur-md rounded-xl">
        
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="h-12 w-12 object-contain"
          />
        </div>

        {/* Desktop Menu */}
         <nav
      className={`hidden md:flex items-center gap-8 font-semibold transition-colors duration-300 
      ${isScrolled ? "text-[#1f6306]" : "text-white"}`}
    >
      <a href="/" className="hover:text-green-300">Home</a>
      <a href="/product" className="hover:text-green-300">Products</a>
      <a href="/about" className="hover:text-green-300">About us</a>
      <a href="/blogs" className="hover:text-green-300">Blogs</a>
    </nav>

        {/* Button */}
        <a
          href="#"
          className="hidden md:flex bg-[#1f6306] items-center hover:bg-green-800 text-white px-5 py-2 rounded-full"
        >
          Book a call now  <ArrowRight className="ml-2 mt-1" size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          <Menu />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/60 backdrop-blur-lg text-white px-6 py-4 space-y-4">
          <a href="/" className="block">Home</a>
          <a href="/products" className="block">Products</a>
          <a href="/about" className="block">About us</a>
          <a href="/blogs" className="block">Blogs</a>
          <a
            href="#"
            className="inline-block bg-green-700 hover:bg-green-800 text-white px-5 py-2 rounded-full"
          >
            Book a call now →
          </a>
        </div>
      )}
    </header>
  );
}
