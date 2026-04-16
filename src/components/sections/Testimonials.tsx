"use client";

import Image from "next/image";
import styles from "./Testimonials.module.css";
import { Star, Play } from "lucide-react";

export default function Testimonials() {
  const reviews1 = [
    { name: "Jake M.", role: "Member for 2 years", text: "The coaches here don't mess around. The atmosphere single-handedly pushes you to do those last 2 reps. Unbelievable community.", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80" },
    { name: "Samantha P.", role: "Pro Member", text: "Lost 15 pounds in my first 3 months. The group classes are actually fun and the facilities are always spotless.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80" },
    { name: "David L.", role: "Elite Status", text: "Best equipment in the city. The fact that it's 24/7 means I can literally train anytime. Pure 10/10.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" }
  ];

  const videos = [
    { title: "Alex's Journey", img: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80" },
    { title: "Maria's Transformation", img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&w=600&q=80" }
  ];

  return (
    <section className={`section-padding ${styles.wrapper}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Wall of Legends</h2>
          <p>Join hundreds of others who changed their lives inside these walls.</p>
        </div>
      </div>

      <div className={styles.scrollContainer}>
        <div className={styles.marquee}>
          <div className={styles.marqueeContent}>
            {[...reviews1, ...reviews1, ...reviews1].map((rev, idx) => (
              <div key={idx} className={styles.reviewCard}>
                <div className={styles.stars}>
                  <Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" /><Star size={20} fill="currentColor" />
                </div>
                <p className={styles.reviewText}>&quot;{rev.text}&quot;</p>
                <div className={styles.reviewer}>
                  <Image src={rev.img} alt={rev.name} width={48} height={48} className={styles.reviewerImg} />
                  <div>
                    <div className={styles.reviewerName}>{rev.name}</div>
                    <div className={styles.reviewerRole}>{rev.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className={styles.videoGrid}>
          {videos.map((vid, idx) => (
            <div key={idx} className={styles.videoCard}>
              <Image src={vid.img} alt={vid.title} width={300} height={200} className={styles.img} style={{ objectFit: 'cover' }} />
              <div className={styles.playBtn}>
                <Play size={32} fill="currentColor" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
