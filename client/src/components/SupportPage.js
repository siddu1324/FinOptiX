import React, { useState } from 'react';
import "../styles.css"; 

const SupportPage = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleToggle = index => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="support-page">
      <div className="faq-container">
        
        <h1 styles = "text-align : center ">Frequently Asked Questions</h1>
        <div className="accordion">
          <div className="accordion-item" onClick={() => handleToggle(0)}>
            <div className="accordion-title">How do I reset my password?</div>
            {activeIndex === 0 && (
              <div className="accordion-content">
                You can reset your password by going to your account settings and selecting 'Reset Password'.
              </div>
            )}
          </div>
          <div className="accordion-item" onClick={() => handleToggle(1)}>
            <div className="accordion-title">Where can I view my financial reports?</div>
            {activeIndex === 1 && (
              <div className="accordion-content">
                Your financial reports can be found in the 'Reports' section of the dashboard.
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="email" placeholder="Your Email" className="form-input" />
          <textarea placeholder="Your Message" className="form-textarea"></textarea>
          <button type="submit" className="form-button">Send</button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
