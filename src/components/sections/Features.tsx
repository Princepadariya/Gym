"use client";

import { useEffect, useRef } from "react";
import styles from "./Features.module.css";
import { Dumbbell, HeartPulse, Apple, Users, Clock, Trophy } from "lucide-react";
import gsap from "gsap";

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const cards = containerRef.current.querySelectorAll(`.${styles.card}`);
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          }
        }
      );
    }
  }, []);

  const features = [
    { icon: <Trophy size={40} />, title: "Elite Trainers", desc: "Train with certified professionals dedicated to your progress." },
    { icon: <Dumbbell size={40} />, title: "Premium Equipment", desc: "State-of-the-art machines and free weights for every routine." },
    { icon: <Apple size={40} />, title: "Nutrition Plans", desc: "Customized diet plans to accelerate your fitness journey." },
    { icon: <Users size={40} />, title: "Group Classes", desc: "High-energy classes from HIIT to Yoga, led by experts." },
    { icon: <Clock size={40} />, title: "24/7 Access", desc: "Workout on your schedule with round-the-clock facility access." },
    { icon: <HeartPulse size={40} />, title: "Personal Coaching", desc: "1-on-1 sessions focused completely on your specific goals." },
  ];

  return (
    <section id="features" className={`section-padding ${styles.wrapper}`}>
      <div className="container" ref={containerRef}>
        <div className={styles.header}>
          <h2>Why Choose Us</h2>
          <p>Everything you need to surpass your limits in one elite facility.</p>
        </div>
        
        <div className={styles.grid}>
          {features.map((feat, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.iconWrapper}>{feat.icon}</div>
              <h3>{feat.title}</h3>
              <p>{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
