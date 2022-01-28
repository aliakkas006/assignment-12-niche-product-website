import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SingleProducts from './SingleProducts';

const Explore = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch('http://safe-mesa-82734.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setAllProducts(data));
    }, []);


    return (
        <Container className="mb-5">
            <Row xs={1} md={3} className="g-4">
                {
                    allProducts.map(pd => <SingleProducts
                        key={pd._id}
                        product={pd}
                    />)
                }
            </Row>
        </Container>
    );
};

export default Explore;