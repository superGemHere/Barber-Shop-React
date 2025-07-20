"use client"

import "./products.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import * as productService from "../../services/productService"

export default function Products() {
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [activeFilter, setActiveFilter] = useState("all")
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    productService
      .getAllProducts()
      .then((result) => {
        setProducts(result)
        setFilteredProducts(result)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })

    // Load wishlist from localStorage
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setWishlist(savedWishlist)
  }, [])


  const handleWishlistToggle = (productId) => {
    const updatedWishlist = wishlist.includes(productId)
      ? wishlist.filter((id) => id !== productId)
      : [...wishlist, productId]

    setWishlist(updatedWishlist)
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
  }

  const handleShare = (product) => {
    if (navigator.share) {
      navigator.share({
        title: product.productName,
        text: product.productDescription,
        url: window.location.href + `/${product._id}`,
      })
    } else {
      navigator.clipboard.writeText(window.location.href + `/${product._id}`)
      alert("Product link copied to clipboard!")
    }
  }

  const categories = ["all", "hair care", "styling", "beard care", "tools", "accessories"]

  if (loading) {
    return (
      <main className="products">
        <div className="products-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </main>
    )
  }

  const isEmpty = filteredProducts.length === 0

  return (
    <main className="products">
      <div className="products-container">
        <div className="products-header">
          <h1 className="products-title">Premium Products</h1>
          <p className="products-subtitle">
            Discover our curated collection of professional-grade hair care and styling products. Quality tools and
            products for the modern gentleman.
          </p>

          <div className="products-stats">
            <div className="stat-item">
              <span className="stat-number">{products.length}</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Brands</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.8★</span>
              <span className="stat-label">Rating</span>
            </div>
          </div>
        </div>
        {isEmpty ? (
          <div className="empty-products">
            <div className="empty-icon">
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,7H18V6A4,4 0 0,0 14,2H10A4,4 0 0,0 6,6V7H5A1,1 0 0,0 4,8V19A3,3 0 0,0 7,22H17A3,3 0 0,0 20,19V8A1,1 0 0,0 19,7M10,4H14A2,2 0 0,1 16,6V7H8V6A2,2 0 0,1 10,4M18,19A1,1 0 0,1 17,20H7A1,1 0 0,1 6,19V9H8V10A1,1 0 0,0 10,10A1,1 0 0,0 10,9V9H14V10A1,1 0 0,0 16,10A1,1 0 0,0 16,9V9H18V19Z" />
              </svg>
            </div>
            <h2 className="empty-title">No Products Found</h2>
            <p className="empty-description">
              {searchTerm || activeFilter !== "all"
                ? "Try adjusting your search or filter criteria to find what you're looking for."
                : "Our product catalog is being updated. Check back soon for amazing products!"}
            </p>
          </div>
        ) : (
          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product._id} className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.productImageUrl || "/placeholder.svg?height=280&width=350"}
                    alt={product.productName}
                    className="product-image"
                  />
                  <div className="product-overlay"></div>
                  <div className="product-badge">Premium</div>
                  <div className="product-actions">
                    <button
                      className={`action-btn ${wishlist.includes(product._id) ? "wishlisted" : ""}`}
                      onClick={() => handleWishlistToggle(product._id)}
                      aria-label={wishlist.includes(product._id) ? "Remove from wishlist" : "Add to wishlist"}
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                      </svg>
                    </button>
                    <button className="action-btn" onClick={() => handleShare(product)} aria-label="Share product">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="product-content">
                  <div className="product-category">{product.productCategory || "Hair Care"}</div>
                  <h3 className="product-title">{product.productName}</h3>
                  <p className="product-description">{product.productDescription}</p>

                  <div className="product-footer">
                    <span className="product-price">${product.productPrice}</span>
                    <div className="product-rating">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                      </svg>
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                      </svg>
                      <span className="rating-text">4.8</span>
                    </div>
                  </div>

                  <div className="product-cta">
                    <Link to={`/products/details/${product._id}`} className="view-details-btn">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="details-icon">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                      </svg>
                      View Details
                    </Link>
                    <button
                      className="quick-add-btn"
                      onClick={() => handleWishlistToggle(product._id)}
                      aria-label="Quick add to wishlist"
                    >
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6L8.5,11H16Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
