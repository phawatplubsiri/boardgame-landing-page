import Navbar from "@/components/Navbar";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";
import PricingSection from "@/sections/PricingSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CTASection from "@/sections/CTASection";
import Footer from "@/components/Footer";

// page.tsx: ทำหน้าที่เป็น "orchestrator" — ประกอบ sections ต่างๆ เข้าด้วยกัน
// ไม่ควรมี logic หรือ style ใดๆ ที่นี่ ให้ section แต่ละไฟล์ดูแลตัวเอง

export default function Home() {
  return (
    <>
      {/* Navbar อยู่นอก main เพราะ position: fixed */}
      <Navbar />

      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </>
  );
}
