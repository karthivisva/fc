import React from "react";
import CountUp from "react-countup";
import "./StatsSection.css"; // Add CSS for styling

const StatsSection = () => {
  return (
    <section className="stats-section">
      <h2>Our Achievements</h2>
      <div className="stats-container">
        <div className="stat-box">
          <h3>
            <CountUp start={0} end={100} duration={3} />+
          </h3>
          <p>Colleges Listed</p>
        </div>
        <div className="stat-box">
          <h3>
            <CountUp start={0} end={500} duration={3} separator="," />+
          </h3>
          <p>Students Guided</p>
        </div>
        <div className="stat-box">
          <h3>
            <CountUp start={0} end={200} duration={3} />+
          </h3>
          <p>Courses Available</p>
        </div>
        <div className="stat-box">
          <h3>
            <CountUp start={0} end={95} duration={3} suffix="%" />
          </h3>
          <p>Success Rate</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
