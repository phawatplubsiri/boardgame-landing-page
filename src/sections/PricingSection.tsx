"use client";

import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Button from "@/ui/Button";

// PricingSection: 3 plan สำหรับร้านบอร์ดเกมขนาดต่างๆ

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "มาเล่นขำๆ",
    price: "฿50",
    description: "เหมาะสำหรับแวะมาเล่นเกมสั้นๆ หรือพักผ่อน",
    features: [
      "ค่าบริการต่อชั่วโมง",
      "เล่นได้ทุกเกมในร้าน",
      "Game Master ช่วยสอน",
      "ฟรี Wi-Fi และปลั๊กไฟ",
    ],
    cta: "ดูรายละเอียด",
    highlighted: false,
  },
  {
    name: "เหมาทั้งวัน",
    price: "฿150",
    description: "เล่นยาวๆ ได้ตั้งแต่ร้านเปิดยันปิด คุ้มที่สุด!",
    features: [
      "ไม่จำกัดชั่วโมงการเล่น",
      "เล่นได้ทุกเกมในร้าน",
      "เปลี่ยนเกมได้ไม่จำกัด",
      "ฟรีเครื่องดื่ม 1 แก้ว (Basic)",
      "Game Master ดูแลใกล้ชิด",
    ],
    cta: "จองโต๊ะเลย",
    highlighted: true,
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="py-24"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            เลือกเวลาสนุกได้ตามใจคุณ
          </h2>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            ราคาโปร่งใส สนุกได้เต็มที่ไม่มีค่าธรรมเนียมแฝง
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10, 
                transition: { duration: 0.2 } 
              }}
              className="relative p-8 rounded-2xl transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-card)",
                border: plan.highlighted
                  ? "2px solid var(--accent)"
                  : "1px solid var(--border)",
                boxShadow: plan.highlighted
                  ? "0 20px 60px var(--shadow)"
                  : "0 2px 12px rgba(0,0,0,0.05)",
              }}
            >
              <h3
                className="font-bold text-xl mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                {plan.name}
              </h3>
              <p
                className="text-sm mb-5"
                style={{ color: "var(--text-muted)" }}
              >
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span
                  className="text-4xl font-bold"
                  style={{ color: "var(--text-primary)" }}
                >
                  {plan.price}
                </span>
                <span
                  className="text-sm ml-1"
                  style={{ color: "var(--text-muted)" }}
                >
                  {plan.name === "มาเล่นขำๆ" ? "/ชม." : plan.name === "เหมาทั้งวัน" ? "/วัน" : "/เดือน"}
                </span>
              </div>

              {/* Feature list */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm"
                    style={{ color: "var(--text-muted)" }}
                  >
                    <Check
                      size={15}
                      className="shrink-0"
                      style={{ color: "var(--accent-green)" }}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "primary" : "outline"}
                className="w-full justify-center group"
              >
                {plan.cta}
                <ArrowRight size={14} className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
