import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "RECEITAS GRÁTIS", href: "/" },
    { name: "CREMOSO FORMIGUEIRO", href: "/receita/cremoso-formigueiro" },
    { name: "ABACAXI DOÇURA", href: "/receita/abacaxi-docura" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-[#2f1c0c]/95 shadow-lg py-2 border-b border-[#944300]" : "bg-[#2f1c0c] py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link href="/">
          <a className="text-xl md:text-2xl font-bold text-[#ff7300] tracking-wider hover:text-white transition-colors uppercase">
            BOLOS DE POTE
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <a
                className={cn(
                  "text-sm font-bold tracking-widest hover:text-[#ff7300] transition-colors uppercase",
                  location === link.href ? "text-[#ff7300]" : "text-[#e3c093]"
                )}
              >
                {link.name}
              </a>
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#e3c093] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-[#2f1c0c] border-b border-[#944300] p-4 md:hidden flex flex-col gap-4 shadow-xl">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={cn(
                    "text-sm font-bold tracking-widest py-2 border-b border-[#4a2c13] uppercase",
                    location === link.href ? "text-[#ff7300]" : "text-[#e3c093]"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
