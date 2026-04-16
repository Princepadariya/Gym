"use client";

import { useState } from "react";
import styles from "./QuickInquiry.module.css";
import { useForm } from "react-hook-form";

export default function QuickInquiry() {
  const { register, handleSubmit, reset } = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = (data: Record<string, string>) => {
    // API Call simulation
    console.log(data);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      reset();
    }, 4000);
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <h3>We&apos;ll call you in 10 minutes!</h3>
          <p>Drop your number and let&apos;s get started.</p>
        </div>
        
        {success ? (
          <div style={{ color: "white", fontWeight: "bold", fontSize: "1.2rem" }}>
            Got it! Expect a call soon.
          </div>
        ) : (
          <form className={styles.inlineForm} onSubmit={handleSubmit(onSubmit)}>
            <input required {...register("name")} placeholder="Your Name" />
            <input required type="tel" {...register("phone")} placeholder="Phone Number" />
            <button type="submit" className={`button-primary ${styles.submitBtn}`}>
              CALL ME
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
