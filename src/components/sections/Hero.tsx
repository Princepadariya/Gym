"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import gsap from "gsap";
import { useModal } from "../../context/ModalContext";

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const { openModal } = useModal();

  useEffect(() => {
    // Basic split text animation logic manually (since GSAP SplitText is a premium plugin)
    if (headlineRef.current) {
      const text = headlineRef.current.innerText;
      headlineRef.current.innerHTML = text.split(" ").map(word => {
        if(word === "LIMITS" || word === "TODAY") {
          return `<span style="opacity: 0; transform: translateY(50px); display: inline-block; color: var(--color-accent)">${word}</span>`;
        }
        return `<span style="opacity: 0; transform: translateY(50px); display: inline-block">${word}</span>`;
      }).join(" ");

      gsap.to(headlineRef.current.querySelectorAll("span"), {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.2
      });
    }

    if (statsRef.current) {
      gsap.fromTo(statsRef.current.children, 
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out", delay: 1 }
      );

      // Number counter animation
      const numbers = statsRef.current.querySelectorAll(`.${styles.statNumber}`);
      numbers.forEach(el => {
        const target = parseInt(el.getAttribute("data-target") || "0", 10);
        gsap.to({ val: 0 }, {
          val: target,
          duration: 2,
          ease: "power2.out",
          delay: 1,
          onUpdate: function() {
            el.innerHTML = Math.floor(this.targets()[0].val) + (el.getAttribute("data-suffix") || "");
          }
        });
      });
    }
  }, []);

  return (
    <section className={styles.hero}>
      {/* Fallback image if video fails or slow connection */}
      <video 
        autoPlay 
        muted 
        loop 
        playsInline 
        className={styles.bgVideo}
        poster="/hero-poster.jpg"
      >
        {/* Placeholder video, use a public realistic gym video */}
        <source src="https://assets.mixkit.co/videos/preview/mixkit-man-lifting-a-heavy-barbell-in-a-gym-fitness-gym-workout-22879-large.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} />
      
      <div className={styles.content}>
        <h1 ref={headlineRef} className={styles.headline}>
          PUSH YOUR LIMITS TODAY
        </h1>
        <div className={styles.ctas}>
          <button className="button-primary" onClick={openModal}>
            Book Your Free Trial
          </button>
          <a href="#classes" className={styles.buttonSecondary}>
            View Classes
          </a>
        </div>
      </div>

      <div ref={statsRef} className={styles.statsRow}>
        <div className={styles.statItem}>
          <span className={styles.statNumber} data-target="2500" data-suffix="+">0</span>
          <span className={styles.statLabel}>Active Members</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber} data-target="50" data-suffix="+">0</span>
          <span className={styles.statLabel}>Expert Trainers</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber} data-target="100" data-suffix="+">0</span>
          <span className={styles.statLabel}>Weekly Classes</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNumber} data-target="15" data-suffix="">0</span>
          <span className={styles.statLabel}>Years Strong</span>
        </div>
      </div>
    </section>
  );
}
