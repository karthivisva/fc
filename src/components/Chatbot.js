import React, { useState, useEffect } from "react";
import "./Chatbot.css";
import { FaRobot, FaUndo, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hi! How can I help you today?", sender: "bot", buttons: ["Find Courses", "Admission Process", "Scholarships", "Need Guidance"] }
  ]);

  // Handle user message
  const handleUserMessage = (message) => {
    const newMessages = [...messages, { text: message, sender: "user" }];
    setMessages(newMessages);

    // Handle bot responses
    setTimeout(() => {
      const botResponse = getBotResponse(message);
      setMessages([...newMessages, botResponse]);
    }, 800);
  };

  // Get bot response based on user input
  const getBotResponse = (message) => {
    const responses = {
      "Find Courses": { text: "Sure! What field are you interested in?", buttons: ["Science", "Commerce", "Arts"] },
      
      "Science": { 
        text: "Top courses: Engineering, Medicine, AI, Biotechnology. Need college recommendations?", 
        formLink: "https://forms.gle/sVytTHhdnVCeTTLk7",
        buttons: ["Yes", "No"] 
      },

      "Commerce": { text: "Top courses: CA, BBA, Finance, Economics. Want job-oriented courses?", buttons: ["Yes", "No"] },
      "Arts": { text: "Top courses: Journalism, Fashion Design, Psychology. Need college options?", buttons: ["Yes", "No"] },
      
      "Admission Process": { text: "Do you want details for Engineering, Medical, or General admissions?", buttons: ["Engineering", "Medical", "General"] },
      
      "Scholarships": { text: "Scholarships available: AICTE, National Scholarship Scheme. Need eligibility details?", buttons: ["Yes", "No"] },
      "Yes": { text: "Here are the AICTE scholarships available:", buttons: ["Pragati", "Saksham", "GATE/GPAT", "Doctoral Fellowship", "PMSSS", "Swanath"] },
      "Pragati": { text: "AICTE Pragati Scholarship: ₹50,000 per year for female students in technical courses. Family income < ₹8,00,000. Two girls per family can apply.", buttons: ["More Scholarships"] },
      "Saksham": { text: "AICTE Saksham Scholarship: ₹50,000 per year for differently-abled students (min 40% disability) in technical courses. Family income < ₹8,00,000.", buttons: ["More Scholarships"] },
      "GATE/GPAT": { text: "AICTE GATE/GPAT Scholarship: ₹12,400/month for M.E./M.Tech./M.Pharm students with a valid GATE/GPAT score.", buttons: ["More Scholarships"] },
      "Doctoral Fellowship": { text: "AICTE National Doctoral Fellowship: ₹28,000/month for Ph.D. in AICTE-approved institutions. Requires GATE/GPAT score & min CGPA of 7.5.", buttons: ["More Scholarships"] },
      "PMSSS": { text: "AICTE PMSSS: Covers tuition fees (up to ₹3,00,000) & ₹1,00,000 for maintenance for J&K students pursuing higher education outside J&K.", buttons: ["More Scholarships"] },
      "Swanath": { text: "AICTE Swanath Scholarship: ₹50,000/year for orphans, children of COVID-19 victims, and wards of martyred personnel. Family income < ₹8,00,000.", buttons: ["More Scholarships"] },
      "More Scholarships": { text: "Want to apply? Visit AICTE's official portal: https://fellowship.aicte-india.org/", formLink: "https://fellowship.aicte-india.org/" },

      "Engineering": { text: "Contact Our Team 9952601489", buttons: ["More Info"] },
      "Medical": { text: "For Medical, NEET is mandatory. Govt colleges require high scores.", buttons: ["More Info"] },
      "General": { text: "Most colleges require online registration. Some conduct entrance exams.", buttons: ["More Info"] },
      
      "Need Guidance": { text: "Fill out this form and our team will assist you:", formLink: "https://forms.gle/JrycdKbHm9YW2ig89" },
      "Reset": { text: "Chat reset! How can I assist you today?", buttons: ["Find Courses", "Admission Process", "Scholarships", "Need Guidance"] }
    };

    return responses[message] || { text: "Sorry, I don't understand. Can you ask something else? Fill this form:", formLink: "https://forms.gle/JrycdKbHm9YW2ig89" };
  };

  return (
    <>
      {/* Chatbot Toggle Icon */}
      <div className="chatbot-icon" onClick={() => setIsOpen(!isOpen)}>
        <FaRobot size={30} />
      </div>

      {/* Chatbot Window */}
      <div className={`chatbot-container ${isOpen ? "open" : ""}`}>
        <div className="chatbot-header">
          <span>Future Compass Bot</span>
          <FaUndo className="reset-icon" onClick={() => handleUserMessage("Reset")} />
          <FaTimes className="close-icon" onClick={() => setIsOpen(false)} />
        </div>

        <div className="chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.sender}`}>
              {msg.text}
              
              {/* If there's a form link, show it */}
              {msg.formLink && (
                <p>
                  <a href={msg.formLink} target="_blank" rel="noopener noreferrer" className="form-link">
                    Click here to apply
                  </a>
                </p>
              )}

              {/* If there are buttons, display them */}
              {msg.buttons && (
                <div className="button-options">
                  {msg.buttons.map((btn, idx) => (
                    <button key={idx} onClick={() => handleUserMessage(btn)}>
                      {btn}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Chatbot;
