import { useState } from "react";
import axios from "axios";
import "./AddTestimonialPopup.css";

export default function AddTestimonialPopup({ showPopup, setShowPopup }) {
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:4000/testimonials", {
        name: name,
        text: text,
      })
      .then(() => {
        setShowPopup(false);
        setName("");
        setText("");
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
              Testimonial:
              <input
                type="text"
                value={text}
                onChange={(event) => setText(event.target.value)}
              />
            </label>
            <button className="add-testimonial-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
