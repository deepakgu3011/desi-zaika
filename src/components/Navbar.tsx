import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scroll
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "auto";
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#331a12]/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2">
          <img
            src="/desi-zaika-logo.png"
            alt="Desi Zaika Logo"
            className="h-10 md:h-12 w-auto"
          />
          <span className="font-serif text-xl md:text-2xl font-bold text-[#fcf9f2]">
            Desi Zaika
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {["home", "menu", "about", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm lg:text-base font-medium text-[#fcf9f2] hover:text-[#ffb700] transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a href="https://zomato.onelink.me/xqzv/4reonjb3" target="_blank">
            <Button className="bg-[#E23744] hover:bg-[#c22d38] text-white rounded-full px-5">
              Order Now
            </Button>
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className={`md:hidden fixed top-5 right-5 z-[100] p-2 rounded-full bg-black/30 backdrop-blur ${
            mobileMenuOpen ? "text-[#ffb700]" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen z-40 bg-[#331a12] flex flex-col items-center justify-center gap-6 transform transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {["home", "menu", "about", "contact"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="text-xl text-white"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item.toUpperCase()}
          </a>
        ))}

        <a
          href="https://zomato.onelink.me/xqzv/4reonjb3"
          target="_blank"
          onClick={() => setMobileMenuOpen(false)}
        >
          <Button className="bg-[#E23744] text-white px-8 py-5 rounded-full text-lg">
            Order on Zomato
          </Button>
        </a>
      </div>
    </nav>
  );
}