"use client"

import "./productDetails.css"
import { useState, useEffect } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import * as productService from "../../services/productService"

export default function ProductDetails() {
  const [product, setProduct] = useState({})
  const [relatedProducts, setRelatedProducts] = useState([])
  const [activeTab, setActiveTab] = useState("description")
  const [activeImageIndex, setActiveImageIndex] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const [loading, setLoading] = useState(true)
  const { productId } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    productService
      .getOneProduct(productId)
      .then((result) => {
        setProduct(result)
        setLoading(false)

        // Load related products
        return productService.getAllProducts()
      })
      .then((allProducts) => {
        const related = allProducts
          .filter((p) => p._id !== productId && p.productCategory === product.productCategory)
          .slice(0, 4)
        setRelatedProducts(related)
      })
      .catch(() => {
        navigate("/products")
      })

    // Check if product is in wishlist
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")
    setIsWishlisted(wishlist.includes(productId))
  }, [productId, navigate, product.productCategory])

  const handleWishlistToggle = () => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist") || "[]")

    if (isWishlisted) {
      const updatedWishlist = wishlist.filter((id) => id !== productId)
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist))
      setIsWishlisted(false)
    } else {
      wishlist.push(productId)
      localStorage.setItem("wishlist", JSON.stringify(wishlist))
      setIsWishlisted(true)
    }
  }

  const handleAddToCart = () => {
    // In a real app, this would add to cart
    alert("Product added to cart!")
  }

  const productImages = [
    product.productImageUrl || "/placeholder.svg?height=500&width=600",
    "/placeholder.svg?height=500&width=600",
    "/placeholder.svg?height=500&width=600",
    "/placeholder.svg?height=500&width=600",
  ]

  const reviews = [
    {
      id: 1,
      name: "John Smith",
      rating: 5,
      text: "Excellent product! Really improved my hair styling routine. Highly recommend!",
    },
    {
      id: 2,
      name: "Mike Johnson",
      rating: 4,
      text: "Good quality product. Works as described and arrived quickly.",
    },
    {
      id: 3,
      name: "David Wilson",
      rating: 5,
      text: "Best purchase I've made in a while. Professional quality at a great price.",
    },
  ]

  if (loading) {
    return (
      <main className="product-details">
        <div className="product-details-container">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className="product-details">
      <div className="product-details-container">
        <nav className="breadcrumb">
          <Link to="/">Home</Link>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
          <Link to="/products">Products</Link>
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
          <span>{product.productName}</span>
        </nav>

        <div className="product-showcase">
          <div className="product-gallery">
            <div className="main-image-container">
              <img
                src={productImages[activeImageIndex] || "/placeholder.svg"}
                alt={product.productName}
                className="main-product-image"
              />
              <div className="image-badge">Premium</div>
            </div>

            <div className="thumbnail-gallery">
              {productImages.map((image, index) => (
                <div
                  key={index}
                  className={`thumbnail ${activeImageIndex === index ? "active" : ""}`}
                  onClick={() => setActiveImageIndex(index)}
                >
                  <img src={image || "/placeholder.svg"} alt={`${product.productName} view ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="product-info">
            <div className="product-header">
              <div className="product-category-badge">{product.productCategory || "Hair Care"}</div>
              <h1 className="product-name">{product.productName}</h1>

              <div className="product-rating-section">
                <div className="rating-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                    </svg>
                  ))}
                </div>
                <span className="rating-info">4.8 (127 reviews)</span>
              </div>
            </div>

            <div className="product-price-section">
              <span className="current-price">${product.productPrice}</span>
              <span className="original-price">${(Number.parseFloat(product.productPrice) * 1.2).toFixed(2)}</span>
              <span className="discount-badge">20% OFF</span>
            </div>

            <p className="product-description">
              {product.productDescription ||
                "Premium quality product designed for the modern gentleman. Crafted with the finest ingredients and professional-grade formulation."}
            </p>

            <div className="product-features">
              <h3 className="features-title">Key Features</h3>
              <ul className="features-list">
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  Professional grade quality
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  Natural ingredients
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  Long-lasting results
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                  </svg>
                  Suitable for all hair types
                </li>
              </ul>
            </div>

            <div className="product-actions">
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,7H18V6A4,4 0 0,0 14,2H10A4,4 0 0,0 6,6V7H5A1,1 0 0,0 4,8V19A3,3 0 0,0 7,22H17A3,3 0 0,0 20,19V8A1,1 0 0,0 19,7M10,4H14A2,2 0 0,1 16,6V7H8V6A2,2 0 0,1 10,4Z" />
                </svg>
                Add to Cart
              </button>
              <button className={`wishlist-btn ${isWishlisted ? "active" : ""}`} onClick={handleWishlistToggle}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
                </svg>
                {isWishlisted ? "Wishlisted" : "Wishlist"}
              </button>
            </div>

            <div className="product-meta">
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z" />
                </svg>
                Free shipping on orders over $50
              </div>
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,17H13V11H11M11,9H13V7H11" />
                </svg>
                30-day return policy
              </div>
              <div className="meta-item">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11.5C14.8,12.6 13.9,13.5 12.8,13.5H11.2C10.1,13.5 9.2,12.6 9.2,11.5V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.5,8.7 10.5,9.5V10.5C10.5,10.8 10.7,11 11,11H13C13.3,11 13.5,10.8 13.5,10.5V9.5C13.5,8.7 12.8,8.2 12,8.2Z" />
                </svg>
                Secure payment
              </div>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={`tab-button ${activeTab === "description" ? "active" : ""}`}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={`tab-button ${activeTab === "reviews" ? "active" : ""}`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews (127)
            </button>
            <button
              className={`tab-button ${activeTab === "shipping" ? "active" : ""}`}
              onClick={() => setActiveTab("shipping")}
            >
              Shipping & Returns
            </button>
          </div>

          <div className="tab-content">
            {activeTab === "description" && (
              <div>
                <h3>Product Description</h3>
                <p>
                  {product.productDescription ||
                    "This premium product is crafted with the finest ingredients and professional-grade formulation. Designed specifically for the modern gentleman who values quality and performance."}
                </p>
                <p>
                  Our commitment to excellence ensures that every product meets the highest standards of quality and
                  effectiveness. Whether you're looking to enhance your daily grooming routine or achieve a specific
                  style, this product delivers exceptional results.
                </p>
              </div>
            )}

            {activeTab === "reviews" && (
              <div className="reviews-section">
                {reviews.map((review) => (
                  <div key={review.id} className="review-item">
                    <div className="review-header">
                      <span className="reviewer-name">{review.name}</span>
                      <div className="review-rating">
                        {[...Array(review.rating)].map((_, i) => (
                          <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                    <p className="review-text">{review.text}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "shipping" && (
              <div>
                <h3>Shipping Information</h3>
                <p>We offer fast and reliable shipping options to get your products to you quickly.</p>
                <ul>
                  <li>Free standard shipping on orders over $50</li>
                  <li>Express shipping available for $9.99</li>
                  <li>Orders processed within 1-2 business days</li>
                  <li>Tracking information provided for all orders</li>
                </ul>
                <h3>Returns & Exchanges</h3>
                <p>We want you to be completely satisfied with your purchase.</p>
                <ul>
                  <li>30-day return policy</li>
                  <li>Items must be unused and in original packaging</li>
                  <li>Free returns on defective items</li>
                  <li>Easy online return process</li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2 className="related-title">You Might Also Like</h2>
            <div className="related-grid">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct._id}
                  to={`/products/details/${relatedProduct._id}`}
                  className="related-product"
                >
                  <img
                    src={relatedProduct.productImageUrl || "/placeholder.svg?height=200&width=250"}
                    alt={relatedProduct.productName}
                    className="related-product-image"
                  />
                  <div className="related-product-info">
                    <h4 className="related-product-name">{relatedProduct.productName}</h4>
                    <p className="related-product-price">${relatedProduct.productPrice}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
