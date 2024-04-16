import { Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import "./Dashboard.css";
import Find from "./Find";
import Footer from "./Components/Footer";

function Dashboard() {
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
            src="/doctor-graphic.png"
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
