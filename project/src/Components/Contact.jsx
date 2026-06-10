import './Contact.css';
import contactImage from '../assets/contact_us.jpg';  // Replace with the actual image path
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram } from 'react-icons/fa'; // Import icons

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Left Section: Image */}
      <div className="contact-image">
        <img src={contactImage} alt="Contact" className="contact-img" />
      </div>

      {/* Right Section: Content */}
      <div className="contact-content">
        <h1 className="contact-title">Contact Us</h1>
        <p className="contact-subtitle">We&apos;d love to hear from you!</p>
        <form className="contact-form">
          <label htmlFor="name" className="contact-label">Name</label>
          <input type="text" id="name" name="name" className="contact-input" />

          <label htmlFor="email" className="contact-label">Email</label>
          <input type="email" id="email" name="email" className="contact-input" />

          <label htmlFor="message" className="contact-label">Message</label>
          <textarea id="message" name="message" className="contact-textarea"></textarea>

          <button type="submit" className="contact-submit">Send Message</button>
        </form>

        {/* Social Media Links */}
        <div className="social-media">
          <h2 className="social-title">Follow Us</h2>
          <div className="social-icons">
            <a href="mailto:23ca032.husen@sjec.ac.in" className="social-icon">
              <FaEnvelope />
            </a>

            <a href="https://wa.me/8867518213" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaWhatsapp />
            </a>
            <a href="https://www.linkedin.com/in/husen-basha-a677761b6/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
