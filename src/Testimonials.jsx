import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./Testimonials.css";
import TestimonialCard from "./Components/TestimonialCard";
import axios from "axios";
import AddTestimonialPopup from "./Components/AddTestimonialPopup";

const Testimonials = () => {
  const [testimonialList, setTestimonialList] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/testimonials")
      .then((response) => {
        setTestimonialList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [showPopup]);

  return (
    <>
      <Navbar />
      <AddTestimonialPopup showPopup={showPopup} setShowPopup={setShowPopup} />
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
          <button
            className="add-testimonial-button"
            onClick={() => setShowPopup(true)}
          >
            Submit Review
          </button>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Testimonials;
