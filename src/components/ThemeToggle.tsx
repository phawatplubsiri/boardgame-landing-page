"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

// ThemeToggle: toggles .dark class on <html> and persists to localStorage
// Must be "use client" because it reads/writes DOM and localStorage

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  // Read saved preference on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldBeDark = saved === "dark" || (!saved && prefersDark);
    setIsDark(shouldBeDark);
    document.documentElement.classList.toggle("dark", shouldBeDark);
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "เปลี่ยนเป็น Light Mode" : "เปลี่ยนเป็น Dark Mode"}
      className="w-9 h-9 rounded-full flex items-center justify-center border cursor-pointer"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--bg-surface)",
        color: "var(--text-muted)",
      }}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};

export default ThemeToggle;
