"use client";

import { useState } from "react";
import styles from "./InquiryForm.module.css";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  goals: string[];
  bestTime: string;
  message: string;
}

export default function InquiryForm() {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // Simulation of form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log("Form Data:", data);
    setSuccess(true);
    setSubmitting(false);
    setTimeout(() => {
      setSuccess(false);
      reset();
    }, 5000);
  };

  return (
    <section id="contact" className={`section-padding ${styles.wrapper}`}>
      <div className="container">
        <div className={styles.grid}>
          
          <div className={styles.infoSide}>
            <h2>READY TO CHANGE YOUR LIFE?</h2>
            <p>Get in touch today and claim your free 7-day trial pass. Our team will get back to you within 2 hours.</p>
            
            <div className={styles.contactDetails}>
              <div className={styles.detailItem}>
                <MapPin className={styles.icon} size={28} />
                <div>
                  <h4>VISIT US</h4>
                  <p>[ADDRESS], [CITY]</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <Phone className={styles.icon} size={28} />
                <div>
                  <h4>CALL US</h4>
                  <p>[PHONE]</p>
                </div>
              </div>
              <div className={styles.detailItem}>
                <Mail className={styles.icon} size={28} />
                <div>
                  <h4>EMAIL US</h4>
                  <p>[EMAIL]</p>
                </div>
              </div>
            </div>

            <div className={styles.mapWrapper}>
              {/* Replace with real Google Maps iframe */}
              <iframe 
                className={styles.mapIframe}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117506.31174092265!2d72.50238122394589!3d23.019771120485984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fccd70d68f04460!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1713212345678!5m2!1sen!2sin" 
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div className={styles.formSide}>
            {success ? (
              <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <h3 style={{ color: 'var(--color-accent)', fontSize: '3rem', marginBottom: '16px' }}>SENT!</h3>
                <p>Check your phone. We&apos;re calling you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input required {...register("name")} placeholder="John Doe" />
                </div>

                <div className={styles.formGroup} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div>
                    <label>Email Address</label>
                    <input required type="email" {...register("email")} placeholder="john@example.com" />
                  </div>
                  <div>
                    <label>Phone Number</label>
                    <input required type="tel" {...register("phone")} placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>What are your goals?</label>
                  <div className={styles.checkboxGrid}>
                    <label className={styles.checkboxItem}><input type="checkbox" value="Weight Loss" {...register("goals")} /> Weight Loss</label>
                    <label className={styles.checkboxItem}><input type="checkbox" value="Muscle Gain" {...register("goals")} /> Muscle Gain</label>
                    <label className={styles.checkboxItem}><input type="checkbox" value="Endurance" {...register("goals")} /> Endurance</label>
                    <label className={styles.checkboxItem}><input type="checkbox" value="Health" {...register("goals")} /> General Health</label>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Preferred Contact Time</label>
                  <select required {...register("bestTime")}>
                    <option value="">Select time...</option>
                    <option value="9am - 12pm">Morning (9am - 12pm)</option>
                    <option value="12pm - 5pm">Afternoon (12pm - 5pm)</option>
                    <option value="5pm - 9pm">Evening (5pm - 9pm)</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Message (Optional)</label>
                  <textarea rows={4} {...register("message")} placeholder="Tell us more about your fitness history..."></textarea>
                </div>

                <button type="submit" disabled={submitting} className={`button-primary ${styles.submitBtn}`} style={{ width: '100%' }}>
                  {submitting ? "SENDING..." : "BOOK MY FREE EVALUATION"}
                </button>

                <a 
                  href="https://wa.me/[WHATSAPP NUMBER]" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.whatsappBtn}
                >
                  <MessageCircle size={20} /> CHAT ON WHATSAPP
                </a>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
