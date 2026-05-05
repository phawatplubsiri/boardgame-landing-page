"use client";

import { Phone, Mail, FileText, Dices } from "lucide-react";

// Footer: TABLEMARK — warm design with CSS variables

const footerLinks = {
  บริการ: ["บอร์ดเกม", "เมนูอาหาร", "อัตราค่าบริการ", "กิจกรรมประจำเดือน"],
  บริษัท: ["เกี่ยวกับเรา", "ร่วมงานกับเรา", "บล็อก", "ติดต่อเรา"],
  ช่วยเหลือ: ["คำถามที่พบบ่อย", "การจองโต๊ะ", "การเดินทาง", "กฎการเล่นเกม"],
  กฎหมาย: ["นโยบายความเป็นส่วนตัว", "ข้อกำหนดการใช้งาน", "นโยบายคุกกี้"],
};

const FooterSection = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: "var(--bg-surface)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Top row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            {/* Logo mark — Dices icon as fallback brand mark */}
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: "var(--accent)", color: "#fff" }}
              >
                <Dices size={16} />
              </div>
              <span
                className="font-bold text-base"
                style={{ color: "var(--text-primary)" }}
              >
                DICE & <span style={{ color: "var(--accent)" }}>DELIGHT</span>
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              อาณาจักรบอร์ดเกมใจกลางเมือง สนุกได้ทุกวัย พร้อมอาหารและเครื่องดื่มครบครัน
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(footerLinks).map(([group, links]) => (
            <div key={group}>
              <h4
                className="font-semibold text-sm mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {group}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-200"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--accent)")
                      }
                      onMouseLeave={(e) =>
                        ((e.target as HTMLElement).style.color = "var(--text-muted)")
                      }
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {currentYear} DICE & DELIGHT.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            {[
              { icon: <Mail size={18} />, label: "อีเมล" },
              { icon: <Phone size={18} />, label: "โทรศัพท์" },
            ].map(({ icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--accent)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "var(--text-muted)")
                }
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
