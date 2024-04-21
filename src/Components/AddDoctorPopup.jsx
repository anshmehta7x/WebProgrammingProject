import { useState } from "react";
import axios from "axios";
import "./AddDoctorPopup.css";

export default function AddDoctorPopup({ showPopup, setShowPopup }) {
  const [name, setName] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [location, setLocation] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/doctors", {
        name: name,
        specialty: specialty,
        location: location,
        rating: rating,
      })
      .then(() => {
        setShowPopup(false);
        setName("");
        setSpecialty("");
        setLocation("");
        setRating("");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      {showPopup && (
        <div className="popup">
          <button className="close-button" onClick={() => setShowPopup(false)}>
            X
          </button>
          <form onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </label>
            <label>
              Specialty:
              <input
                type="text"
                value={specialty}
                onChange={(event) => setSpecialty(event.target.value)}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                value={location}
                onChange={(event) => setLocation(event.target.value)}
              />
            </label>
            <label>
              Rating:
              <input
                type="text"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
              />
            </label>
            <button className="submit-doctor-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
