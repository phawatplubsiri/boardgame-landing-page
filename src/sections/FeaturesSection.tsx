"use client";

import { Gamepad2, Users, Coffee, Sofa, Trophy, PartyPopper } from "lucide-react";
import { motion } from "framer-motion";

// FeaturesSection: Highlights of DICE & DELIGHT Board Game Cafe

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Gamepad2 size={22} />,
    title: "บอร์ดเกมกว่า 500 เกม",
    description:
      "ตั้งแต่เกมง่ายๆ สำหรับครอบครัว ไปจนถึงเกมวางแผนระดับเซียน เรามีให้เลือกเล่นไม่ซ้ำแบบ",
  },
  {
    icon: <Users size={22} />,
    title: "Game Master พร้อมสอน",
    description:
      "ไม่ต้องกังวลถ้าเล่นไม่เป็น เพราะเรามีพี่ๆ GM ใจดีคอยสอนกติกาและแนะนำเกมที่เหมาะกับคุณ",
  },
  {
    icon: <Coffee size={22} />,
    title: "อาหารและเครื่องดื่ม",
    description:
      "เติมพลังด้วยเครื่องดื่ม Signature และของทานเล่นแสนอร่อยที่ออกแบบมาให้ทานง่ายระหว่างเล่น",
  },
  {
    icon: <Sofa size={22} />,
    title: "บรรยากาศอบอุ่น",
    description:
      "ที่นั่งสบาย แอร์เย็นฉ่ำ พร้อมปลั๊กไฟและ Wi-Fi ให้คุณสนุกได้ยาวๆ แบบไม่มีสะดุด",
  },
  {
    icon: <Trophy size={22} />,
    title: "กิจกรรมและทัวร์นาเมนต์",
    description:
      "เรามีการจัดแข่งบอร์ดเกมและกิจกรรมพบปะเพื่อนใหม่สำหรับคอเกมเป็นประจำทุกเดือน",
  },
  {
    icon: <PartyPopper size={22} />,
    title: "รับจัดเลี้ยงและวันเกิด",
    description:
      "มีโซนส่วนตัวรองรับการจัดปาร์ตี้วันเกิด หรือกิจกรรม Team Building สำหรับบริษัท",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const FeaturesSection = () => {
  return (
    <section
      id="games"
      className="py-24"
      style={{ backgroundColor: "var(--bg-surface)" }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--text-primary)" }}
          >
            ความสนุกที่มากกว่าแค่การเล่นเกม
          </h2>
          <p
            className="text-lg max-w-xl mx-auto leading-relaxed"
            style={{ color: "var(--text-muted)" }}
          >
            ที่ DICE & DELIGHT เราสร้างพื้นที่แห่งความสุขสำหรับทุกคน
            ไม่ว่าจะมาคนเดียวหรือมาเป็นกลุ่ม
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-6 rounded-2xl cursor-default transition-all duration-300"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--accent)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 32px var(--shadow)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.borderColor = "var(--border)";
                (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
              }}
            >
              {/* Icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200"
                style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
              >
                {feature.icon}
              </div>
              <h3
                className="font-semibold text-lg mb-2"
                style={{ color: "var(--text-primary)" }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-muted)" }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
