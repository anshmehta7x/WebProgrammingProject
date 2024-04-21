import "./DoctorBox.css";

export default function DoctorBox(props) {
  return (
    <div className="doctor-box">
      <img
        src="https://i.pinimg.com/736x/59/2c/38/592c38b1d9e515e5039329bb9f562448.jpg"
        alt="doctor-image"
      ></img>
      <div className="doctor-info">
        <div className="doctor-name">{props.name}</div>
        <div className="doctor-specialty">{props.specialty}</div>
        <div className="doctor-location">{props.location}</div>
        <div className="doctor-rating">{props.rating}</div>{" "}
        <div className="doctor-rating">{props.phoneNumber}</div>
      </div>
    </div>
  );
}
