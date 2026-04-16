"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Pricing.module.css";
import { Check } from "lucide-react";
import gsap from "gsap";
import { useModal } from "../../context/ModalContext";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useEffect(() => {
    // 3D Tilt effect
    const cards = document.querySelectorAll(`.${styles.card}`);
    
    const handleMouseMove = (e: MouseEvent, card: Element) => {
      if (window.innerWidth < 768) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(card, {
        rotateX,
        rotateY,
        transformPerspective: 1000,
        ease: "power2.out",
        duration: 0.5
      });
    };

    const handleMouseLeave = (card: Element) => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        ease: "power2.out",
        duration: 0.5
      });
    };

    cards.forEach(card => {
      (card as HTMLElement).addEventListener("mousemove", (e) => handleMouseMove(e, card));
      (card as HTMLElement).addEventListener("mouseleave", () => handleMouseLeave(card));
    });

    return () => {
      cards.forEach(card => {
        (card as HTMLElement).removeEventListener("mousemove", (e) => handleMouseMove(e, card));
        (card as HTMLElement).removeEventListener("mouseleave", () => handleMouseLeave(card));
      });
    };
  }, []);

  const handleToggle = () => {
    setIsYearly(!isYearly);
  };

  return (
    <section id="pricing" className={`section-padding ${styles.wrapper}`}>
      <div className="container" ref={containerRef}>
        <div className={styles.header}>
          <h2>Membership Plans</h2>
          <div className={styles.toggleContainer}>
            <span style={{ color: isYearly ? "var(--color-text-muted)" : "var(--color-text)" }}>Monthly</span>
            <div className={`${styles.toggle} ${isYearly ? styles.yearly : ""}`} onClick={handleToggle}>
              <div className={styles.toggleCircle}></div>
            </div>
            <span style={{ color: isYearly ? "var(--color-text)" : "var(--color-text-muted)" }}>
              Yearly <span style={{ color: "var(--color-accent)", fontSize: "0.8rem", verticalAlign: "super" }}>Save 20%</span>
            </span>
          </div>
        </div>

        <div className={styles.grid}>
          {/* Base */}
          <div className={styles.card}>
            <h3 className={styles.tierName}>Starter</h3>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              {isYearly ? "39" : "49"}
              <span className={styles.period}>/mo</span>
            </div>
            <p className={styles.desc}>Perfect for beginners starting their fitness journey.</p>
            <ul className={styles.features}>
              <li className={styles.feature}><Check size={20} className={styles.checkIcon} /> Standard Gym Access</li>
              <li className={styles.feature}><Check size={20} className={styles.checkIcon} /> Locker Room</li>
              <li className={`${styles.feature} ${styles.disabled}`}><Check size={20} className={styles.checkIcon} /> Group Classes</li>
              <li className={`${styles.feature} ${styles.disabled}`}><Check size={20} className={styles.checkIcon} /> Personal Training</li>
            </ul>
            <button className={`button-secondary ${styles.selectBtn}`} style={{ border: '1px solid #444', background: 'transparent' }} onClick={openModal}>START FREE TRIAL</button>
          </div>

          {/* Pro */}
          <div className={`${styles.card} ${styles.popular}`}>
            <div className={styles.badge}>MOST POPULAR</div>
            <h3 className={styles.tierName}>Pro</h3>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              {isYearly ? "79" : "99"}
              <span className={styles.period}>/mo</span>
            </div>
            <p className={styles.desc}>For dedicated athletes looking for a complete experience.</p>
            <ul className={styles.features}>
              <li className={styles.feature}><Check size={20} className={styles.checkIcon} /> 24/7 Elite Gym Access</li>
              <li className={styles.feature}><Check size={20} className={styles.checkIcon} /> Locker Room & Sauna</li>
              <li className={styles.feature}><Check size={20} className={styles.checkIcon} /> Unlimited Group Classes</li>
              <li className={`${styles.feature} ${styles.disabled}`}><Check size={20} className={styles.checkIcon} /> Personal Training</li>
            </ul>
            <button className={`button-primary ${styles.selectBtn}`} onClick={openModal}>JOIN THE PROS</button>
          </div>

          {/* Elite */}
          <div className={styles.card}>
            <h3 className={styles.tierName}>Elite</h3>
            <div className={styles.price}>
              <span className={styles.currency}>$</span>
              {isYearly ? "159" : "199"}
              <span className={styles.period}>/mo</span>
            </div>
            <p className={styles.desc}>The ultimate all-inclusive package with 1-on-1 coaching.</p>
            <ul className={styles.features}>
              <li className={styles.feature}><Check size={20} className={styles.checkIcon} /> 24/7 Elite Gym Access</li>
              <li className={styles.feature}><Check size={20} className={styles.checkIcon} /> Premium Locker & Sauna</li>
              <li className={styles.feature}><Check size={20} className={styles.checkIcon} /> Unlimited Group Classes</li>
              <li className={styles.feature}><Check size={20} className={styles.checkIcon} /> 4 PT Sessions / Month</li>
            </ul>
            <button className={`button-secondary ${styles.selectBtn}`} style={{ border: '1px solid #444', background: 'transparent' }} onClick={openModal}>GET ELITE STATUS</button>
          </div>

        </div>
      </div>
    </section>
  );
}
