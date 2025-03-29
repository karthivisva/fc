import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { FaBars, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";
import "../styles/Navbar.css";
import logo from '../images/logo.png';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      Swal.fire({
        title: "Logged Out!",
        text: "You have successfully logged out.",
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });

      setMenuOpen(false);
    } catch (error) {
      Swal.fire({
        title: "Logout Failed!",
        text: error.message,
        icon: "error",
      });
    }
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand-name">FUTURE COMPASS</h1>
      </div>

      {/* Desktop Navigation */}
      <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
        <li><Link to="/courses" onClick={() => setMenuOpen(false)}>COURSES</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>COLLEGES</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
      </ul>

      {/* Auth Section for Desktop */}
      <div className="auth-buttons">
        {user ? (
          <button onClick={handleLogout} className="logout-btn">LOGOUT</button>
        ) : (
          <>
            <Link to="/login" className="login-btn">Login</Link>
            <Link to="/register" className="register-btn">Register</Link>
          </>
        )}
      </div>

      {/* Hamburger Menu Button (Mobile) */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Background Blur Overlay */}
      <div className={`blur-overlay ${menuOpen ? "show" : ""}`} onClick={() => setMenuOpen(false)}></div>

      {/* Mobile Navigation */}
      <ul className={`nav-links-mobile ${menuOpen ? "show" : ""}`}>
        {/* Close Button */}
        <span className="close-btn" onClick={() => setMenuOpen(false)}>
          <FaTimes />
        </span>

        <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
        <li><Link to="/courses" onClick={() => setMenuOpen(false)}>COURSES</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>COLLEGES</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>
        {user ? (
          <li><button onClick={handleLogout} className="logout-btn">LOGOUT</button></li>
        ) : (
          <>
            <li><Link to="/login" onClick={() => setMenuOpen(false)}>LOGIN</Link></li>
            <li><Link to="/register" onClick={() => setMenuOpen(false)}>REGISTER</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
