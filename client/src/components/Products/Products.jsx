import './products.css'

import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

import * as productService from '../../services/productService';

export default function Products(){

    const [products, setProducts] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    
    useEffect( () => {
        productService.getAllProducts()
        .then((result) => {
            setProducts(result)
        })
        
        // Load wishlist from localStorage
        const savedWishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setWishlist(savedWishlist);
    }, []);

    const toggleWishlist = (productId) => {
        let updatedWishlist;
        
        if (wishlist.includes(productId)) {
            // Remove from wishlist
            updatedWishlist = wishlist.filter(id => id !== productId);
        } else {
            // Add to wishlist
            updatedWishlist = [...wishlist, productId];
        }
        
        setWishlist(updatedWishlist);
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    };
       
    const isEmpty = products.length == 0 ? true : false;

    return(
        <main className="products">
        <div className="productsParentContainer">
            <h1 id="productsHeading">Our Products</h1>
            <div className="productChildContainer">
                {!isEmpty && products.map(currentProduct => {
                    const isInWishlist = wishlist.includes(currentProduct._id);
                    
                    // Calculate dynamic discount (15-30% range)
                    const discountPercentage = Math.floor(Math.random() * 16) + 15; // 15-30%
                    const originalPrice = parseFloat(currentProduct.productPrice);
                    const discountedPrice = originalPrice / (1 - discountPercentage / 100);
                    
                    return(
                        <div className="productCard" key={currentProduct._id}>
                            <div className="product-image-container">
                                <img src={currentProduct.productImageUrl} alt={currentProduct.productName} />
                                <div className="product-badge">Featured</div>
                                <button 
                                    className={`product-favorite ${isInWishlist ? 'favorited' : ''}`}
                                    onClick={() => toggleWishlist(currentProduct._id)}
                                    aria-label={isInWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
                                >
                                    <svg viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                                    </svg>
                                </button>
                            </div>
                            <div className="product-content">
                                <div className="product-brand">{currentProduct.productBrand || 'Premium'}</div>
                                <div className="insideCard">
                                    {currentProduct.productName}
                                </div>
                                <div className="product-rating">
                                    <div className="product-stars">
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
                                    <span className="product-rating-text">4.8 (124)</span>
                                </div>
                                <div className="product-price-container">
                                    <div>
                                        <span className="product-price">${currentProduct.productPrice}</span>
                                        <span className="product-price-original">${discountedPrice.toFixed(2)}</span>
                                    </div>
                                    <span className="product-discount">-{discountPercentage}%</span>
                                </div>
                                <div className="product-actions">
                                    <Link to={`/products/details/${currentProduct._id}`} id="detailsBtn">
                                        View Details
                                    </Link>
                                    <button className="product-cart-btn" aria-label="Add to cart">
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6L8.5,11H16Z"/>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    );
                })}
                
                {isEmpty && <h1 className='zeroProducts'>No products available at the moment</h1>}
            </div>
        </div>
    </main>
    );
}