import { Link, useNavigate } from "react-router-dom";
import { useUser, SignOutButton } from "@clerk/clerk-react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import "../styles/Navbar.css";
import logo from "../images/logo.png";

const Navbar = () => {
  const { isSignedIn, user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleProtectedClick = (path) => {
    if (isSignedIn) {
      navigate(path);
    } else {
      navigate("/login");
    }
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      {/* Left Section: Logo */}
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="brand-name">FUTURE COMPASS</h1>
      </div>

      {/* Center: Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "show-menu" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>HOME</Link></li>
        <li><span onClick={() => handleProtectedClick("/courses")} className="nav-link">COURSES</span></li>
        <li><span onClick={() => handleProtectedClick("/contact")} className="nav-link">COLLEGES</span></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>CONTACT</Link></li>

        {/* Mobile Authentication Section - Only in Mobile Menu */}
        {menuOpen && (
          <div className="mobile-auth">
            {isSignedIn ? (
              <div className="user-info">
                <span className="user-name">Hi, {user?.username || "User"}!</span>

                <SignOutButton>
                  <button className="signout-btn">Sign Out</button>
                </SignOutButton>
              </div>
            ) : (
              <>
                <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link to="/register" className="register-btn" onClick={() => setMenuOpen(false)}>Register</Link>
              </>
            )}
          </div>
        )}
      </ul>

      {/* Right Section: Authentication (Only for Desktop) */}
      {!menuOpen && (
        <div className="auth-section">
          {isSignedIn ? (
            <div className="user-info">
             <span className="user-name">Hi, {user?.username || "User"}!</span>

              <SignOutButton>
                <button className="signout-btn">Sign Out</button>
              </SignOutButton>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="login-btn">Login</Link>
              <Link to="/register" className="register-btn">Register</Link>
            </div>
          )}
        </div>
      )}

      {/* Mobile Menu Button */}
      <div className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Close Menu on Background Click */}
      {menuOpen && <div className="blur-overlay" onClick={() => setMenuOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;
