import React, { useState } from "react";
import AvailableCourses from "./AvailableCourses"; // Import AvailableCourses Component

const Courses = () => {
  const [stream, setStream] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [marks, setMarks] = useState({});
  const [cutoff, setCutoff] = useState(null);
  const [suggestedCourses, setSuggestedCourses] = useState([]);

  const streamOptions = ["Engineering CutOff", "Arts", "Vocational"];

  const subjectOptions = {
    Science: ["Maths", "Biology", "Physics", "Chemistry"],
    Commerce: ["Accountancy", "Economics", "Business Studies", "Maths"],
    Arts: ["History", "Political Science", "Psychology", "English"],
    Vocational: ["Hotel Management", "Fashion Design", "ITI Courses"],
  };

  const courseSuggestions = {
    Science: {
      "Maths+Physics+Chemistry": ["Engineering", "Pure Science", "IT & Computer Science"],
      "Biology+Physics+Chemistry": ["Medical", "Biotechnology"],
      "Maths+Biology+Physics+Chemistry": ["Medical", "Engineering", "Biotechnology"],
      "Maths+Computer Science+Physics+Chemistry": ["Engineering", "AI & Data Science", "IT"],
    },
    Commerce: ["B.Com", "BBA", "CA", "CS", "Economics"],
    Arts: ["BA History", "BA English", "Political Science", "Psychology"],
    Vocational: ["Diploma in Hotel Management", "Fashion Design", "ITI Courses"],
  };

  const handleStreamChange = (e) => {
    setStream(e.target.value);
    setSubjects([]);
    setMarks({});
    setCutoff(null);
    setSuggestedCourses([]);
  };

  const handleSubjectChange = (subject) => {
    setSubjects((prev) =>
      prev.includes(subject) ? prev.filter((s) => s !== subject) : [...prev, subject]
    );
  };

  const handleMarksChange = (e) => {
    const { name, value } = e.target;
    if (value === "" || (/^\d{1,3}$/.test(value) && Number(value) <= 100)) {
      setMarks({ ...marks, [name]: value });
    }
  };

  const calculateCutoff = () => {
    if (stream !== "Engineering CutOff") return;
    const math = Number(marks.Maths) || 0;
    const physics = Number(marks.Physics) || 0;
    const chemistry = Number(marks.Chemistry) || 0;
    const biology = Number(marks.Biology) || 0;

    let cutoffValue = 0;
    if (subjects.includes("Maths") && subjects.includes("Biology")) {
      cutoffValue = Math.max(math, biology) + (physics / 2) + (chemistry / 2);
    } else if (subjects.includes("Maths")) {
      cutoffValue = math + (physics / 2) + (chemistry / 2);
    } else if (subjects.includes("Biology")) {
      cutoffValue = biology + (physics / 2) + (chemistry / 2);
    }

    setCutoff(cutoffValue.toFixed(2));

    const selectedKey = subjects.sort().join("+");
    setSuggestedCourses(courseSuggestions.Science[selectedKey] || []);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Find Your Best Course</h2>

        <select value={stream} onChange={handleStreamChange} style={styles.select}>
          <option value="">-- Select Your Stream --</option>
          {streamOptions.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>

        {stream === "Engineering CutOff" && (
          <>
            <h4>Select Your Subjects:</h4>
            <h5>For Engineering Cutoff Select Maths, Physics, Chemistry</h5>
            <h5>For Medical Cutoff Select Biology, Physics, Chemistry</h5>
            <div style={styles.subjectContainer}>
              {subjectOptions.Science.map((subject) => (
                <label key={subject} style={styles.checkboxLabel}>
                  <input type="checkbox" checked={subjects.includes(subject)} onChange={() => handleSubjectChange(subject)} />
                  {subject}
                </label>
              ))}
            </div>

            {subjects.map((subject) => (
              <input key={subject} type="text" name={subject} value={marks[subject] || ""} onChange={handleMarksChange} placeholder={`${subject} Marks`} style={styles.input} />
            ))}

            <button onClick={calculateCutoff} style={styles.button}>Calculate Cutoff</button>
          </>
        )}

        {cutoff !== null && <h3 style={styles.cutoffText}>Your Cutoff: {cutoff}</h3>}
      </div>

      {/* Display Available Courses */}
      <AvailableCourses suggestedCourses={suggestedCourses} />
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background
    backdropFilter: "blur(15px)", // Glassmorphism effect
    minHeight: "100vh",
    marginTop: 80,
  },
  card: {
    maxWidth: "500px",
    margin: "auto",
    padding: "20px",
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent for glass effect
    backdropFilter: "blur(25px)",
    borderRadius: "15px",
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.3)",
  },
  title: {
    color: "#1976d2",
    fontWeight: "bold",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "black",
  },
  subjectContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "10px",
  },
  checkboxLabel: {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    color: "black",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "5px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    background: "rgba(255, 255, 255, 0.1)",
    color: "black",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "rgba(25, 118, 210, 0.8)",
    color: "white",
    border: "none",
    borderRadius: "8px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0px 4px 10px rgba(25, 118, 210, 0.3)",
    transition: "background 0.3s ease-in-out, transform 0.2s ease-in-out",
  },
  cutoffText: {
    color: "#ffeb3b",
    marginTop: "10px",
    fontWeight: "bold",
  },
};

export default Courses;
