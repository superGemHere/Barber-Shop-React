import './productDetails.css'

import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';


import * as productService from '../../services/productService';
import AuthContext from '../../contexts/authContext';


export default function ProductDetails(){
    const { isAdmin} = useContext(AuthContext)
    const [product, setProduct] = useState({});
    const [isInWishlist, setIsInWishlist] = useState(false);
    const {productId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        productService.getOneProduct(productId)
        .then(result => setProduct(result))
        
        // Check if product is in wishlist
        const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        setIsInWishlist(wishlist.includes(productId));
    }, [productId]);

    const toggleWishlist = () => {
        let wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]');
        
        if (isInWishlist) {
            // Remove from wishlist
            wishlist = wishlist.filter(id => id !== productId);
            setIsInWishlist(false);
        } else {
            // Add to wishlist
            wishlist.push(productId);
            setIsInWishlist(true);
        }
        
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
    };

    const deleteHandler = async () => {
        if(confirm('Are you sure you want to delete this product?')){
            await productService.deleteProduct(productId);
            navigate('/products');
        }
    }

    return(
        <main className='productDetails'>
            <div className="productDetailsContainer">
                <div className="productTopSection">
                    <div className="productImageSection">
                        <div className="productImageWrapper">
                            <img src={product.productImageUrl} alt={product.productName} />
                            <div className="imageOverlay">
                                <div className="productBadge">Premium Quality</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="productMainInfo">
                        <div className="productHeader">
                            <div className="productBrand">{product.productBrand}</div>
                            <h1 className="productTitle">{product.productName}</h1>
                            
                            <div className="productRating">
                                <div className="stars">
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
                                <span className="ratingText">(4.8) • 234 reviews</span>
                            </div>
                        </div>

                        <div className="productPrice">
                            {(() => {
                                const discountPercentage = Math.floor(Math.random() * 16) + 15; // 15-30%
                                const originalPrice = parseFloat(product.productPrice || 0);
                                const discountedPrice = originalPrice / (1 - discountPercentage / 100);
                                
                                return (
                                    <>
                                        <span className="currentPrice">${product.productPrice}</span>
                                        <span className="originalPrice">${discountedPrice.toFixed(2)}</span>
                                        <span className="discount">-{discountPercentage}%</span>
                                    </>
                                );
                            })()}
                        </div>

                        <div className="productDescription">
                            <h3>Product Description</h3>
                            <p>{product.productDescription}</p>
                        </div>
                    </div>
                </div>
                
                <div className="productBottomSection">
                    <div className="productFeatures">
                        <h3>Key Features</h3>
                        <ul>
                            <li>Professional grade quality</li>
                            <li>Suitable for all hair types</li>
                            <li>Long-lasting results</li>
                            <li>Salon recommended</li>
                        </ul>
                    </div>

                    <div className="productActions">
                        <button 
                            className={`addToCartBtn ${isInWishlist ? 'inWishlist' : ''}`}
                            onClick={toggleWishlist}
                        >
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5 2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                            </svg>
                            {isInWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
                        </button>
                        
                        <button className="buyNowBtn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17,18A2,2 0 0,1 19,20A2,2 0 0,1 17,22C15.89,22 15,21.1 15,20C15,18.89 15.89,18 17,18M1,2H4.27L5.21,4H20A1,1 0 0,1 21,5C21,5.17 20.95,5.34 20.88,5.5L17.3,11.97C16.96,12.58 16.3,13 15.55,13H8.1L7.2,14.63L7.17,14.75A0.25,0.25 0 0,0 7.42,15H19V17H7C5.89,17 5,16.1 5,15C5,14.65 5.09,14.32 5.24,14.04L6.6,11.59L3,4H1V2M7,18A2,2 0 0,1 9,20A2,2 0 0,1 7,22C5.89,22 5,21.1 5,20C5,18.89 5.89,18 7,18M16,11L18.78,6H6L8.5,11H16Z"/>
                            </svg>
                            Visit Shop
                        </button>
                        
                        {isAdmin && (
                            <button className='deleteBtn' onClick={() => deleteHandler(product._id)}>
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z"/>
                                </svg>
                                Delete Product
                            </button>
                        )}
                    </div>
                </div>
            </div>
            
            <div className='policySection'>
                <div className="policyCard">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12,1L21,5V11C21,16.55 17.16,21.74 12,23C6.84,21.74 3,16.55 3,11V5L12,1M12,7A2,2 0 0,0 10,9A2,2 0 0,0 12,11A2,2 0 0,0 14,9A2,2 0 0,0 12,7Z"/>
                    </svg>
                    <div>
                        <h4>In-Store Purchase Only</h4>
                        <p>Products can only be purchased at our physical barber shop location for quality assurance.</p>
                    </div>
                </div>
            </div>
        </main>
    );
}