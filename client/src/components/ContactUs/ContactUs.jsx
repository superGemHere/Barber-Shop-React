"use client"

import "./contactUs.css"

export default function ContactUs() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Thank you for your message! We'll get back to you soon.")
  }

  return (
    <main className="contact-us">
      <div className="contact-container">
        <div className="contact-header">
          <h1 className="contact-title">Get In Touch</h1>
          <p className="contact-subtitle">
            Ready for your next great look? Contact us to schedule an appointment or ask any questions. We're here to
            help you look and feel your best.
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" />
                  </svg>
                </div>
                <h3 className="info-title">Phone</h3>
              </div>
              <div className="info-content">
                <p>Give us a call to book your appointment or ask any questions.</p>
                <a href="tel:+359878791326" className="phone-number">
                  +359 878 791 326
                </a>
              </div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" />
                  </svg>
                </div>
                <h3 className="info-title">Location</h3>
              </div>
              <div className="info-content">
                <p>Visit us at our modern barbershop in the heart of the city.</p>
                <p>
                  Compass Barber Shop
                  <br />
                  City Center Location
                </p>
              </div>
            </div>

            <div className="info-card">
              <div className="info-header">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18,8H6V6H18V8M18,13H6V11H18V13M18,18H6V16H18V18M21,4V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H19A2,2 0 0,1 21,4M19,4H5V20H19V4Z" />
                  </svg>
                </div>
                <h3 className="info-title">Follow Us</h3>
              </div>
              <div className="info-content">
                <p>Stay connected with us on social media for updates and inspiration.</p>
                <div className="social-links">
                  <a
                    href="https://www.instagram.com/compass.barbershop/?hl=bg"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100057548600653"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form">
            <h2 className="form-title">Send us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="Enter your phone number"
                />
              </div>

              <div className="form-group">
                <label htmlFor="service" className="form-label">
                  Service Interest
                </label>
                <select id="service" name="service" className="form-input">
                  <option value="">Select a service</option>
                  <option value="haircut">Haircut</option>
                  <option value="beard">Beard Trimming</option>
                  <option value="styling">Hair Styling</option>
                  <option value="package">Complete Package</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your preferred appointment time, specific requests, or any questions you have..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="hours-section">
          <div className="hours-card">
            <h3 className="hours-title">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
              </svg>
              Opening Hours
            </h3>
            <ul className="hours-list">
              <li className="hours-item">
                <span className="hours-day">Monday</span>
                <span className="hours-time">9:00 AM - 7:00 PM</span>
              </li>
              <li className="hours-item">
                <span className="hours-day">Tuesday</span>
                <span className="hours-time">9:00 AM - 7:00 PM</span>
              </li>
              <li className="hours-item">
                <span className="hours-day">Wednesday</span>
                <span className="hours-time">9:00 AM - 7:00 PM</span>
              </li>
              <li className="hours-item">
                <span className="hours-day">Thursday</span>
                <span className="hours-time">9:00 AM - 7:00 PM</span>
              </li>
              <li className="hours-item">
                <span className="hours-day">Friday</span>
                <span className="hours-time">9:00 AM - 8:00 PM</span>
              </li>
              <li className="hours-item">
                <span className="hours-day">Saturday</span>
                <span className="hours-time">8:00 AM - 6:00 PM</span>
              </li>
              <li className="hours-item">
                <span className="hours-day">Sunday</span>
                <span className="hours-time closed">Closed</span>
              </li>
            </ul>
          </div>

          <div className="hours-card">
            <h3 className="hours-title">
              <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
              </svg>
              Book Appointment
            </h3>
            <div className="info-content">
              <p>Call us or visit in person to schedule your appointment. Walk-ins welcome based on availability.</p>
              <a href="tel:+359878791326" className="phone-number">
                +359 878 791 326
              </a>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Ready to Look Your Best?</h2>
          <p className="cta-description">
            Experience professional barbering at its finest. Book your appointment today and discover the Compass
            difference.
          </p>
          <a href="tel:+359878791326" className="cta-button">
            Call Now: +359 878 791 326
          </a>
        </div>
      </div>
    </main>
  )
}
