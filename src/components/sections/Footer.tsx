"use client";

import styles from "./Footer.module.css";
import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          
          <div className={styles.brandSide}>
            <h2>[GYM NAME]</h2>
            <p>Forging elite athletes and transforming lives since [FOUNDED YEAR]. Your journey to greatness starts here.</p>
            <div className={styles.socials}>
                <a href="https://instagram.com/[INSTAGRAM HANDLE]" className={styles.socialBtn} aria-label="Instagram">IG</a>
                <a href="#" className={styles.socialBtn} aria-label="Facebook">FB</a>
                <a href="#" className={styles.socialBtn} aria-label="Twitter">TW</a>
                <a href="#" className={styles.socialBtn} aria-label="Youtube">YT</a>
            </div>
          </div>

          <div>
            <h4 className={styles.linksTitle}>QUICK LINKS</h4>
            <ul className={styles.linksList}>
              <li><a href="#features">Features</a></li>
              <li><a href="#classes">Classes</a></li>
              <li><a href="#trainers">Trainers</a></li>
              <li><a href="#pricing">Membership</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.linksTitle}>COMPANY</h4>
            <ul className={styles.linksList}>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Vision</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className={styles.linksTitle}>READY TO START?</h4>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '20px', fontSize: '0.95rem' }}>
              Subscribe to our newsletter for fitness tips and exclusive offers.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Email Address" 
                style={{ height: '48px', padding: '0 16px' }}
              />
              <button 
                className="button-primary" 
                style={{ height: '48px', padding: '0 20px', fontSize: '1rem' }}
              >
                GO
              </button>
            </div>
          </div>

        </div>

        <div className={styles.bottom}>
          <p>© {currentYear} [GYM NAME]. All rights reserved.</p>
          <p>Designed for Excellence</p>
        </div>
      </div>
    </footer>
  );
}
