import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://safe-mesa-82734.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, []);

    return (
        <Container className="mb-5">
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(pd => <Product
                        key={pd._id}
                        product={pd}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Products;