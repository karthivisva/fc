import React from "react";
import "./CallToAction.css"; // Import CSS

const CallToAction = () => {
  return (
    <div className="cta-container">
      <h2 className="cta-title">Your Future Starts Here!</h2>
      <p className="cta-text">
        Find the best courses and colleges that match your dreams. Start your journey with Future Compass today!
      </p>
      <a href="https://forms.gle/JrycdKbHm9YW2ig89" target="_blank" rel="noopener noreferrer">
  <button className="cta-button">Get Started</button>
</a>
    </div>
  );
};

export default CallToAction;
