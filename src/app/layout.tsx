import type { Metadata } from "next";
import { Mitr } from "next/font/google";
import "./globals.css";

// Mitr is a non-variable font — weight must be specified explicitly.
// Subsets: thai + latin เพื่อรองรับทั้งภาษาไทยและอังกฤษ
const mitr = Mitr({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["thai", "latin"],
  variable: "--font-mitr",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "DICE & DELIGHT — อาณาจักรบอร์ดเกมใจกลางเมือง",
    template: "%s | DICE & DELIGHT",
  },
  description:
    "ปลดปล่อยความสนุกในโลกของบอร์ดเกมที่ DICE & DELIGHT มีเกมให้เลือกกว่า 500 เกม พร้อมเครื่องดื่มและอาหารอร่อยๆ ในบรรยากาศอบอุ่น",
  keywords: ["บอร์ดเกม", "board game cafe", "คาเฟ่บอร์ดเกม", "ที่เที่ยวสยาม", "DICE & DELIGHT"],
  authors: [{ name: "DICE & DELIGHT Team" }],
  icons: {
    icon: "/dice-ora-logo.png",
    shortcut: "/dice-ora-logo.png",
    apple: "/dice-ora-logo.png",
  },
  openGraph: {
    title: "DICE & DELIGHT — อาณาจักรบอร์ดเกมใจกลางเมือง",
    description:
      "ปลดปล่อยความสนุกในโลกของบอร์ดเกมกว่า 500 เกม พร้อม GM ช่วยสอนทุกขั้นตอน",
    url: "https://diceanddelight.com",
    siteName: "DICE & DELIGHT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DICE & DELIGHT — อาณาจักรบอร์ดเกมใจกลางเมือง",
    description: "สนุกไม่จำกัดกับบอร์ดเกมกว่า 500 เกม พร้อมอาหารเครื่องดื่มครบครัน",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning: needed for dark mode class toggled by client JS
    <html
      lang="th"
      className={`${mitr.variable} antialiased`}
      suppressHydrationWarning
    >
      <body>{children}</body>
    </html>
  );
}
