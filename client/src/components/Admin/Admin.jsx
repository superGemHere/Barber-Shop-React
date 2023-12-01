import './admin.css'

export default function Admin() {


    return (
        <main className="admin-main">
            <div className='add-product'>
                <h1>Add Product</h1>
                <form method='POST' className='add-product-form'>
                    <label htmlFor="product-name">Product Name</label>
                    <input type="text" name='product-name' />
                    <label htmlFor="product-imageUrl">Product Image's url</label>
                    <input type="text" name='product-imageUrl' />
                    <label htmlFor="product-description">Description</label>
                    <input type="text" name='product-description' />
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