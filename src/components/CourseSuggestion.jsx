import React, { useState } from "react";
import "./CourseSuggestion.css";

const courseRecommendations = {
  Science: ["Computer Science", "Biotechnology", "Physics", "Chemistry"],
  Business: ["Finance", "Marketing", "Entrepreneurship", "Accounting"],
  Arts: ["Graphic Design", "Film Making", "Music", "Fine Arts"],
  Technology: ["AI & ML", "Cybersecurity", "Data Science", "Software Development"],
};

const CourseSuggestion = () => {
  const [selectedField, setSelectedField] = useState("");
  const [suggestedCourses, setSuggestedCourses] = useState([]);

  const handleSelection = (field) => {
    setSelectedField(field);
    setSuggestedCourses(courseRecommendations[field] || []);
  };

  return (
    <section className="course-suggestion">
      <h2>Find Your Perfect Course</h2>
      <p>Which field interests you the most?</p>
      <div className="buttons-container">
        {Object.keys(courseRecommendations).map((field) => (
          <button key={field} onClick={() => handleSelection(field)} className="field-btn">
            {field}
          </button>
        ))}
      </div>

      {selectedField && (
        <div className="suggested-courses">
          <h3>Recommended Courses in {selectedField}:</h3>
          <ul>
            {suggestedCourses.map((course, index) => (
              <li key={index}>{course}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default CourseSuggestion;
