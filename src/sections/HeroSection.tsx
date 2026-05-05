"use client";

import Image from "next/image";
import { ArrowRight, Sparkles, Users } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/ui/Button";

// HeroSection: DICE & DELIGHT Board Game Cafe landing hero
// รูป hero + social proof + CTA

const HeroSection = () => {
  const [heroError, setHeroError] = useState(false);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Dynamic background blobs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse, var(--accent) 0%, transparent 70%)" }}
      />
      <motion.div
        animate={{
          x: [0, 50, 0],
          y: [0, -30, 0],
          opacity: [0.05, 0.15, 0.05],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-10 right-10 w-64 h-64 rounded-full blur-3xl pointer-events-none"
        style={{ background: "var(--accent-green)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight mb-6"
          style={{ color: "var(--text-primary)" }}
        >
          มาสนุกกับพวกเราด้วย
          <br/>
          <motion.span 
            animate={{ color: ["var(--accent)", "var(--accent-green)", "var(--accent)"] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ color: "var(--accent)" }}
          >
            บอร์ดเกม
          </motion.span>
          
          <span> ที่ </span>
          
          <motion.span 
            animate={{ color: ["var(--accent-green)", "var(--accent)", "var(--accent-green)"] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{ color: "var(--accent-green)" }}
          >
            DICE & DELIGHT
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          style={{ color: "var(--text-muted)" }}
        >
          จะมากับแก๊งเพื่อน มาเดท หรือมาหาเพื่อนใหม่ ก็สนุกได้ไม่จำกัดกับบอร์ดเกมกว่า 500 เกม
          พร้อมพี่ Game Master ที่พร้อมสอนทุกขั้นตอน
        </motion.p>

        {/* CTA buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <Button variant="primary" className="text-base px-8 py-3.5">
            ดูพิกัดร้าน
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto"
          style={{
            maxWidth: 880,
            border: "1px solid var(--border)",
            boxShadow: "0 32px 80px -12px var(--shadow)",
          }}
        >
          {/* Inner frame glow */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none z-10"
            style={{ boxShadow: "inset 0 0 0 1px var(--border)" }}
          />

          {heroError ? (
            <div
              className="w-full flex items-center justify-center"
              style={{ height: 420, backgroundColor: "var(--bg-surface)" }}
            >
              <div className="text-center" style={{ color: "var(--text-muted)" }}>
                <Sparkles size={48} className="mx-auto mb-3 opacity-30" />
                <p className="text-sm">ภาพบรรยากาศในร้าน</p>
              </div>
            </div>
          ) : (
            <Image
              src="/hero.png"
              alt="DICE & DELIGHT — บรรยากาศร้านบอร์ดเกมที่อบอุ่นและเป็นกันเอง"
              width={880}
              height={520}
              className="w-full object-cover"
              priority
              onError={() => setHeroError(true)}
            />
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
