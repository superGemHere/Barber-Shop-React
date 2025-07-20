"use client"

import "./gallery.css"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import * as postService from "../../services/postService"

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    postService
      .getAllPhotos()
      .then((result) => {
        setPhotos(result)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const isEmpty = photos.length === 0

  if (loading) {
    return (
      <main className="gallery">
        <div className="gallery-container">
          <div className="gallery-header">
            <h1 className="gallery-title">Loading Gallery...</h1>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="gallery">
      <div className="gallery-container">
        <div className="gallery-header">
          <h1 className="gallery-title">Style Gallery</h1>
          <p className="gallery-subtitle">
            Explore our collection of stunning transformations and artistic creations. Each photo represents a unique
            story of style and craftsmanship.
          </p>

          {!isEmpty && (
            <div className="gallery-stats">
              <div className="stat-item">
                <span className="stat-number">{photos.length}</span>
                <span className="stat-label">Photos</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2.5K</span>
                <span className="stat-label">Views</span>
              </div>
            </div>
          )}
        </div>

        {isEmpty ? (
          <div className="empty-gallery">
            <div className="empty-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,12A3,3 0 0,0 12,9A3,3 0 0,0 9,6A3,3 0 0,0 6,9A3,3 0 0,0 9,12M9,20L2.5,16.5L2.5,14L9,17.5L15.5,14L15.5,16.5L9,20M18,14V20H16V16H13L16.03,12.97C16.5,11.73 17.68,11 19,11A3,3 0 0,1 22,14A3,3 0 0,1 19,17C18.4,17 17.85,16.87 17.35,16.65L17.35,16.65L15,19H18V20H13V14H18Z" />
              </svg>
            </div>
            <h2 className="empty-title">No Photos Yet</h2>
            <p className="empty-description">
              Our gallery is waiting for amazing transformations. Be the first to share your style story!
            </p>
            <button className="add-photo-button" onClick={() => navigate("/gallery/add")}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
              </svg>
              Add Photo
            </button>
          </div>
        ) : (
          <div className="gallery-grid">
            {photos.map((currentPhoto) => (
              <div
                className="gallery-item"
                key={currentPhoto._id}
                onClick={() => navigate(`/gallery/details/${currentPhoto._id}`)}
              >
                <div className="image-container">
                  <img
                    src={currentPhoto.imageUrl || "/placeholder.svg?height=280&width=350"}
                    alt={currentPhoto.caption}
                    className="gallery-image"
                  />
                  <div className="photo-badge">Featured</div>
                  <div className="image-overlay">
                    <button className="view-button">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                      </svg>
                      View Details
                    </button>
                  </div>
                </div>

                <div className="gallery-content">
                  <h3 className="photo-caption">{currentPhoto.caption}</h3>
                  <div className="photo-meta">
                    <span className="photo-author">By {currentPhoto.ownerName}</span>
                    <span className="photo-date">{new Date(currentPhoto._createdOn).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="cta-section">
          <h2 className="cta-title">Share Your Transformation</h2>
          <p className="cta-description">
            Got a great haircut or styling experience? Share it with our community and inspire others with your
            transformation story.
          </p>
          <a href="/gallery/add" className="cta-button">
            Add Your Photo
          </a>
        </div>
      </div>
    </main>
  )
}
