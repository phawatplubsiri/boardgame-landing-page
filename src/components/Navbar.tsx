"use client";

import { useState, useEffect } from "react";
import { Menu, X, Dices } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

// เปลี่ยน background เมื่อ scroll ผ่าน threshold

const navLinks = [
  { label: "หน้าแรก", href: "#home" },
  { label: "บอร์ดเกม", href: "#games" },
  { label: "ราคา", href: "#pricing" },
  { label: "ติดต่อเรา", href: "#cta" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-300 ${
        scrolled ? "shadow-md backdrop-blur-md" : ""
      }`}
      style={{
        backgroundColor: scrolled ? "var(--navbar-bg)" : "var(--bg)",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
      }}
    >
      <nav
        aria-label="Main navigation"
        className="max-w-6xl mx-auto px-4 h-full flex items-center justify-between"
      >
        {/* Logo + Brand name */}
        <a href="#home" className="flex items-center gap-2 group">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-110"
            style={{ backgroundColor: "var(--accent)", color: "#fff" }}
          >
            <Dices size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight" style={{ color: "var(--text-primary)" }}>
            DICE & <span style={{ color: "var(--accent)" }}>DELIGHT</span>
          </span>
        </a>

        {/* Desktop nav links + actions */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 hover:opacity-100 opacity-70"
                  style={{ color: "var(--text-primary)" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
            <ThemeToggle />
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors"
            style={{ color: "var(--text-muted)" }}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden backdrop-blur-md border-b px-6 pb-6"
          style={{ backgroundColor: "var(--navbar-bg)", borderColor: "var(--border)" }}
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm font-medium"
                  style={{ color: "var(--text-primary)" }}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
