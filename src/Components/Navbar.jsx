import './Navbar.css'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Med<em>Search</em></div>
      <div className="nav-buttons">
        <Link to="/testimonials" className="nav-button">Testimonials</Link>
        <Link to="/find" className="nav-button">Find Doctors</Link>
        <Link to="/about" className="nav-button">About</Link>
        
      </div>
    </nav>
  );
}

export default Navbar;
