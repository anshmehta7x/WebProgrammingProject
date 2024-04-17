import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        Med<em>Search</em>
      </div>
      <div className="nav-buttons">
        <NavLink
          to="/testimonials"
          className="nav-button"
          activeClassName="active-link"
        >
          Testimonials
        </NavLink>
        <NavLink
          to="/find"
          className="nav-button"
          activeClassName="active-link"
        >
          Find Doctors
        </NavLink>
        <NavLink
          to="/about"
          className="nav-button"
          activeClassName="active-link"
        >
          About
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
