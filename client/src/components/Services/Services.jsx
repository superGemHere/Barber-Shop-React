"use client"

import "./services.css"
import { useNavigate } from "react-router-dom"

export default function Services() {
  const navigate = useNavigate()

  return (
    <main className="services">
      <div className="servicesParentContainer">
        <div className="services-header">
          <h1 className="services-title">Our Services</h1>
          <p className="services-subtitle">
            Experience premium grooming services crafted by skilled professionals. Each service is tailored to enhance
            your style and confidence.
          </p>
        </div>

        <div className="servicesChildContainer">
          <div className="serviceCard haircuts" onClick={() => navigate("/services/haircuts")}>
            <div className="service-content">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A2,2 0 0,1 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4A2,2 0 0,1 12,2M21,9V7L15,1H9V3H7V1H5V4H7V6H9V7L3,9V11L9,13V15H7V18H9V20H7V22H9V19H15V22H17V20H15V18H17V15H15V13L21,11V9Z" />
                </svg>
              </div>
              <h2 className="service-title">Haircuts</h2>
              <p className="service-description">
                From classic cuts to modern styles, our expert barbers create the perfect look for every client.
              </p>
              <span className="service-cta">
                View Prices
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="serviceCard beardTrimming" onClick={() => navigate("/services/beard-trimming")}>
            <div className="service-content">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M12,8C14.21,8 16,9.79 16,12V14C16,15.1 15.1,16 14,16H13V18C13,19.1 12.1,20 11,20H10C8.9,20 8,19.1 8,18V16H7C5.9,16 5,15.1 5,14V12C5,9.79 6.79,8 9,8H12Z" />
                </svg>
              </div>
              <h2 className="service-title">Beard Trimming</h2>
              <p className="service-description">
                Professional beard grooming and shaping services to maintain your perfect facial hair style.
              </p>
              <span className="service-cta">
                View Prices
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="serviceCard wax" onClick={() => navigate("/services/other-services")}>
            <div className="service-content">
              <div className="service-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6Z" />
                </svg>
              </div>
              <h2 className="service-title">Premium Services</h2>
              <p className="service-description">
                Additional grooming services including styling, treatments, and premium care packages.
              </p>
              <span className="service-cta">
                View Prices
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
