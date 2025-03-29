import React from "react";
import Slider from "react-slick";
import { Laptop, Wrench, Stethoscope, BarChart, BrainCircuit, Palette } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/PopularCourses.css"; // Import CSS for styling

const courses = [
  { name: "Computer Science", icon: <Laptop size={50} />, className: "cs-bg" },
  { name: "Engineering", icon: <Wrench size={50} />, className: "eng-bg" },
  { name: "Medical", icon: <Stethoscope size={50} />, className: "med-bg" },
  { name: "Business", icon: <BarChart size={50} />, className: "bus-bg" },
  { name: "Data Science", icon: <BrainCircuit size={50} />, className: "data-bg" },
  { name: "Arts & Humanities", icon: <Palette size={50} />, className: "arts-bg" },
];

const PopularCourses = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768, // Tablets
        settings: { slidesToShow: 1 },
      },
      {
        breakpoint: 480, // Mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="popular-courses-container">
      <h2 className="title">Popular Courses & Career Paths</h2>
      <Slider {...settings}>
        {courses.map((course, index) => (
          <div key={index} className="course-card-container">
            <div className={`course-card ${course.className}`}>
              <div className="course-icon">{course.icon}</div>
              <p className="course-name">{course.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PopularCourses;
