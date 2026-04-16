"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply on non-touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;
    
    document.body.classList.add("custom-cursor-enabled");

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(dotRef.current, { x: e.clientX, y: e.clientY, duration: 0, ease: "none" });
      gsap.to(ringRef.current, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
    };

    const enhanceCursor = () => {
      gsap.to(ringRef.current, { width: 48, height: 48, backgroundColor: "rgba(255,107,53,0.2)", duration: 0.3 });
    };

    const resetCursor = () => {
      gsap.to(ringRef.current, { width: 32, height: 32, backgroundColor: "transparent", duration: 0.3 });
    };

    window.addEventListener("mousemove", onMouseMove);

    // Magnetic buttons setup
    const magneticElements = document.querySelectorAll("a, button");
    
    const onMouseEnter = () => enhanceCursor();
    const onMouseLeave = (e: Event) => {
      resetCursor();
      gsap.to(e.currentTarget, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
    };
    const onMouseMoveMagnetic = (e: MouseEvent) => {
      const el = e.currentTarget as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });
    };

    const updateMagneticElements = () => {
      const elements = document.querySelectorAll("a, button");
      elements.forEach((el) => {
        el.addEventListener("mouseenter", onMouseEnter);
        el.addEventListener("mouseleave", onMouseLeave);
        el.addEventListener("mousemove", onMouseMoveMagnetic as EventListener);
      });
    };

    updateMagneticElements();
    
    // Setup mutation observer for dynamically added elements
    const observer = new MutationObserver(updateMagneticElements);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="custom-cursor-dot" />
      <div ref={ringRef} className="custom-cursor-ring" />
    </>
  );
}
