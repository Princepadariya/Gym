"use client";

import { useEffect, useRef } from "react";
import styles from "./Shared.module.css";
import { MessageCircle } from "lucide-react";
import gsap from "gsap";

export default function WhatsAppButton() {
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const bounceInterval = setInterval(() => {
      if (btnRef.current) {
        gsap.fromTo(
          btnRef.current,
          { y: 0 },
          { y: -15, duration: 0.4, yoyo: true, repeat: 3, ease: "power1.inOut" }
        );
      }
    }, 8000);

    return () => clearInterval(bounceInterval);
  }, []);

  return (
    <a
      ref={btnRef}
      href="https://wa.me/[WHATSAPP NUMBER]?text=Hi,%20I%27m%20interested%20in%20the%20free%20trial!"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappFloat}
    >
      <MessageCircle size={32} color="#FFF" />
    </a>
  );
}
