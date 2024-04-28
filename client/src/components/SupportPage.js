import React from 'react';
import "../styles.css"; 

const SupportPage = () => {
  return (
    <div className="support-container">
      <p>FAQs:</p>
      <ul>
        <li>How do I reset my password?</li>
        <li>Where can I view my financial reports?</li>
      </ul>
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default SupportPage;
