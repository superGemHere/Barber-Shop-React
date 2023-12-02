import './admin.css'

import { useNavigate } from 'react-router-dom'

import useForm from '../../hooks/useForm';

import * as productService from '../../services/productService'



export default function Admin() {
    const navigate = useNavigate();

    const addProductHandler = async(values) => {
            let productName= values.productName;
            let productBrand= values.productBrand;
            let productImageUrl= values.productImageUrl;
            let productDescription= values.productDescription;
            let productPrice= values.productPrice;
        const result = await productService.addProduct(
            productName,
            productBrand,
            productImageUrl,
            productDescription,
            productPrice
        );
        navigate('/products')
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
                    <input type="submit" />
                </form>
            </div>
            <div className='add-service'>
            <h1>Add Service</h1>
                <form method='POST' className='add-product-form'>
                    <label htmlFor="service-name">Service Name</label>
                    <input type="text" name='service-name' />
                    <label htmlFor="service-price">Price</label>
                    <input type="text" name='service-price' />
                    <input type="submit" />
                </form>
            </div>
        </main>
    );
}