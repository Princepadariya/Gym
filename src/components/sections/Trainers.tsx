"use client";

import Image from "next/image";
import { useModal } from "../../context/ModalContext";
import styles from "./Trainers.module.css";

export default function Trainers() {
  const { openModal } = useModal();
  const trainers = [
    {
      name: "Marcus Cole",
      role: "Head Strength Coach",
      bio: "Former Olympian with 15 years of experience in powerlifting and functional strength. Marcus will push your physical boundaries.",
      img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Elena Rostova",
      role: "HIIT & Cardio Specialist",
      bio: "High-energy coach dedicated to maximizing your endurance and burning fat. Her classes are legendary for their intensity.",
      img: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "David Chen",
      role: "Mobility & Yoga",
      bio: "Focuses on the mind-muscle connection, injury prevention, and core stability. David brings balance to the heavy lifting.",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <section id="trainers" className={`section-padding ${styles.wrapper}`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Meet The Elite</h2>
          <p>Our trainers are industry leaders committed to your success.</p>
        </div>

        <div className={styles.grid}>
          {trainers.map((trainer, idx) => (
            <div key={idx} className={styles.flipCard}>
              <div className={styles.flipCardInner}>
                
                <div className={styles.flipCardFront}>
                  <Image src={trainer.img} alt={trainer.name} fill style={{ objectFit: 'cover' }} />
                  <div className={styles.frontOverlay}>
                    <h3>{trainer.name}</h3>
                    <span>{trainer.role}</span>
                  </div>
                </div>

                <div className={styles.flipCardBack}>
                  <h3>{trainer.name}</h3>
                  <p>{trainer.bio}</p>
                  <button className={`button-primary ${styles.bookBtn}`} onClick={(e) => {
                    e.stopPropagation();
                    openModal();
                  }}>
                    Book Session
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
