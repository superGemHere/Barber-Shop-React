import './wishlist.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as productService from '../../services/productService';

export default function Wishlist() {
    const [wishlistProducts, setWishlistProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadWishlistProducts();
    }, []);

    const loadWishlistProducts = async () => {
        try {
            const wishlistIds = JSON.parse(localStorage.getItem('wishlist') || '[]');
            
            if (wishlistIds.length === 0) {
                setWishlistProducts([]);
                setLoading(false);
                return;
            }

            // Fetch all products and filter by wishlist IDs
            const allProducts = await productService.getAllProducts();
            const filteredProducts = allProducts.filter(product => 
                wishlistIds.includes(product._id)
            );
            
            setWishlistProducts(filteredProducts);
        } catch (error) {
            console.error('Error loading wishlist products:', error);
            setWishlistProducts([]);
        } finally {
            setLoading(false);
        }
    };

    const removeFromWishlist = (productId) => {
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        wishlist = wishlist.filter(id => id !== productId);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        
        // Update state to reflect removal
        setWishlistProducts(prevProducts => 
            prevProducts.filter(product => product._id !== productId)
        );
    };

    const clearWishlist = () => {
        if (confirm('Are you sure you want to clear your entire wishlist?')) {
            localStorage.removeItem('wishlist');
            setWishlistProducts([]);
        }
    };

    if (loading) {
        return (
            <main className="wishlist">
                <div className="wishlistContainer">
                    <div className="loadingSpinner">
                        <div className="spinner"></div>
                        <p>Loading your wishlist...</p>
                    </div>
                </div>
            </main>
        );
    }

    return (
        <main className="wishlist">
            <div className="wishlistContainer">
                <div className="wishlistHeader">
                    <h1>My Wishlist</h1>
                    <div className="wishlistStats">
                        <span className="itemCount">
                            {wishlistProducts.length} {wishlistProducts.length === 1 ? 'item' : 'items'}
                        </span>
                        {wishlistProducts.length > 0 && (
                            <button 
                                className="clearWishlistBtn"
                                onClick={clearWishlist}
                            >
                                Clear All
                            </button>
                        )}
                    </div>
                </div>

                {wishlistProducts.length === 0 ? (
                    <div className="emptyWishlist">
                        <div className="emptyIcon">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                            </svg>
                        </div>
                        <h2>Your wishlist is empty</h2>
                        <p>Start adding products you love to your wishlist!</p>
                        <Link to="/products" className="shopNowBtn">
                            Shop Products
                        </Link>
                    </div>
                ) : (
                    <div className="wishlistGrid">
                        {wishlistProducts.map(product => {
                            // Calculate dynamic discount
                            const discountPercentage = Math.floor(Math.random() * 16) + 15; // 15-30%
                            const originalPrice = parseFloat(product.productPrice);
                            const discountedPrice = originalPrice / (1 - discountPercentage / 100);
                            
                            return (
                                <div className="wishlistCard" key={product._id}>
                                    <div className="wishlistImageContainer">
                                        <img src={product.productImageUrl} alt={product.productName} />
                                        <div className="wishlistBadge">Wishlist</div>
                                        <button 
                                            className="removeFromWishlist"
                                            onClick={() => removeFromWishlist(product._id)}
                                            aria-label="Remove from wishlist"
                                        >
                                            <svg viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                    <div className="wishlistContent">
                                        <div className="wishlistBrand">{product.productBrand || 'Premium'}</div>
                                        <h3 className="wishlistProductName">{product.productName}</h3>
                                        
                                        <div className="wishlistRating">
                                            <div className="wishlistStars">
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                                </svg>
                                            </div>
                                            <span className="wishlistRatingText">4.8 (124)</span>
                                        </div>
                                        
                                        <div className="wishlistPriceContainer">
                                            <div className="priceGroup">
                                                <span className="wishlistPrice">${product.productPrice}</span>
                                                <span className="wishlistOriginalPrice">${discountedPrice.toFixed(2)}</span>
                                            </div>
                                            <span className="wishlistDiscount">-{discountPercentage}%</span>
                                        </div>
                                        
                                        <div className="wishlistActions">
                                            <Link 
                                                to={`/products/details/${product._id}`} 
                                                className="viewDetailsBtn"
                                            >
                                                View Details
                                            </Link>
                                            <button 
                                                className="moveToCartBtn"
                                                onClick={() => removeFromWishlist(product._id)}
                                            >
                                                <svg viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6L8.5,11H16Z"/>
                                                </svg>
                                                Visit Shop
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
                
                {wishlistProducts.length > 0 && (
                    <div className="wishlistFooter">
                        <div className="continueShopping">
                            <Link to="/products" className="continueShoppingBtn">
                                Continue Shopping
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
