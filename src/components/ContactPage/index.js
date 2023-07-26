import React from 'react';
import './index.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      <div className="contact-info">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need assistance, please don't hesitate to
          contact us.
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <span>Phone:</span>
            <p>+91 (123) 456-7890</p>
          </div>
          <div className="contact-item">
            <span>Email:</span>
            <p>info@gadwatch.com</p>
          </div>
          <div className="contact-item">
            <span>Address:</span>
            <p>123 Main St, City, Country</p>
          </div>
        </div>
      </div>
      <div className="contact-form">
        <h2>Send us a message</h2>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
