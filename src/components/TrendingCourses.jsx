import React from "react";
import "./TrendingCourses.css";

const trendingCareers = [
  { title: "Artificial Intelligence", description: "AI is transforming industries with automation and smart systems." },
  { title: "Data Science", description: "Big data and analytics drive decision-making in every field." },
  { title: "Cybersecurity", description: "Protecting digital assets is a top priority in the modern world." },
  { title: "Finance & Investment", description: "Finance professionals manage money, stocks, and investments." },
  { title: "UX/UI Design", description: "Design user-friendly experiences for digital platforms." },
];

const TrendingCourses = () => {
  return (
    <section className="trending-courses">
      <h2> Top 5 In-Demand Careers in 2025</h2>
      <div className="course-list">
        {trendingCareers.map((career, index) => (
          <div className="course-card" key={index}>
            <h3>{career.title}</h3>
            <p>{career.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCourses;
