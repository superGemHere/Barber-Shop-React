"use client"

import styles from "./wishlist.module.css"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import * as productService from "../../services/productService"

export default function Wishlist() {
  const [wishlistItems, setWishlistItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadWishlistItems = async () => {
      try {
        const wishlistIds = JSON.parse(localStorage.getItem("wishlist") || "[]")

        if (wishlistIds.length === 0) {
          setLoading(false)
          return
        }

        const allProducts = await productService.getAllProducts()
        const wishlistProducts = allProducts.filter((product) => wishlistIds.includes(product._id))

        setWishlistItems(wishlistProducts)
        setLoading(false)
      } catch (error) {
        console.error("Failed to load wishlist items:", error)
        setLoading(false)
      }
    }

    loadWishlistItems()
  }, [])

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlistItems.filter((item) => item._id !== productId)
    setWishlistItems(updatedWishlist)

    const wishlistIds = updatedWishlist.map((item) => item._id)
    localStorage.setItem("wishlist", JSON.stringify(wishlistIds))
  }

  const clearAllWishlist = () => {
    if (window.confirm("Are you sure you want to clear your entire wishlist?")) {
      setWishlistItems([])
      localStorage.setItem("wishlist", JSON.stringify([]))
    }
  }

  const handleAddToCart = (product) => {
    // In a real app, this would add to cart
    alert(`${product.productName} added to cart!`)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "My Wishlist",
        text: "Check out my wishlist from the Barber Shop!",
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Wishlist link copied to clipboard!")
    }
  }

  const totalValue = wishlistItems.reduce((sum, item) => sum + Number.parseFloat(item.productPrice || 0), 0)
  const discountValue = totalValue * 0.1 // 10% discount for wishlist items

  if (loading) {
    return (
      <main className={styles.wishlist}>
        <div className={styles.wishlistContainer}>
          <div className={styles.loadingSpinner}>
            <div className={styles.spinner}></div>
          </div>
        </div>
      </main>
    )
  }

  const isEmpty = wishlistItems.length === 0

  return (
    <main className={styles.wishlist}>
      <div className={styles.wishlistContainer}>
        <div className={styles.wishlistHeader}>
          <h1 className={styles.wishlistTitle}>My Wishlist</h1>
          <p className={styles.wishlistSubtitle}>
            Keep track of your favorite products and never miss out on the items you love. Your personal collection of
            premium grooming essentials.
          </p>

          {!isEmpty && (
            <div className={styles.wishlistStats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>{wishlistItems.length}</span>
                <span className={styles.statLabel}>Items</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>${totalValue.toFixed(2)}</span>
                <span className={styles.statLabel}>Total Value</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>${discountValue.toFixed(2)}</span>
                <span className={styles.statLabel}>Potential Savings</span>
              </div>
            </div>
          )}
        </div>

        {!isEmpty && (
          <div className={styles.wishlistActions}>
            <div className={styles.wishlistSummary}>
              <div className={styles.totalValue}>Total: ${totalValue.toFixed(2)}</div>
              <div className={styles.discountInfo}>Save ${discountValue.toFixed(2)} with wishlist discount!</div>
            </div>
            <div className={styles.actionButtons}>
              <button className={styles.clearAllBtn} onClick={clearAllWishlist}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
                </svg>
                Clear All
              </button>
              <button className={styles.shareBtn} onClick={handleShare}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
                </svg>
                Share Wishlist
              </button>
            </div>
          </div>
        )}

        {isEmpty ? (
          <div className={styles.emptyWishlist}>
            <div className={styles.emptyIcon}>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
              </svg>
            </div>
            <h2 className={styles.emptyTitle}>Your Wishlist is Empty</h2>
            <p className={styles.emptyDescription}>
              Start building your wishlist by browsing our premium collection of grooming products and adding your
              favorites!
            </p>
            <Link to="/products" className={styles.browseProductsBtn}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19,7H18V6A4,4 0 0,0 14,2H10A4,4 0 0,0 6,6V7H5A1,1 0 0,0 4,8V19A3,3 0 0,0 7,22H17A3,3 0 0,0 20,19V8A1,1 0 0,0 19,7M10,4H14A2,2 0 0,1 16,6V7H8V6A2,2 0 0,1 10,4Z" />
              </svg>
              Browse Products
            </Link>
          </div>
        ) : (
          <div className={styles.wishlistGrid}>
            {wishlistItems.map((item) => (
              <div key={item._id} className={styles.wishlistItem}>
                <div className={styles.itemImageContainer}>
                  <img
                    src={item.productImageUrl || "/placeholder.svg?height=250&width=320"}
                    alt={item.productName}
                    className={styles.itemImage}
                  />
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromWishlist(item._id)}
                    aria-label="Remove from wishlist"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
                    </svg>
                  </button>
                  <div className={styles.availabilityBadge}>In Stock</div>
                </div>

                <div className={styles.itemContent}>
                  <div className={styles.itemCategory}>{item.productCategory || "Hair Care"}</div>
                  <h3 className={styles.itemTitle}>{item.productName}</h3>
                  <p className={styles.itemDescription}>{item.productDescription}</p>

                  <div className={styles.itemFooter}>
                    <span className={styles.itemPrice}>${item.productPrice}</span>
                    <div className={styles.itemRating}>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.46,13.97L5.82,21L12,17.27Z" />
                        </svg>
                      ))}
                      <span className={styles.ratingText}>4.8</span>
                    </div>
                  </div>

                  <div className={styles.itemActions}>
                    <button className={styles.addToCartBtn} onClick={() => handleAddToCart(item)}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19,7H18V6A4,4 0 0,0 14,2H10A4,4 0 0,0 6,6V7H5A1,1 0 0,0 4,8V19A3,3 0 0,0 7,22H17A3,3 0 0,0 20,19V8A1,1 0 0,0 19,7M10,4H14A2,2 0 0,1 16,6V7H8V6A2,2 0 0,1 10,4Z" />
                      </svg>
                      Add to Cart
                    </button>
                    <Link to={`/products/details/${item._id}`} className={styles.viewDetailsBtn}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z" />
                      </svg>
                    </Link>
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
