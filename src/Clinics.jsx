import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ClinicCarousel from "./Components/ClinicCarousel";
import "./Clinics.css";

export default function Clinics() {
  const imagePaths = [
    "/clinics/1.jpeg",
    "/clinics/2.jpg",
    "/clinics/3.jpg",
    "/clinics/4.jpg",
  ];

  return (
    <>
      <Navbar />
      <main className="main-clinic">
        <section className="carousel-container">
          {" "}
          <ClinicCarousel images={imagePaths} />
        </section>
        <section className="clinic-text">
          <p>World-class clinics with the best doctors in the country.</p>
          <p>Top quality equipment and state-of-the-art facilities.</p>
          <p>Our clinics are conveniently located and easily accessible.</p>
          <p>We prioritize patient comfort and safety above all else.</p>

          <p>
            We offer a wide range of services to cater to various medical needs.
          </p>
          <p>
            Contact us today to schedule an appointment or learn more about our
            services.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
