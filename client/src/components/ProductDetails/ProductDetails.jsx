import './productDetails.css'

import { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';


import * as productService from '../../services/productService';
import AuthContext from '../../contexts/authContext';


export default function ProductDetails(){
    const { isAdmin} = useContext(AuthContext)
    const [product, setProduct] = useState({});
    const {productId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        productService.getOneProduct(productId)
        .then(result => setProduct(result))
    }, [productId]);

    

    const deleteHandler = async () => {
        if(confirm('Are you sure you want to delete this product?')){
            await productService.deleteProduct(productId);
            navigate('/products');
        }
    }

    return(
        <main className='productDetails'>
            <div className="productContainerDetails">
                <img src={product.productImageUrl} alt="" />
                <div className='oneProductInsights'>
                <h2>{product.productName}</h2>
                <h3>{product.productBrand}</h3>
                <p>{product.productDescription}</p>
                <p>Price: ${product.productPrice}</p>
            </div>
                {isAdmin && <button className='productDetailsDeleteBtn' onClick={() => deleteHandler(product._id)}>Delete</button>}
                </div>
            <p className='buyPolicy'>Products can't be ordered online. You can buy them only from the physical barber shop.</p>
            
        </main>
        
    );
}