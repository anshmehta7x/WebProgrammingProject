import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import "./About.css";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <section>
          <div>
            <img src="/public/doctor-with-stethoscope.jpg"></img>
          </div>
          <div>
            <p>
              MedSearch is a comprehensive online directory that helps patients
              find and learn about medical doctors and healthcare providers in
              their local area.
            </p>
          </div>
        </section>
        <section>
          <div>
            <p>
              Our mission is to make it easier for people to access important
              information about physicians' qualifications, specialties, office
              locations, and patient ratings.
            </p>
          </div>
          <div>
            <img src="/doctor-checking-medical-condition-patient.jpg"></img>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
