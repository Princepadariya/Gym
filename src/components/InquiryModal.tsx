"use client";

import { useState } from "react";
import styles from "./Shared.module.css";
import { X, Lock } from "lucide-react";
import { useForm } from "react-hook-form";
// import emailjs from "@emailjs/browser";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface FormData {
  name: string;
  mobile: string;
  goal: string;
  bestTime: string;
}

export default function InquiryModal({ isOpen, onClose }: ModalProps) {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async () => {
    setSubmitting(true);
    // Replace with real EmailJS credentials
    try {
      // await emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      //   from_name: data.name,
      //   mobile: data.mobile,
      //   goal: data.goal,
      //   bestTime: data.bestTime,
      // }, "YOUR_PUBLIC_KEY");
      
      // Simulate API call for now
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        reset();
        onClose();
      }, 3000);
    } catch (e) {
      console.error(e);
      alert("Failed to submit inquiry. Please try again or contact via WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className={`modal-overlay ${isOpen ? "active" : ""}`} onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <h2>GET YOUR FREE TRIAL</h2>
          <button className={styles.closeButton} onClick={onClose}>
            <X size={24} />
          </button>
        </div>
        
        <div className={styles.modalBody}>
          {success ? (
            <div style={{ textAlign: "center", padding: "40px 0" }}>
              <h3 style={{ color: "var(--color-accent)", fontSize: "2rem", marginBottom: "16px" }}>SUCCESS!</h3>
              <p>We will call you shortly to schedule your trial.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={styles.formGroup}>
                <label>Name</label>
                <input required {...register("name")} placeholder="Your Full Name" />
              </div>
              
              <div className={styles.formGroup}>
                <label>Mobile Number</label>
                <input required type="tel" {...register("mobile")} placeholder="+1 (555) 000-0000" />
              </div>
              
              <div className={styles.formGroup}>
                <label>Primary Goal</label>
                <div className={styles.radioGroup}>
                  <label className={styles.radioLabel}><input type="radio" value="Strength" {...register("goal")} required /> Strength</label>
                  <label className={styles.radioLabel}><input type="radio" value="Weight Loss" {...register("goal")} /> Weight Loss</label>
                  <label className={styles.radioLabel}><input type="radio" value="Endurance" {...register("goal")} /> Endurance</label>
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label>Best Time to Call</label>
                <select required {...register("bestTime")}>
                  <option value="">Select a time...</option>
                  <option value="Morning">Morning (8am - 12pm)</option>
                  <option value="Afternoon">Afternoon (12pm - 5pm)</option>
                  <option value="Evening">Evening (5pm - 8pm)</option>
                </select>
              </div>

              <button type="submit" disabled={submitting} className={`button-primary ${styles.submitBtn}`}>
                {submitting ? "SUBMITTING..." : "GET MY FREE TRIAL"}
              </button>
              
              <div className={styles.trustCopy}>
                <Lock size={14} /> Free. No spam. We&apos;ll call you.
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
