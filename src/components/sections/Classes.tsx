"use client";

import Image from "next/image";
import { useRef } from "react";
import styles from "./Classes.module.css";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { useModal } from "../../context/ModalContext";

export default function Classes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  const classesData = [
    { name: "HIIT", desc: "High Intensity Interval Training", img: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&w=600&q=80" },
    { name: "Yoga", desc: "Flexibility and Mindfulness", img: "https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=600&q=80" },
    { name: "Boxing", desc: "Cardio & Technique", img: "https://images.unsplash.com/photo-1549719386-74dfc97dd4fc?auto=format&fit=crop&w=600&q=80" },
    { name: "Strength", desc: "Powerlifting & Barbell", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
    { name: "Zumba", desc: "Dance Fitness", img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80" },
    { name: "CrossFit", desc: "Functional Movements", img: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=600&q=80" },
  ];

  const scroll = (direction: "left" | "right") => {
    if (trackRef.current) {
      const scrollAmount = 324; // Card width + gap
      trackRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section id="classes" className={`section-padding ${styles.wrapper}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Explore Classes</h2>
          <div className={styles.navButtons}>
            <button className={styles.navBtn} onClick={() => scroll("left")} aria-label="Previous">
              <ChevronLeft size={24} />
            </button>
            <button className={styles.navBtn} onClick={() => scroll("right")} aria-label="Next">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className={styles.sliderContainer}>
          <div className={styles.scrollTrack} ref={trackRef}>
            {classesData.map((cls, idx) => (
              <div key={idx} className={styles.card} onClick={openModal}>
                <Image src={cls.img} alt={cls.name} width={300} height={400} className={styles.cardImage} />
                <div className={styles.cardOverlay}>
                  <h3>{cls.name}</h3>
                  <p>{cls.desc}</p>
                  <span className={styles.viewSchedule}>
                    Book Trial <ArrowRight size={18} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
