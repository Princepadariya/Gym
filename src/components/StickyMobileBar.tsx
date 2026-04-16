"use client";

import { useEffect, useState } from "react";
import styles from "./Shared.module.css";
import { Phone, MessageCircle } from "lucide-react";
import { useModal } from "../context/ModalContext";

export default function StickyMobileBar() {
  const { openModal } = useModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className={styles.stickyMobileBar}>
      <a href="tel:[PHONE]" className={styles.mobileCall}>
        <Phone size={20} /> Call Now
      </a>
      <button onClick={openModal} className={styles.mobileInquiry}>
        <MessageCircle size={20} /> Drop Inquiry
      </button>
    </div>
  );
}
