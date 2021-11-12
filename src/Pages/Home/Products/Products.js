import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('fakeData.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <Container className="mb-5">
            <Row xs={1} md={3} className="g-4">
                {
                    products.map(pd => <Product
                        key={pd.name}
                        product={pd}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Products;