"use client";

import { Star, UserRound, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useState, useRef, useEffect } from "react";

// TestimonialsSection: 3-card infinite loop carousel
// - แสดงทีละ 3 card พร้อมกัน
// - drag/swipe เลื่อนวนได้
// - ปุ่ม prev/next

interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "คุณกอล์ฟ",
    role: "ลูกค้าประจำ",
    quote:
      "พี่ GM สอนเข้าใจง่ายมากครับ มาครั้งแรกเล่นเป็นเลย เกมเยอะจนเลือกไม่ถูก แนะนำให้มาลองครับ บรรยากาศเป็นกันเองสุดๆ",
  },
  {
    name: "คุณมินท์",
    role: "นักศึกษา",
    quote:
      "เครื่องดื่มอร่อยมาก! นั่งเล่นบอร์ดเกมกับเพื่อนเพลินเลย แอร์เย็น ที่นั่งสบาย ไม่รู้สึกอึดอัดเลยค่ะ เป็นที่นัดเจอกันประจำของกลุ่มเลย",
  },
  {
    name: "คุณเอก",
    role: "ลูกค้าทั่วไป",
    quote:
      "มาคนเดียวก็ได้เพื่อนใหม่จากที่นี่ บรรยากาศอบอุ่นเหมือนบ้าน มีเกมให้เลือกเยอะมาก GM แนะนำเกมได้ตรงใจมากครับ",
  },
  {
    name: "คุณแพร",
    role: "สายบอร์ดเกมวางแผน",
    quote:
      "ชอบที่มีโซนเกมให้เลือกชัดเจน และพี่ๆ GM ช่วยเลือกเกมที่เหมาะกับระดับการเล่นของเราได้ดีมาก ประทับใจค่ะ",
  },
  {
    name: "คุณบอย",
    role: "สายปาร์ตี้",
    quote:
      "พาลูกน้องมา Team Building ที่นี่สนุกมากครับ ทุกคนแฮปปี้ เกมปาร์ตี้เยอะมาก อาหารทานเล่นก็รสชาติดี",
  },
];

// StarRating: 5 ดาว
const StarRating = () => (
  <div className="flex gap-0.5 mb-3">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={13} style={{ color: "var(--accent)", fill: "var(--accent)" }} />
    ))}
  </div>
);

// Card component แยกออกมา
const TestimonialCard = ({
  t,
  isCenter,
}: {
  t: Testimonial;
  isCenter: boolean;
}) => (
  <div
    className="flex-shrink-0 p-6 rounded-2xl flex flex-col transition-all duration-300"
    style={{
      width: "calc(33.333% - 12px)",
      backgroundColor: isCenter ? "var(--bg-card)" : "var(--bg-surface)",
      border: isCenter ? "2px solid var(--accent)" : "1px solid var(--border)",
      boxShadow: isCenter ? "0 12px 40px var(--shadow)" : "0 2px 8px rgba(0,0,0,0.04)",
      opacity: isCenter ? 1 : 0.65,
      transform: isCenter ? "scale(1.03)" : "scale(0.97)",
    }}
  >
    <StarRating />
    <div className="mb-3" style={{ color: "var(--accent)", opacity: 0.35 }}>
      <Quote size={22} />
    </div>
    <p
      className="text-sm leading-relaxed flex-1 mb-5"
      style={{ color: "var(--text-primary)", fontStyle: "italic" }}
    >
      "{t.quote}"
    </p>
    <div className="flex items-center gap-3 mt-auto">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: "var(--accent-light)", color: "var(--accent)" }}
      >
        <UserRound size={18} />
      </div>
      <div>
        <p className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>
          {t.name}
        </p>
        <p className="text-xs" style={{ color: "var(--text-muted)" }}>
          {t.role}
        </p>
      </div>
    </div>
  </div>
);

