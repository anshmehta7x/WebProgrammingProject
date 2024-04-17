import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./Testimonials.css";
import TestimonialCard from "./Components/TestimonialCard";

const Testimonials = () => {
  const testimonialList = [
    {
      text: "I received exceptional care during my recent visit. The clinic was clean and organized, and the staff was very attentive. I'm grateful to have found such a reliable healthcare provider in my area.",
      name: "Emily Johnson",
    },
    {
      text: "As someone who's often anxious about medical visits, I was pleasantly surprised by the warm atmosphere at this clinic. The doctor took the time to listen to my concerns and provided thorough explanations. I highly recommend this clinic for anyone seeking compassionate care.",
      name: "Michael Rodriguez",
    },
    {
      text: "After struggling to find a doctor who truly listens, I'm relieved to have found a caring provider. They were attentive, knowledgeable, and genuinely invested in my well-being. The entire experience exceeded my expectations, and I'll definitely be returning for future care.",
      name: "Sophia Chen",
    },
    {
      text: "I've been to several clinics in the area, but none have compared to the level of professionalism I experienced here. From the moment I walked in, I felt welcomed and valued as a patient. The doctor provided excellent care, and I wouldn't hesitate to recommend this clinic to others.",
      name: "David Wilson",
    },
    {
      text: "My family and I have been patients for years, and we couldn't be happier with the care we receive. The healthcare providers are not only knowledgeable but also compassionate and understanding. Whether it's a routine check-up or a more serious concern, we trust them wholeheartedly.",
      name: "Sarah Martinez",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="main-section">
        <section className="testimonials-section">
          <h1 className="testimonials-title">What Our Patients Say</h1>
          <img src="/patient-graphic-removebg-preview.png"></img>
          <div className="testimonials-container">
            {testimonialList.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                text={testimonial.text}
                name={testimonial.name}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
