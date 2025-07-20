"use client"

import "./home.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import AuthContext from "../../contexts/authContext"

export default function Home() {
  const { isAuthenticated } = useContext(AuthContext)

  return (
    <main className="home">
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2L13.09,8.26L22,9L14,14L17,22L12,18L7,22L10,14L2,9L10.91,8.26L12,2Z" />
              </svg>
              Premium Barber Shop
            </div>

            <h1 className="hero-title">
              Where Style Meets <span className="accent">Tradition</span>
            </h1>

            <p className="hero-description">
              Experience the art of traditional barbering with modern techniques. Our skilled barbers craft personalized
              styles that reflect your unique personality and lifestyle.
            </p>

            <div className="hero-actions">
              <Link to="/services" className="btn btn-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A2,2 0 0,1 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4A2,2 0 0,1 12,2M21,9V7L15,1H9V3H7V1H5V4H7V6H9V7L3,9V11L9,13V15H7V18H9V20H7V22H9V19H15V22H17V20H15V18H17V15H15V13L21,11V9Z" />
                </svg>
                Book Service
              </Link>

              <Link to="/gallery" className="btn btn-secondary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9,12A3,3 0 0,0 12,9A3,3 0 0,0 9,6A3,3 0 0,0 6,9A3,3 0 0,0 9,12M9,20L2.5,16.5L2.5,14L9,17.5L15.5,14L15.5,16.5L9,20M18,14V20H16V16H13L16.03,12.97C16.5,11.73 17.68,11 19,11A3,3 0 0,1 22,14A3,3 0 0,1 19,17C18.4,17 17.85,16.87 17.35,16.65L17.35,16.65L15,19H18V20H13V14H18Z" />
                </svg>
                View Gallery
              </Link>
            </div>

            <div className="hero-stats">
              <div className="stat-item">
                <span className="stat-number">4+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Happy Clients</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-container">
              <img
                src="https://images.newrepublic.com/9bba0e56c589fb3e06191969202abb446327a86a.jpeg?auto=format&fit=crop&crop=faces&q=65&w=1000&ar=3%3A2&ixlib=react-9.10.0"
                alt="Professional barber at work"
                className="hero-image"
              />
            </div>
            <div className="hero-decorations">
              <div className="decoration"></div>
              <div className="decoration"></div>
              <div className="decoration"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">Why Choose Compass?</h2>
            <p className="features-subtitle">
              We combine traditional barbering techniques with modern style to deliver exceptional results
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A2,2 0 0,1 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4A2,2 0 0,1 12,2M21,9V7L15,1H9V3H7V1H5V4H7V6H9V7L3,9V11L9,13V15H7V18H9V20H7V22H9V19H15V22H17V20H15V18H17V15H15V13L21,11V9Z" />
                </svg>
              </div>
              <h3 className="feature-title">Expert Barbers</h3>
              <p className="feature-description">
                Our skilled professionals have years of experience in traditional and modern barbering techniques
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2L13.09,8.26L22,9L14,14L17,22L12,18L7,22L10,14L2,9L10.91,8.26L12,2Z" />
                </svg>
              </div>
              <h3 className="feature-title">Premium Quality</h3>
              <p className="feature-description">
                We use only the finest products and tools to ensure the highest quality service for every client
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z" />
                </svg>
              </div>
              <h3 className="feature-title">Personalized Service</h3>
              <p className="feature-description">
                Every cut is tailored to your unique style, face shape, and personal preferences
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
