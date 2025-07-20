import './admin.css'

import { useNavigate } from 'react-router-dom'

import useForm from '../../hooks/useForm';

import * as productService from '../../services/productService'
import { useContext, useState } from 'react';
import AuthContext from '../../contexts/authContext';



export default function Admin() {
    const {isAdmin} = useContext(AuthContext);
    const [adminError, setAdminError] = useState('');
    // console.log(isAdmin)
    const navigate = useNavigate();

    const addProductHandler = async(values) => {
        try {
            
            let productName= values.productName;
            let productBrand= values.productBrand;
            let productImageUrl= values.productImageUrl;
            let productDescription= values.productDescription;
            let productPrice= values.productPrice;

            if(
                values.productName == '' ||
                values.productBrand == '' ||
                values.productImageUrl == '' ||
                values.productDescription == '' ||
                values.productPrice == ''
                ){
                    throw new Error('All fields are required.')
                }
            if(Number(values.productPrice) < 0){
                throw new Error('Price must be positive number')
            }
            if(isNaN(Number(values.productPrice))){
                throw new Error('Price must be number')
            }
            if(!values.productImageUrl.match(/^(http|https):\/\//)){
                throw new Error(`Image's url must start with "http" or "https"`)
            }

            const result = await productService.addProduct(
                productName,
                productBrand,
                productImageUrl,
                productDescription,
                productPrice
                );

                navigate('/products')
            } catch (err) {
            setAdminError(err.message);
            setTimeout(()=> {
                setAdminError('');
            }, 2000)
        }
      }

      const {values, onChange, onSubmit} = useForm(addProductHandler, {
        productName: '',
        productBrand: '',
         productImageUrl: '',
         productDescription: '',
         productPrice: ''
      });

    return (
        <main className="admin-main">
            {adminError && 
          <div className="alert4">
            <strong></strong> {adminError}
          </div>
          }
            <div className='add-product'>
                <h1>Add Product</h1>
                <form method='POST' className='add-product-form' onSubmit={onSubmit}>
                    <label htmlFor="productName">Product Name</label>
                    <input type="text" name='productName' onChange={onChange}  value={values.productName} />
                    <label htmlFor="productBrand">Product Brand</label>
                    <input type="text" name='productBrand' onChange={onChange}  value={values.productBrand} />
                    <label htmlFor="productImageUrl">Product Image's url</label>
                    <input type="text" name='productImageUrl' onChange={onChange}  value={values.productImage} />
                    <label htmlFor="productDescription">Description</label>
                    <input type="text" name='productDescription' onChange={onChange}  value={values.productDescription} />
                    <label htmlFor="productPrice">Price</label>
                    <input type="text" name='productPrice' onChange={onChange}  value={values.productPrice} />
                    <input type="submit" className='addProductBtn'/>
                </form>
            </div>
            {/* <div className='add-service'>
            <h1>Add Service</h1>
                <form method='POST' className='add-product-form'>
                    <label htmlFor="service-name">Service Name</label>
                    <input type="text" name='service-name' />
                    <label htmlFor="service-price">Price</label>
                    <input type="text" name='service-price' />
                    <input type="submit" />
                </form>
            </div> */}
        </main>
    );
}
