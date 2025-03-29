import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaBook, FaUsers, FaLightbulb, FaChartLine } from "react-icons/fa";
import image1 from "../images/img.1.jpg";
import image2 from "../images/img.2.jpg";

import PopularColleges from "../components/PopularColleges"; // Import Popular Colleges Section
import StatsSection from "../components/StatsSection"; // Import Stats Section
import "./Home.css";
import TrendingCourses from "../components/TrendingCourses";
import Chatbot from "./Chatbot";
import { FaPhoneAlt } from "react-icons/fa";
import PopularCourses from "./PopularCourses";
import KeyFeatures from "./KeyFeatures";
import CallToAction from "./CallToAction"; // Import Call to Action Section
// Image Slider Images
const images = [
  process.env.PUBLIC_URL + image2,
  process.env.PUBLIC_URL + image1,
  process.env.PUBLIC_URL + image2,
  process.env.PUBLIC_URL + image1,
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Popular Colleges & Courses Section */}
      <PopularColleges />

      {/* Dynamic Stats Section */}
      
      <Chatbot />
      
      {/* Get Started Buttons */}
      <div className="button-container">
        <button onClick={() => navigate("/contact")} className="get-started-btn">
          Find Colleges Now!
        </button>
      </div>
      <div className="button-container">
        <button onClick={() => navigate("/courses")} className="get-started-btn">
          Calculate My Cutoff
        </button>
      </div>

      {/* Why Choose Us Section */}
      <section className="why-choose">
        <h2>Why Choose Future Compass?</h2>
        <div className="features">
          <div className="feature">
            <FaBook className="feature-icon" />
            <h3>Wide Range of Courses</h3>
            <p>Explore multiple career options tailored for different student groups.</p>
          </div>
          <div className="feature">
            <FaUsers className="feature-icon" />
            <h3>Expert Guidance</h3>
            <p>Our recommendations are backed by experienced educators and professionals.</p>
          </div>
          <div className="feature">
            <FaLightbulb className="feature-icon" />
            <h3>Personalized Recommendations</h3>
            <p>Find courses based on your interests and skills for a brighter future.</p>
          </div>
          <div className="feature">
            <FaChartLine className="feature-icon" />
            <h3>Career Growth</h3>
            <p>Get insights on trending career paths and future job opportunities.</p>
          </div>
        </div>
      </section>
      <StatsSection />
      <KeyFeatures />
      <TrendingCourses />

      {/* Floating Contact Us (Mobile Icon) */}
      <MobileIcon />
      <PopularCourses/>
      <CallToAction/>
    </div>
    
  );
};

// Floating Mobile Icon Component
const MobileIcon = () => {
  return (
    <div 
      style={{
        backgroundColor: "green",
        borderRadius: "50%",
        width: "50px",
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        bottom: "20px",
        right: "20px",
        cursor: "pointer",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
        animation: "fadeInUp 0.6s ease-in-out forwards, pulseEffect 2s infinite",
        transition: "all 0.3s ease-in-out",
      }}
      onClick={() => window.location.href = "tel:+91 9952601489"} // Replace with your number
      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
    >
      <FaPhoneAlt color="white" size={25} />
    </div>
  );
};

export default Home;
