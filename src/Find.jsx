import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import DoctorBox from "./Components/DoctorBox";
import { useState, useEffect } from "react";
import axios from "axios";
import "./Find.css";
import AddDoctorPopup from "./Components/AddDoctorPopup";

export default function Find() {
  const [doctorData, setDoctorData] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:4000/doctors")
      .then((response) => {
        setDoctorData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [showPopup]);

  return (
    <>
      <Navbar />

      <main>
        <div className="top">
          <h1 className="heading">
            The Best Doctors, right at your fingertips
          </h1>
          <button
            className="add-doctor-button"
            onClick={() => {
              setShowPopup(true);
            }}
          >
            Recommend a doctor here !
          </button>
        </div>
        <section className="all-doctors">
          {doctorData.map((doctor, index) => (
            <DoctorBox
              key={index}
              name={doctor.name}
              specialty={doctor.specialty}
              location={doctor.location}
              rating={doctor.rating}
              phoneNumber={doctor.phoneNumber}
            />
          ))}
        </section>
      </main>
      <Footer />
      <AddDoctorPopup showPopup={showPopup} setShowPopup={setShowPopup} />
    </>
  );
}
