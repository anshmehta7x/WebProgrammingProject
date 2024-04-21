import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./Testimonials.css";
import TestimonialCard from "./Components/TestimonialCard";
import axios from "axios";

const Testimonials = () => {
  const [testimonialList, setTestimonialList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/testimonials")
      .then((response) => {
        setTestimonialList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
