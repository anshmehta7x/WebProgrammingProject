import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./Dashboard.css";
import Footer from "./Components/Footer";
import { useEffect, useState } from "react";

function Dashboard() {
  const images = [
    "/carousel/doc1.png",
    "/carousel/doc2.png",
    "/carousel/doc3.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((currentImageIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clean up on component unmount
  }, [currentImageIndex, images.length]);

  return (
    <>
      <Navbar />
      <main className="main-section">
        <section className="text-section">
          <h1 className="welcome">Welcome to MedSearch</h1>
          <p>Find the best doctors in your area</p>
          <button className="find-doctors">
            <Link
              to="/find"
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
            >
              Find Doctors
            </Link>
          </button>
        </section>
        <section className="image-section">
          <img
            src={images[currentImageIndex]}
            alt="doctor"
            className="doctor-graphic"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Dashboard;
