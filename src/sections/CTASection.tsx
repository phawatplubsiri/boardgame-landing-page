"use client";

import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/ui/Button";

// CTASection: bottom-of-page call-to-action

const CTASection = () => {
  return (
    <section
      id="cta"
      className="py-24"
      style={{ backgroundColor: "var(--bg)" }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden p-14"
          style={{
            background:
              "linear-gradient(135deg, color-mix(in srgb, var(--accent) 15%, var(--bg-surface)) 0%, var(--bg-surface) 60%, color-mix(in srgb, var(--accent-green) 10%, var(--bg-surface)) 100%)",
            border: "1px solid var(--border)",
          }}
        >
          {/* Decorative blob */}
          <div
            className="absolute -top-16 -right-16 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
            style={{ backgroundColor: "var(--accent)" }}
          />
          <div
            className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none"
            style={{ backgroundColor: "var(--accent-green)" }}
          />

          <div className="relative z-10">
            {/* Icon */}
            <motion.div
              animate={{ 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ backgroundColor: "var(--accent)", color: "#fff" }}
            >
              <Clock size={28} />
            </motion.div>

            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              style={{ color: "var(--text-primary)" }}
            >
              แล้วมาเจอกับพวกเราที่ร้านนะ!
            </h2>
            <p
              className="text-lg mb-8 max-w-xl mx-auto leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              แวะมาสร้างความทรงจำดีๆ ผ่านบอร์ดเกมด้วยกัน<br />
              เปิดให้บริการทุกวัน 11:00 - 22:00 น.<br />
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                className="text-base px-8 py-3.5 group">
                สอบถามเพิ่มเติม
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Features check list */}
            <div
              className="flex flex-wrap items-center justify-center gap-6 mt-10 text-xs"
              style={{ color: "var(--text-muted)" }}
            >
              {["มีบอร์ดเกมถึง 500+", "GM ช่วยสอนฟรี", "เครื่องดื่มหลากหลาย", "ที่นั่งสบาย"].map(
                (t, i) => (
                  <motion.span 
                    key={t} 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-1.5"
                  >
                    <span
                      className="w-4 h-4 rounded-full flex items-center justify-center text-white text-[10px] font-bold"
                      style={{ backgroundColor: "var(--accent-green)" }}
                    >
                      ✓
                    </span>
                    {t}
                  </motion.span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
