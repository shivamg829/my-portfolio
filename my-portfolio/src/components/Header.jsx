import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    // { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl shadow-lg border-b border-slate-800"
          : "bg-gradient-to-b from-slate-950/80 via-slate-950/40 to-transparent backdrop-blur-md"
      }`}
      role="banner"
    >
      <div className="container mx-auto px-5 py-3">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight">
            <span className="text-indigo-400">Shivam</span>
            <span className="text-slate-100">Gangwar</span>
            <span className="text-indigo-400">.</span>
          </div>

          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-slate-300 hover:text-indigo-400 transition-all duration-300 font-medium relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-indigo-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <button
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/SHIVAM.docx";
              link.download = "SHIVAM.docx";
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="hidden md:flex items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-500 transition-all duration-300 font-medium shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5"
          >
            Download CV
          </button>

          <button
            className="text-slate-100 md:hidden"
            onClick={() => setIsOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-3 pb-4 border-t border-slate-800 pt-3 bg-slate-900/95 rounded-xl shadow-lg">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2.5 px-4 text-slate-200 hover:text-indigo-400 hover:bg-slate-800 transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Shivam_Resume.docx";
                link.download = "Shivam_Resume.docx";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              className="mt-3 w-full flex justify-center items-center gap-2 bg-indigo-600 text-white px-6 py-2.5 rounded-full hover:bg-indigo-500 transition-all duration-200"
            >
              Download CV
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
