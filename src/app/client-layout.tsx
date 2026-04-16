"use client";

import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Header from "../components/Header";
import CustomCursor from "../components/CustomCursor";
import StickyMobileBar from "../components/StickyMobileBar";
import WhatsAppButton from "../components/WhatsAppButton";
import InquiryModal from "../components/InquiryModal";
import { ModalProvider, useModal } from "../context/ModalContext";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

function ClientLayoutContent({ children }: { children: React.ReactNode }) {
  const { isModalOpen, openModal, closeModal } = useModal();

  const modalTriggeredRef = useRef(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      document.documentElement.classList.add("prefers-reduced-motion");
    }

    let lenis: Lenis | null = null;
    let scrollHandler: (() => void) | null = null;
    let timeOut: NodeJS.Timeout | null = null;
    let checkExitIntent: ((e: MouseEvent) => void) | null = null;
    let handleKeyDown: ((e: KeyboardEvent) => void) | null = null;

    // Initialize Lenis setup exclusively if no reduced motion preferred
    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });

      // Sync GSAP with Lenis
      lenis.on("scroll", ScrollTrigger.update);
      gsap.ticker.add((time) => {
        lenis?.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);

      handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Tab" && !document.documentElement.classList.contains("tab-user")) {
          document.documentElement.classList.add("tab-user");
        }
      };

      window.addEventListener("keydown", handleKeyDown);

      // Modal triggers (scroll & time-based)
      scrollHandler = () => {
        const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        if (scrolled >= 0.4 && !modalTriggeredRef.current) {
          openModal();
          modalTriggeredRef.current = true;
        }
      };
      
      timeOut = setTimeout(() => {
        if (!modalTriggeredRef.current) {
          openModal();
          modalTriggeredRef.current = true;
        }
      }, 30000); // 30s as requested

      checkExitIntent = (e: MouseEvent) => {
        if (e.clientY <= 0 && !modalTriggeredRef.current) {
          openModal();
          modalTriggeredRef.current = true;
        }
      };

      window.addEventListener("scroll", scrollHandler);
      document.addEventListener("mouseleave", checkExitIntent);
    }

    return () => {
      if (lenis) lenis.destroy();
      if (handleKeyDown) window.removeEventListener("keydown", handleKeyDown);
      if (scrollHandler) window.removeEventListener("scroll", scrollHandler);
      if (checkExitIntent) document.removeEventListener("mouseleave", checkExitIntent);
      if (timeOut) clearTimeout(timeOut);
    };
  }, [openModal]); // modalTriggeredRef doesn't need to be here as it's a ref


  return (
    <>
      <CustomCursor />
      <Header />
      {children}
      <StickyMobileBar />
      <WhatsAppButton />
      <InquiryModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      <ClientLayoutContent>
        {children}
      </ClientLayoutContent>
    </ModalProvider>
  );
}
