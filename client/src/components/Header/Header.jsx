"use client"

import "./header.css"
import { useContext, useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import AuthContext from "../../contexts/authContext"

export default function Header() {
  const { isAuthenticated, isAdmin } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Get wishlist count
  const wishlistCount = JSON.parse(localStorage.getItem("wishlist") || "[]").length

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className={`navbar ${isMenuOpen ? "navbar--open" : ""}`}>
        <Link to="/" className="brand-logo" onClick={closeMenu}>
          Compass
        </Link>

        {isAuthenticated && (
          <Link className="profile-link" to="/profile" onClick={closeMenu}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
            </svg>
            Profile
          </Link>
        )}

        <div className="interaction-links">
          <Link className={`navbar__item ${location.pathname === "/" ? "active" : ""}`} to="/" onClick={closeMenu}>
            Home
          </Link>

          <Link
            className={`navbar__item ${location.pathname === "/gallery" ? "active" : ""}`}
            to="/gallery"
            onClick={closeMenu}
          >
            Gallery
          </Link>

          <Link
            className={`navbar__item ${location.pathname === "/services" ? "active" : ""}`}
            to="/services"
            onClick={closeMenu}
          >
            Services
          </Link>

          <Link
            className={`navbar__item ${location.pathname === "/products" ? "active" : ""}`}
            to="/products"
            onClick={closeMenu}
          >
            Products
          </Link>

          <Link
            className={`navbar__item wishlist-link ${location.pathname === "/wishlist" ? "active" : ""}`}
            to="/wishlist"
            onClick={closeMenu}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="wishlist-icon">
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
            Wishlist
            {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
          </Link>

          {isAuthenticated && (
            <Link
              className={`navbar__item ${location.pathname === "/add-photo" ? "active" : ""}`}
              to="/add-photo"
              onClick={closeMenu}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9,12L10.5,14L13.5,10.5L18,16H6M20,4H16.83L15,2H9L7.17,4H4A2,2 0 0,0 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4Z" />
              </svg>
              Add Photo
            </Link>
          )}
        </div>

        <div className="user-links">
          {isAuthenticated ? (
            <>
              <Link className="navbar__item" to="/logout" onClick={closeMenu}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16,17V14H9V10H16V7L21,12L16,17M14,2A2,2 0 0,1 16,4V6H14V4H5V20H14V18H16V20A2,2 0 0,1 14,22H5A2,2 0 0,1 3,20V4A2,2 0 0,1 5,2H14Z" />
                </svg>
                Logout
              </Link>
              {isAdmin && (
                <Link className="navbar__item" to="/admin" onClick={closeMenu}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12,15C12.81,15 13.5,14.7 14.11,14.11C14.7,13.5 15,12.81 15,12C15,11.19 14.7,10.5 14.11,9.89C13.5,9.3 12.81,9 12,9C11.19,9 10.5,9.3 9.89,9.89C9.3,10.5 9,11.19 9,12C9,12.81 9.3,13.5 9.89,14.11C10.5,14.7 11.19,15 12,15M12,2L14,6L18,7L15,10L16,14L12,13L8,14L9,10L6,7L10,6L12,2Z" />
                  </svg>
                  Admin
                </Link>
              )}
            </>
          ) : (
            <>
              <Link className="navbar__item" to="/login" onClick={closeMenu}>
                Login
              </Link>
              <Link className="navbar__item" to="/register" onClick={closeMenu}>
                Register
              </Link>
            </>
          )}
        </div>
      </nav>

      <button
        className={`hamburger ${isMenuOpen ? "hamburger--active" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
        <span className="hamburger__line"></span>
      </button>
    </header>
  )
}
