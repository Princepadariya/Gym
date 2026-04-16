"use client";

import Image from "next/image";
import styles from "./Transformations.module.css";

export default function Transformations() {
  const members = [
    { name: "John D.", result: "-25 lbs in 3 Months", img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80" },
    { name: "Sarah W.", result: "+10 lbs Muscle", img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80" },
    { name: "Mike T.", result: "Ironman Finisher", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80" },
  ];

  return (
    <section className={`section-padding ${styles.wrapper}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Real Results</h2>
          <p>Don&apos;t just take our word for it. Look at the transformations of our members.</p>
        </div>

        <div className={styles.grid}>
          <div className={`${styles.photoCard} ${styles.featured}`}>
            <div className={styles.featuredHalf}>
              <span className={styles.badge}>BEFORE</span>
              <Image src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80" alt="Before" width={400} height={500} style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.featuredHalf}>
              <span className={styles.badge} style={{ backgroundColor: 'var(--color-accent)' }}>AFTER</span>
              <Image src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80" alt="After" width={400} height={500} style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.overlay} style={{ pointerEvents: 'none' }}>
              <div className={styles.resultTitle}>-40 LBS & NEW LIFE</div>
              <p className={styles.resultDesc}>&quot;The coaching completely changed my perspective on fitness.&quot; - Alex</p>
            </div>
          </div>

          {members.map((member, idx) => (
            <div key={idx} className={styles.photoCard}>
              <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
              <div className={styles.overlay}>
                <div className={styles.resultTitle}>{member.result}</div>
                <p className={styles.resultDesc}>{member.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
