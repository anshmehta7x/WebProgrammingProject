import "./TestimonialCard.css";

export default function TestimonialCard(props) {
  return (
    <div className="testimonial-card">
      <p className="testimonial-text">
        {"'"}
        {props.text}
        {"'"}
      </p>
      <p className="testimonial-author">- {props.name} </p>
    </div>
  );
}
