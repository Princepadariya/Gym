"use client";

import Hero from "../components/sections/Hero";
import QuickInquiry from "../components/sections/QuickInquiry";
import Features from "../components/sections/Features";
import Classes from "../components/sections/Classes";
import Transformations from "../components/sections/Transformations";
import Trainers from "../components/sections/Trainers";
import Pricing from "../components/sections/Pricing";
import Testimonials from "../components/sections/Testimonials";
import InquiryForm from "../components/sections/InquiryForm";
import Footer from "../components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <QuickInquiry />
      <Features />
      <Classes />
      <Transformations />
      <Trainers />
      <Pricing />
      <Testimonials />
      <InquiryForm />
      <Footer />
    </main>
  );
}
