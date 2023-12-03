import './products.css'

import { useState, useEffect } from "react";
import { Link, useNavigate} from 'react-router-dom';

import * as productService from '../../services/productService';

export default function Products(){

    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    useEffect( () => {
       
        productService.getAllProducts()
    .then((result) => {
        setProducts(result)
        // console.log(result)
        })
    
    }, []);
       
    
    const isEmpty = products.length == 0 ? true : false;

    // console.log(isEmpty)

    return(
        <main className="products">
        <div className="productsParentContainer">
            {/* <h2 id="productsHeading">Products</h2> */}
            <div className="productChildContainer">
                {!isEmpty && products.map(currentProduct => {
                    return(
                        <div className="productCard" key={currentProduct._id}>
                            <img src={currentProduct.productImageUrl} alt={currentProduct.productName} />
                            <div className="cardDetails">
                            <div className="insideCard">
                                <p className="color-white">{currentProduct.productName}</p>
                                <p><span className="color-white">Price: ${currentProduct.productPrice}</span></p>
                            </div>
                                <Link to={`/products/details/${currentProduct._id}`} id="detailsBtn">Details</Link>
                            </div>
                        </div>
                    );
                })}
                
                {isEmpty && <h1 className='zeroProducts'>There are no available products</h1>}
            </div>
        </div>
    </main>
    );
}