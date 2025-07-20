import "./aboutUs.css"

export default function AboutUs() {
  return (
    <main className="about-us">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">About Compass</h1>
          <p className="about-subtitle">
            Where tradition meets innovation. We're not just a barbershop – we're craftsmen dedicated to the art of
            grooming, creating experiences that go beyond the ordinary.
          </p>

          <div className="about-stats">
            <div className="stat-card">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">2K+</span>
              <span className="stat-label">Happy Clients</span>
            </div>
            <div className="stat-card">
              <span className="stat-number">15+</span>
              <span className="stat-label">Services</span>
            </div>
          </div>
        </div>

        <div className="about-content">
          <div className="section-card">
            <h2 className="section-title">Our Story</h2>
            <p className="section-text">
              <span className="highlight">Compass Barbershop</span> was founded on the belief that a haircut is not just
              a service but a personal experience. What started as a vision to create a space where style meets
              tradition has evolved into a destination where every client becomes part of our family. With{" "}
              <span className="highlight">over 4 years</span> of dedicated service to our community, we have become more
              than just a barbershop. We're a place where stories are shared, friendships are forged, and confidence is
              built one cut at a time.
            </p>
          </div>

          <div className="section-card">
            <h2 className="section-title">Our Values</h2>
            <div className="values-grid">
              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z" />
                  </svg>
                </div>
                <h3 className="value-title">Precision</h3>
                <p className="value-description">
                  Every cut, every trim, every detail is executed with meticulous attention to precision.
                </p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                  </svg>
                </div>
                <h3 className="value-title">Passion</h3>
                <p className="value-description">
                  Our love for the craft drives everything we do. Passion is the foundation of our artistry.
                </p>
              </div>

              <div className="value-item">
                <div className="value-icon">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16,12A2,2 0 0,1 18,10A2,2 0 0,1 20,12A2,2 0 0,1 18,14A2,2 0 0,1 16,12M10,12A2,2 0 0,1 12,10A2,2 0 0,1 14,12A2,2 0 0,1 12,14A2,2 0 0,1 10,12M4,12A2,2 0 0,1 6,10A2,2 0 0,1 8,12A2,2 0 0,1 6,14A2,2 0 0,1 4,12Z" />
                  </svg>
                </div>
                <h3 className="value-title">Community</h3>
                <p className="value-description">We're more than a business – we're a cornerstone of our community.</p>
              </div>
            </div>
          </div>

          <div className="section-card">
            <h2 className="section-title">Meet Our Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">M</div>
                <h3 className="member-name">Master Barber</h3>
                <p className="member-role">Lead Stylist & Owner</p>
                <p className="member-bio">
                  With over 8 years of experience, combining traditional techniques with modern innovation.
                </p>
              </div>

              <div className="team-member">
                <div className="member-avatar">S</div>
                <h3 className="member-name">Senior Stylist</h3>
                <p className="member-role">Beard Specialist</p>
                <p className="member-bio">
                  Specializing in beard grooming and facial hair styling with precision and artistry.
                </p>
              </div>

              <div className="team-member">
                <div className="member-avatar">J</div>
                <h3 className="member-name">Junior Barber</h3>
                <p className="member-role">Modern Cuts Expert</p>
                <p className="member-bio">Fresh talent with a passion for contemporary styles and latest trends.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2 className="cta-title">Experience the Difference</h2>
          <p className="cta-description">
            Ready to experience professional barbering at its finest? Book your appointment today and discover why we're
            the preferred choice for discerning gentlemen.
          </p>
          <a href="tel:+359878791326" className="cta-button">
            Call Now: +359 878 791 326
          </a>
        </div>
      </div>
    </main>
  )
}