const CARD_WIDTH_PERCENT = 33.333;
const GAP = 16; // px

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const total = testimonials.length;

  // สร้าง infinite list โดยทำ clone ซ้ายและขวา
  // pattern: [...last2, ...all, ...first2]
  const extended = [
    ...testimonials.slice(-2),
    ...testimonials,
    ...testimonials.slice(0, 2),
  ];
  // offset: จำนวน clone ทางซ้าย
  const cloneOffset = 2;

  const trackRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartIndex = useRef(0);
  const isAnimating = useRef(false);

  const [translateX, setTranslateX] = useState(() => 0);

  // คำนวณ % translate ที่ถูกต้อง
  const calcTranslate = (idx: number, containerWidth: number) => {
    const cardWidthPx = (containerWidth - GAP * 2) / 3;
    const totalCardWidth = cardWidthPx + GAP;
    const visibleCenter = cloneOffset + idx;
    return -((visibleCenter - 1) * totalCardWidth);
  };

  const goTo = (idx: number, animate = true) => {
    const container = trackRef.current?.parentElement;
    if (!container) return;
    if (!animate) setIsTransitionEnabled(false);
    const tx = calcTranslate(idx, container.offsetWidth);
    setTranslateX(tx);
  };

  useEffect(() => {
    goTo(currentIndex, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Re-calculate on resize
  useEffect(() => {
    const handleResize = () => goTo(currentIndex, false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  // Re-enable transition after jump
  useEffect(() => {
    if (!isTransitionEnabled) {
      const raf = requestAnimationFrame(() => {
        setIsTransitionEnabled(true);
      });
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitionEnabled]);

  // หลังเลื่อนถึง clone ให้ jump ไปตำแหน่งจริงแบบ instant (no transition)
  const handleTransitionEnd = () => {
    if (currentIndex < 0) {
      setIsTransitionEnabled(false);
      const real = currentIndex + total;
      setCurrentIndex(real);
      // Update translate immediately
      const container = trackRef.current?.parentElement;
      if (container) {
        setTranslateX(calcTranslate(real, container.offsetWidth));
      }
    } else if (currentIndex >= total) {
      setIsTransitionEnabled(false);
      const real = currentIndex - total;
      setCurrentIndex(real);
      // Update translate immediately
      const container = trackRef.current?.parentElement;
      if (container) {
        setTranslateX(calcTranslate(real, container.offsetWidth));
      }
    }
    isAnimating.current = false;
  };

  const navigate = (dir: 1 | -1) => {
    if (isAnimating.current) return;
    isAnimating.current = true;
    setCurrentIndex((prev) => prev + dir);
  };

  // Drag handlers
  const handlePointerDown = (e: React.PointerEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragStartIndex.current = currentIndex;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    const container = trackRef.current?.parentElement;
    if (!container) return;
    const delta = e.clientX - dragStartX.current;
    const base = calcTranslate(dragStartIndex.current, container.offsetWidth);
    setTranslateX(base + delta);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const delta = e.clientX - dragStartX.current;
    const container = trackRef.current?.parentElement;
    const threshold = container ? container.offsetWidth * 0.1 : 80;
    if (Math.abs(delta) > threshold) {
      navigate(delta < 0 ? 1 : -1);
    } else {
      // snap back
      goTo(currentIndex);
    }
  };

  // Dot indicator index (วน)
  const activeIndicator = ((currentIndex % total) + total) % total;

  return (
    <section
      id="testimonials"
      className="py-24 overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
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
            เสียงตอบรับจากเพื่อนๆ
          </h2>
          <p className="text-lg" style={{ color: "var(--text-muted)" }}>
            ร่วมเป็นส่วนหนึ่งของครอบครัว DICE &amp; DELIGHT กับเรา
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Track container — overflow hidden */}
          <div className="overflow-hidden" style={{ cursor: isDragging.current ? "grabbing" : "grab" }}>
            {/* Track — translateX driven by state */}
            <div
              ref={trackRef}
              className="flex select-none"
              style={{
                gap: GAP,
                transform: `translateX(${translateX}px)`,
                transition: isDragging.current || !isTransitionEnabled ? "none" : "transform 0.42s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                willChange: "transform",
              }}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              onTransitionEnd={handleTransitionEnd}
            >
              {extended.map((t, i) => {
                // card ที่เป็น "กลาง" คือ index ที่ตรงกับ currentIndex ใน extended
                const isCenter = i === cloneOffset + currentIndex;
                return (
                  <TestimonialCard key={i} t={t} isCenter={isCenter} />
                );
              })}
            </div>
          </div>

          {/* Prev / Next buttons */}
          <button
            onClick={() => navigate(-1)}
            aria-label="ก่อนหน้า"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 z-10"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1.5px solid var(--border)",
              color: "var(--text-primary)",
            }}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => navigate(1)}
            aria-label="ถัดไป"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 z-10"
            style={{
              backgroundColor: "var(--bg-card)",
              border: "1.5px solid var(--border)",
              color: "var(--text-primary)",
            }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                if (isAnimating.current) return;
                setCurrentIndex(i);
              }}
              aria-label={`รีวิวที่ ${i + 1}`}
              className="rounded-full transition-all duration-300 h-2.5"
              style={{
                backgroundColor: i === activeIndicator ? "var(--accent)" : "var(--border)",
                width: i === activeIndicator ? "28px" : "10px",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
