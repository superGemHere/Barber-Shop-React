"use client"

import "./header.css"
import { Link, useLocation } from "react-router-dom"
import { useContext, useState, useEffect } from "react"
import AuthContext from "../../contexts/authContext"

export default function Header() {
  const { isAuthenticated, username, isAdmin } = useContext(AuthContext)
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [wishlistCount, setWishlistCount] = useState(0)

  useEffect(() => {
    const updateWishlistCount = () => {
      const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
      setWishlistCount(wishlist.length)
    }

    updateWishlistCount()
    window.addEventListener("storage", updateWishlistCount)

    return () => window.removeEventListener("storage", updateWishlistCount)
  }, [])

  const isActive = (path) => location.pathname === path

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMobileMenu}>
          <div className="logo-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12,2A2,2 0 0,1 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4A2,2 0 0,1 12,2M21,9V7L15,1H9V3H7V1H5V4H7V6H9V7L3,9V11L9,13V15H7V18H9V20H7V22H9V19H15V22H17V20H15V18H17V15H15V13L21,11V9Z" />
            </svg>
          </div>
          Compass
        </Link>

        <nav className="nav-desktop">
          <ul className="nav-links">
            <li>
              <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className={`nav-link ${isActive("/services") ? "active" : ""}`}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/gallery" className={`nav-link ${isActive("/gallery") ? "active" : ""}`}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/products" className={`nav-link ${isActive("/products") ? "active" : ""}`}>
                Products
              </Link>
            </li>
            <li>
              <Link to="/about-us" className={`nav-link ${isActive("/about-us") ? "active" : ""}`}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className={`nav-link ${isActive("/contact-us") ? "active" : ""}`}>
                Contact
              </Link>
            </li>
          </ul>

          <div className="nav-actions">
            {isAuthenticated && (
              <Link to="/wishlist" className="wishlist-btn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
                {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
              </Link>
            )}

            {isAuthenticated ? (
              <div className="user-menu">
                <Link to="/profile" className="user-avatar">
                  {username?.charAt(0).toUpperCase()}
                </Link>
              </div>
            ) : (
              <Link to="/login" className="btn btn-primary">
                Sign In
              </Link>
            )}

            {isAdmin && (
              <Link to="/admin" className="btn btn-secondary">
                Admin
              </Link>
            )}
          </div>
        </nav>

        <button
          className={`mobile-menu-btn ${mobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <nav className={`nav-mobile ${mobileMenuOpen ? "active" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`nav-link ${isActive("/services") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/gallery"
              className={`nav-link ${isActive("/gallery") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Gallery
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className={`nav-link ${isActive("/products") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/about-us"
              className={`nav-link ${isActive("/about-us") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`nav-link ${isActive("/contact-us") ? "active" : ""}`}
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          {isAuthenticated && (
            <Link to="/wishlist" className="wishlist-btn" onClick={closeMobileMenu}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
              </svg>
              {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
            </Link>
          )}

          {isAuthenticated ? (
            <Link to="/profile" className="btn btn-primary" onClick={closeMobileMenu}>
              Profile
            </Link>
          ) : (
            <Link to="/login" className="btn btn-primary" onClick={closeMobileMenu}>
              Sign In
            </Link>
          )}

          {isAdmin && (
            <Link to="/admin" className="btn btn-secondary" onClick={closeMobileMenu}>
              Admin
            </Link>
          )}
        </div>
      </nav>
    </header>
  )
}
