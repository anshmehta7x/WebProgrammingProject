import './Navbar.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Med<em>Search</em></div>
      <div className="nav-buttons">
        <button className="nav-button">Find Doctors</button>
        <button className="nav-button">About</button>
      </div>
    </nav>
  );
}

export default Navbar;
