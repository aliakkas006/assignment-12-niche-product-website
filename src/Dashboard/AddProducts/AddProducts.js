import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddProducts = () => {
    const [product, setProduct] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProduct = { ...product };
        newProduct[field] = value;
        setProduct(newProduct);
    }

    const handleProductSubmit = e => {
        fetch('http://safe-mesa-82734.herokuapp.com/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Product added successfully!');
                    setProduct(null);
                }
            });
        e.preventDefault();
    }

    return (
        <div>
            <h2 className='text-center text-info mb-5'>Add a product:</h2>

            <form onSubmit={handleProductSubmit} className='text-center'>
                <input onBlur={handleOnBlur} name='image' placeholder='Enter the image URL link' className='mt-2 w-50' />
                <br />
                <input onBlur={handleOnBlur} name='name' placeholder='Enter the product name' className='mt-2 w-50' />
                <br />
                <textarea onBlur={handleOnBlur} name='description' placeholder='Enter the product description' className='mt-2 w-50' />
                <br />
                <input onBlur={handleOnBlur} name='price' placeholder='Enter the product price' className='mt-2 w-50' />
                <br />
                <Button className="me-3 mt-3" type="submit" variant="warning">Add Product</Button>
            </form>
        </div>
    );
};

export default AddProducts;