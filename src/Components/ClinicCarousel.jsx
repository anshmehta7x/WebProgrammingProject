import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function ClinicCarousel(props) {
  return (
    <div>
      <Carousel>
        {props.images.map((image, index) => (
          <div key={index}>
            <img src={image} alt="clinic" />
            <p className="legend">
              {"Clinic "}
              {index + 1}
            </p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
